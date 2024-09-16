import React from "react";

const Order = () => {
  return (
    <div className="mt-16">
      <div className="w-[1190px] mx-auto pt-16">
        <h3 className="font-medium text-[17px] mb-3">Delivery Information</h3>
        <div className="w-4/6">
          <div className="py-2 flex gap-5">
            <div className="w-full">
              <label
                className="text-gray-500 text-[13px] font-medium"
                htmlFor="fullname"
              >
                Full name:
              </label>
              <input
                className="w-full border border-gray-300 mt-1 px-2 py-1 placeholder:text-sm focus:outline-gray-400"
                type="text"
                placeholder="Enter your first name and last name"
              />
            </div>
            <div className="w-full">
              <label
                className="text-gray-500 text-[13px] font-medium"
                htmlFor="fullname"
              >
                Phone Number:
              </label>
              <input
                className="w-full border border-gray-300 mt-1 px-2 py-1 placeholder:text-sm focus:outline-gray-400"
                type="text"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          <div className="py-2 flex gap-5">
            <div className="w-full">
              <label
                className="text-gray-500 text-[13px] font-medium"
                htmlFor="fullname"
              >
                Full name:
              </label>
              <input
                className="w-full border border-gray-300 mt-1 px-2 py-1 placeholder:text-sm focus:outline-gray-400"
                type="text"
                placeholder="Enter your first name and last name"
              />
            </div>
            <div className="w-full">
              <label
                className="text-gray-500 text-[13px] font-medium"
                htmlFor="fullname"
              >
                Phone Number:
              </label>
              <input
                className="w-full border border-gray-300 mt-1 px-2 py-1 placeholder:text-sm focus:outline-gray-400"
                type="text"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
