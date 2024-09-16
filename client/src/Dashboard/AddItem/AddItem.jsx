import React, { useState } from "react";
import axios from "axios";
import { baseURL } from "../../components/Axios/axios";

const AddItem = () => {
  const [select, setSelect] = useState("");
  const fashionCloth = (
    <>
      <option value="shirt">Shirts</option>
      <option value="tShirt">T-Shirts</option>
      <option value="pant">Pants</option>
      <option value="shoe">Shoes</option>
      <option value="other">Others</option>
    </>
  );

  const electronicAccessories = (
    <>
      <option value="mobile">Mobile</option>
      <option value="laptop">Laptop</option>
      <option value="desktop">Desktop</option>
      <option value="earbud">Earbuds</option>
      <option value="headphone">Headphones</option>
      <option value="other">Others</option>
    </>
  );

  const healthBeauty = (
    <>
      <option value="hairCare">Hair Care</option>
      <option value="skinCare">Skin Care</option>
      <option value="menCare">Men Care</option>
      <option value="womenCare">Women Care</option>
      <option value="other">Others</option>
    </>
  );

  const carMotorbike = (
    <>
      <option value="car">Cars</option>
      <option value="bike">MotorBikes</option>
      <option value="carParts">Car Parts</option>
      <option value="bikeParts">MotorBikes Parts</option>
      <option value="other">Others</option>
    </>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.pName.value;
    const brand = form.pBrand.value;
    const color = form.pColor.value;
    const price = form.pPrice.value;
    const image = form.pImage.value;
    const quantity = form.pQuantity.value;
    const category = form.pCategory.value;
    const categoryType = form.pCategoryType.value;
    const details = form.pDetails.value;

    const productObject = {
      name,
      brand,
      color,
      price,
      image,
      quantity,
      category,
      categoryType,
      details,
    };
    axios
      .post(`${baseURL}/product`, productObject)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1 className="text-3xl text-center py-10">Add Product:</h1>
      <form className="w-3/4 mx-auto" onSubmit={handleSubmit}>
        <div className="space-y-5">
          <div className="flex justify-around">
            <div>
              <label htmlFor="product-name">Product Name:</label>
              <br />
              <input
                className="w-96 p-2 border border-gray-400 rounded-lg focus:border-gray-500"
                type="text"
                name="pName"
              />
            </div>
            <div>
              <label htmlFor="product-name">Product Brand:</label>
              <br />
              <input
                className="w-96 p-2 border border-gray-400 rounded-lg focus:border-gray-500"
                type="text"
                name="pBrand"
              />
            </div>
          </div>
          <div className="flex justify-around">
            <div>
              <label htmlFor="product-name">Product Price:</label>
              <br />
              <input
                className="w-96 p-2 border border-gray-400 rounded-lg focus:border-gray-500"
                type="number"
                name="pPrice"
              />
            </div>
            <div>
              <label htmlFor="product-name">Product Quantity:</label>
              <br />
              <input
                className="w-96 p-2 border border-gray-400 rounded-lg focus:border-gray-500"
                type="number"
                name="pQuantity"
              />
            </div>
          </div>
          <div className="flex justify-around">
            <div>
              <label htmlFor="product-name">Product Color:</label>
              <br />
              <input
                className="w-96 p-2 border border-gray-400 rounded-lg focus:border-gray-500"
                type="text"
                name="pColor"
              />
            </div>
            <div>
              <label htmlFor="product-name">Product Image:</label>
              <br />
              <input
                className="w-96 p-2 border border-gray-400 rounded-lg focus:border-gray-500"
                type="text"
                name="pImage"
              />
            </div>
          </div>
          <div className="flex justify-around">
            <div>
              <label htmlFor="product-name">Product Category:</label>
              <br />
              <select
                onChange={(e) => setSelect(e.target.value)}
                className="w-96 p-2 border border-gray-400 rounded-lg focus:border-gray-500"
                name="pCategory"
              >
                <option value="default">Please choice your category</option>
                <option value="fashionCloth">Fashion & Clothing</option>
                <option value="electronicAccessories">
                  Electronic Accessories
                </option>
                <option value="healthBeauty">Health & Beauty</option>
                <option value="carMotorbike">Cars & MotorBikes</option>
              </select>
            </div>
            <div>
              <label htmlFor="product-name">Product Category Type:</label>
              <br />
              <select
                className="w-96 p-2 border border-gray-400 rounded-lg focus:border-gray-500"
                name="pCategoryType"
              >
                <option value="default">Please choice your category</option>
                {select == "fashionCloth"
                  ? fashionCloth
                  : select == "electronicAccessories"
                  ? electronicAccessories
                  : select == "healthBeauty"
                  ? healthBeauty
                  : select == "carMotorbike"
                  ? carMotorbike
                  : ""}
              </select>
            </div>
          </div>
          <div className="mx-4">
            <label htmlFor="information">Product Information:</label>
            <textarea
              name="pDetails"
              className="w-full h-44 border border-gray-400 focus:border-gray-500 rounded-lg p-2"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button className="w-40 py-3 bg-blue-500 text-white rounded-lg transition-all duration-500 hover:bg-blue-600">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
