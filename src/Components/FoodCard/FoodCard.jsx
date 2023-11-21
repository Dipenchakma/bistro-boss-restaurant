import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../Hooks/UseAuth";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import UseCarts from "../Hooks/UseCarts";

const FoodCard = ({ item }) => {
  const { name, price, image, recipe, _id } = item;
  const { user } = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = UseAxiosSecure();
  const [, refetch] = UseCarts()

  const handleCart = () => {
    if (user && user.email) {
      // send cart to the datab ase
      // console.log(user.email, food);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        price,
        image,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Cart added successful",
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch the cart to update the cart items
          refetch()
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged In",
        text: "Do you want login to add the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes,login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
          <p className="absolute right-0 top-0 mr-16 px-5 mt-16 bg-slate-900 rounded-xl text-white">
            $ {price}
          </p>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div onClick={handleCart} className="card-actions">
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
