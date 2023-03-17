import React, { useContext, useEffect, useState, useMemo } from "react";
import { CheckOutProduct } from "../components";
import { RadioGroup } from "@headlessui/react";
import { MdAlternateEmail } from "react-icons/md";
import { HiCheckCircle } from "react-icons/hi";
import { FaAddressCard } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdPayment } from "react-icons/md";
import { useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";
import {  Loader } from "rsuite";
import {  useNavigate } from "react-router-dom";
import {
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
} from "@chakra-ui/react";

const plans = [
  {
    name: "Express Delivery ",
    Offer: "Delivery 2-3 days",
    price: "Free",
  },
  {
    name: "Same Day Delivery ",
    Offer: "Delivery within 24hrs",
    price: "18.99",
  },
];

const steps = [
  {
    title: "Information",
    content: "First-content",
  },
  {
    title: "Payment Details",
    content: "Second-content",
  },
  {
    title: "Complete Order",
    content: "Last-content",
  },
];

const countries = [
  {
    id: 1,
    name: "USA",
    state: ["TX", "NY", "CL", "AT"],
  },
  {
    id: 2,
    name: "Ghana",
    state: ["Accra", "Kumasi", "Tamale", "Volta"],
  },
  {
    id: 3,
    name: "Canada",
    state: ["Toronto", "Cancity", "JL", "AT"],
  },
];

export const Checkout = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [selectedShippingMethod, setSelectedShippingMethod] = useState(
    plans[0]
  );
  const [checked, setChecked] = useState(true);
  const [userCountry, setUserCountry] = useState("");
  const [userBillingCountry, setUserBillingCountry] = useState("");
  const [input, setInput] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [totalItemPrice, setTotalItemPrice] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [tax, setTax] = useState(20);
  const [totalOrderAmount, setTotalOrderAmount] = useState(0);
  const generatedOrderId = uuid().slice(0, 8);
  const [paymentMethod, setPaymentMethod] = useState("Card");
  const [processOrder, setProcessOrder] = useState(false);
  const [ordersPlaced, setOrdersPlaced] = useState([]);
  const navigate = useNavigate();

  // const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === "";

  {
    /**get User Country and Billing country to find states/cites */
  }
  useEffect(() => {
    const userCountry = watch().country;
    const userBillingCountry = watch().BillingCountry;
    setUserCountry(userCountry);
    setUserBillingCountry(userBillingCountry);
  }, [watch().country, watch().BillingCountry]);

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  {
    /** calculate  product price */
  }
  useMemo(() => {
    const price = cartItems.map((product) =>
      product.quantity > 1 ? product.price * product.quantity : product.price
    );
    const totalPrice = price.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    setTotalItemPrice(totalPrice);
    setTotalOrderAmount((prev) => totalItemPrice + tax + shippingCost);
  }, [cartItems, tax, totalItemPrice, shippingCost]);

  {
    /** shipping cost ca */
  }
  const getShippingCost = (shippingMethod) => {
    setSelectedShippingMethod(shippingMethod);
    setShippingCost((prev) =>
      shippingMethod.price >= 0 ? Number(shippingMethod.price) : 0
    );
  };

  {
    /** Placing Order */
  }
  const onSubmit = (orderInformation) => {
    setProcessOrder(true);
    const newOrders = {
      ...orderInformation,
      orderId: generatedOrderId,
      orderAmount: {
        totalOrderAmount: totalOrderAmount,
        taxAmount: tax,
        subTotal: totalItemPrice,
      },
      orderStatus: "created",
      shippingMethod: selectedShippingMethod,
      product: cartItems,
    };
    setOrdersPlaced((prev) => [...prev, newOrders]);
    localStorage.setItem("SET_CART_ITEMS", JSON.stringify([]));
  };

  {
    /** updating database with newOrders */
  }
  useMemo(() => {
    if (ordersPlaced.length > 0) {
      localStorage.setItem("ORDER_PLACED", JSON.stringify(ordersPlaced));
      navigate("/Thank-You-Page");
      setProcessOrder(false);
    }
  }, [ordersPlaced]);

  return (
    <div>
      <div className="hidden md:grid grid-cols-2 gap-2 p-10 md:block ">
        <div>
          <h2 className="text-3xl text-center text-gray-700 font-bold md:text-4xl md:text-start md:w-[35rem]">
            Checkout
          </h2>
        </div>
        <div className="">{/* <Steps current={current} items={items} />*/}</div>
      </div>
      <div className="text-center text-gray-700 pt-3 md:hidden">
        <h3 className="text-xl  font-bold">Order Overview</h3>
      </div>
      <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4">
        <div className="mx-[2rem] md:mx-[5rem]">
          <div className="p-[1rem]">
            <h2 className="text-lg font-bold">Summary Order</h2>
            <p>Check our items and select shipping for better experience </p>
          </div>
          <div className="p-2 flex items-center justify-center  bg-[#F8F9FA]  border-solid  border-2 border-F8F9FA-600 rounded-lg  mg:w-[35rem] ">
            <ul role="list" className="my-2 divide-y divide-gray-200">
              {cartItems.map((product) => (
                <CheckOutProduct
                  key={product.id}
                  id={product.id}
                  img={product.thumbnail}
                  title={product.title}
                  price={product.price}
                  quantity={product.quantity}
                  removeFromCart={removeFromCart}
                />
              ))}
            </ul>
          </div>
          <div className="pt-[1rem]">
            <h3 className="text-gray-700 font-bold">
              Available Shipping Method
            </h3>
            <div className="w-full px-4 ">
              <div className="mx-auto  max-w-md">
                <RadioGroup
                  value={selectedShippingMethod}
                  onChange={getShippingCost}
                >
                  <RadioGroup.Label className="sr-only">
                    Server size
                  </RadioGroup.Label>
                  <div className="space-y-2">
                    {plans.map((plan) => (
                      <RadioGroup.Option
                        key={plan.name}
                        value={plan}
                        className={({ active, checked }) =>
                          `${
                            active
                              ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                              : ""
                          }
                        ${
                          checked
                            ? "bg-sky-900 bg-opacity-75 text-white"
                            : "bg-white"
                        }
                          relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <div className="flex w-full items-center justify-between">
                              <div className="flex items-center">
                                <div className="text-sm ">
                                  <RadioGroup.Label
                                    as="p"
                                    className={`  ${
                                      checked
                                        ? "text-white font-bold text-md"
                                        : "text-gray-900 font-bold text-md"
                                    }`}
                                  >
                                    {plan.name}
                                  </RadioGroup.Label>
                                  <RadioGroup.Description
                                    as="span"
                                    className={`inline ${
                                      checked ? "text-sky-100" : "text-gray-500"
                                    }`}
                                  >
                                    <span>{plan.Offer}</span>
                                  </RadioGroup.Description>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <p className="text-sm font-bold">
                                  {plan.price}
                                </p>
                                {checked && (
                                  <div className="shrink-0 text-white">
                                    <CheckIcon className="h-6 w-6" />
                                  </div>
                                )}
                              </div>
                            </div>
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F9FAFB] p-[1rem] mb-6  md:mx-[5rem] sm:rounded-md">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              <div className="py-2 space-y-2">
                <h2 className="text-lg font-bold">Contact Information</h2>

                <Stack spacing={0.8}>
                  <p className="text-md font-bold">Email Address</p>

                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      fontSize="1.2em"
                      children={<MdAlternateEmail color="gray.400" />}
                    />
                    <Input
                      variant="outline"
                      placeholder="Email Address"
                      {...register("email", { required: true })}
                      aria-invalid={errors.firstName ? "true" : "false"}
                    />
                    {errors.firstName?.type === "required" && (
                      <InputRightElement
                        children={
                          <HiCheckCircle color="green" fontSize="1.2em" />
                        }
                      />
                    )}
                  </InputGroup>
                </Stack>
              </div>
              <div className="space-y-5">
                <h2 className="text-lg font-bold">Shipping Details</h2>

                <Stack spacing={0.5}>
                  <InputGroup className="space-x-4">
                    <Input
                      variant="outline"
                      placeholder="First Name"
                      {...register("FirstName", { required: true })}
                    />

                    <Input
                      variant="outline"
                      placeholder="Last Name"
                      {...register("LastName", { required: true })}
                    />
                  </InputGroup>
                </Stack>

                <Stack spacing={0.5}>
                  <p className="text-md font-bold"> Address</p>

                  <InputGroup>
                    <Input
                      variant="outline"
                      placeholder="Address"
                      {...register("address", { required: true })}
                    />
                  </InputGroup>
                </Stack>

                <Stack spacing={0.5}>
                  <p className="text-md font-bold">Apartment,suite,etc</p>

                  <InputGroup>
                    <Input
                      variant="outline"
                      placeholder="Apartment"
                      {...register("apartment", { required: true })}
                    />
                  </InputGroup>
                </Stack>

                <Stack spacing={0.5}>
                  <InputGroup className="space-x-5">
                    <Input
                      variant="outline"
                      type="text"
                      placeholder="City"
                      {...register("city", { required: true })}
                    />
                    {!isError && (
                      <InputRightElement
                        children={
                          <HiCheckCircle color="green" fontSize="1.2em" />
                        }
                      />
                    )}

                    <Select
                      placeholder="Select country"
                      {...register("country")}
                    >
                      {countries.map((country) => (
                        <option key={country.id}>{country.name}</option>
                      ))}
                    </Select>
                  </InputGroup>
                </Stack>

                <Stack spacing={0.5}>
                  <InputGroup className="space-x-5">
                    <Select
                      placeholder="State"
                      {...register("State", { required: true })}
                    >
                      {userCountry &&
                        countries
                          .filter((country) => country.name === userCountry)
                          .map((country) =>
                            country.state.map((countryState) => (
                              <option key={countryState}>{countryState}</option>
                            ))
                          )}
                    </Select>

                    <Input
                      type="number"
                      placeholder="Zip Code"
                      {...register("ZipCode", { required: true })}
                    />
                  </InputGroup>
                </Stack>

                <Stack spacing={0.5}>
                  <p className="text-md font-bold">Phone</p>

                  <InputGroup>
                    <Input
                      variant="outline"
                      type="number"
                      placeholder="Phone"
                      {...register("PhoneNumber", { required: true })}
                    />
                    {!isError && (
                      <InputRightElement
                        children={
                          <HiCheckCircle color="green" fontSize="1.2em" />
                        }
                      />
                    )}
                  </InputGroup>
                </Stack>
              </div>
            </div>
            <div className="py-[3rem]">
              <h2 className="text-lg font-bold">Payment Details</h2>
              <div className="">
                {/** use chakra ui for this  */}
                {/** <Form.Group controlId="radioList">
                  <RadioGroup name="radioList" inline onChange={()=> setPaymentMethod(prev => value)}>
                    <Radio value="Card">Card </Radio>
                    <Radio value="PayPal">PayPal</Radio>
                    <Radio value="Cash">Cash</Radio>
                    
                  </RadioGroup>
                </Form.Group>
             */}
              </div>
              <div className="py-[1rem] space-y-4">
                <Stack spacing={0.5}>
                  <p className="text-md font-bold">Card Number</p>

                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      fontSize="1.4em"
                      children={<MdPayment color="gray.400" />}
                    />
                    <Input
                      variant="outline"
                      type="number"
                      placeholder="Card Number"
                      {...register("cardNumber", { required: true })}
                    />
                  </InputGroup>
                </Stack>

                <Stack spacing={0.5}>
                  <InputGroup className="space-x-4">
                    <Input
                      type="month"
                      placeholder="MM/YY"
                      {...register("cardData", { required: true })}
                    />

                    <Input
                      type="number"
                      placeholder="CVC"
                      {...register("cardCvc", { required: true })}
                    />
                  </InputGroup>
                </Stack>

                <Stack spacing={0.5}>
                  <p className="text-md font-bold">Card Holder</p>

                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      fontSize="1.2em"
                      children={<CgProfile color="gray.400" />}
                    />
                    <Input
                      variant="outline"
                      placeholder="Card Holder"
                      {...register("BillingName", { required: true })}
                    />
                    {!isError && (
                      <InputRightElement
                        children={
                          <HiCheckCircle color="green" fontSize="1.2em" />
                        }
                      />
                    )}
                  </InputGroup>
                </Stack>

                <p className="text-lg font-bold">Billing Address</p>
                <Stack spacing={0.5} className="space-y-4">
                  <p className="text-md font-bold">Country</p>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      fontSize="1.2em"
                      children={<FaAddressCard color="gray.400" />}
                    />
                    <Input
                      variant="outline"
                      placeholder="Address"
                      {...register("BillingAddress", { required: true })}
                    />
                    {!isError && (
                      <InputRightElement
                        children={
                          <HiCheckCircle color="green" fontSize="1.2em" />
                        }
                      />
                    )}
                  </InputGroup>
                  <Select
                    placeholder="Select country"
                    {...register("BillingCountry", { required: true })}
                  >
                    {countries.map((country) => (
                      <option key={country.id}>{country.name}</option>
                    ))}
                  </Select>
                  <InputGroup className="space-x-4">
                    <Select placeholder="State" {...register("BillingState")}>
                      {userBillingCountry &&
                        countries
                          .filter(
                            (country) => country.name === userBillingCountry
                          )
                          .map((country) =>
                            country.state.map((countryState) => (
                              <option key={countryState}>{countryState}</option>
                            ))
                          )}
                    </Select>

                    <Input
                      type="number"
                      placeholder="Zip Code"
                      {...register("BillingZipCode", { required: true })}
                    />
                  </InputGroup>
                </Stack>
              </div>
            </div>
            <button
              type="submit"
              className="flex items-center justify-center font-bold rounded-md border border-transparent bg-indigo-600 px-6 my-5 py-3 text-base  text-white shadow-sm hover:bg-indigo-700"
            >
              {processOrder ? (
                <Loader size="sm" content="Placing Order ..." />
              ) : (
                "Place Order"
              )}
            </button>
          </form>
          <div className="py-5 space-y-5">
            <div className="flex justify-between items-center border-b-2">
              <p className="text-md font-bold">Subtotal</p>
              <p className="font-bold">$ {totalItemPrice}</p>
            </div>
            <div className="flex justify-between items-center border-b-2">
              <p className="text-md font-bold">Shipping </p>
              <p className="font-bold">$ {shippingCost}</p>
            </div>
            <div className="flex justify-between items-center border-b-2">
              <p className="text-md font-bold">Tax </p>
              <p className="font-bold">$ {tax}</p>
            </div>
            <div className="flex justify-between items-center border-b-2">
              <p className="font-bold">Order total</p>
              <p className="font-bold">${totalOrderAmount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
{
  /** <div
            style={{
              marginTop: 24,
            }}
          >
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" onClick={() => message.success('Processing complete!')}>
                Done
              </Button>
            )}
            {current > 0 && (
              <Button
                style={{
                  margin: '0 8px',
                }}
                onClick={() => prev()}
              >
                Previous
              </Button>
            )}
          </div> */
}
