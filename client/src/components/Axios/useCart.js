import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./instance";

const useCart = () => {
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axiosInstance.get("/cart");
      return res.data;
    },
  });

  return [refetch, cart];
};

export default useCart;
