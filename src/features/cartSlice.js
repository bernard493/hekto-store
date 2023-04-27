import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    cartItems : {},
    cartItemsQuantity:0,
    
    handleProductQuantity : 0,

    
}




const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addToCart: (state)=>{
            
        }
        // addToCart : (state , productId) => {
        //     const product = data.find((product) => product.id === productId);
        //     const productExist = cartItems.filter((item) => item.id === product.id);
        //     if (productExist.length >= 1) {
        //       setCartItems((prev) =>
        //         prev.map((item) =>
        //           item.id === product.id
        //             ? { ...item, quantity: item.quantity + 1 }
        //             : item
        //         )
        //       );
        //     } else {
        //       setCartItems([{ ...product, quantity: 1 }, ...cartItems]);
        //     }
        //   },
    }
})




export const cartState = (state) => state.cart;
export const {addToCart} = cartSlice.actions
export default cartSlice.reducer


