import React from "react";
import { Link } from "react-router-dom";





export const BlogCard = ({postImg,tittle,text,id}) => {
  return (
    <div key={id} className="group p-7 mb-7  h-[25rem]  rounded-xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 sm:p-8 dark:shadow-none dark:border-gray-700 dark:bg-gray-800">
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={postImg}
          alt="art cover"
          loading="lazy"
          width="1000"
          height="667"
          className="h-40 w-full object-cover object-top transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-6 relative">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
         {tittle}
        </h3>
        <p className="my-3 truncate   text-gray-600 text-bold dark:text-gray-300">
         {text}
        </p>
        <Link className="inline-block" to={`blog-detail/${id}`}>
          <span className="text-primary">Read more</span>
        </Link>
      </div>
    </div>
  );
};
