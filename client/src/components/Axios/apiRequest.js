import axiosSource from "./axios";

export const fetchCart = async () => {
  let data;
  await axiosSource
    .get("/cart")
    .then((res) => {
      if (res.data) {
        data = res.data;
      }
    })
    .catch((err) => console.log(err));

  return data;
};
