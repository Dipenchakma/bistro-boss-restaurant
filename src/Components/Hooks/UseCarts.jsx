import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const UseCarts = () => {
    const {user} = UseAuth()
  // tan stack query
const axiosSecure = UseAxiosSecure()
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () =>{
        const res = await axiosSecure.get(`/carts?email=${user.email}`)
        return res.data
    }
  });
  return [cart, refetch]
};

export default UseCarts;
