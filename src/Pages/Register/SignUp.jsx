import { Link, useNavigate } from "react-router-dom";
import img from "../../../bistro-boss-restaurant-resources-main/assets/others/authentication1.png";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Components/Hooks/useAxiosPublic";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.PhotoURL)
        .then(() => {
          // create user entry in the database
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user added to the database");
              reset();
              Swal.fire({
                title: "",
                text: "sign up successful!",
                icon: "success",
              });
              navigate("/");
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-2/3 bg-transparent" src={img} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-2xl ml-8 mt-4 -mb-5"> Sign Up Here</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                {...register("name", { required: true })}
                placeholder="name"
                className="input input-bordered"
              />
              {errors.name && <span>Name is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && <span>Email is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="Photo URL"
                {...register("PhotoURL", { required: true })}
                placeholder="Photo URL"
                className="input input-bordered"
              />
              {errors.PhotoURL && <span>Photo URL is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600" role="alert">
                  Password is required
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600" role="alert">
                  Password must be 6 characters
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600" role="alert">
                  Password must be less 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600" role="alert">
                  Password must have one uppercase, one lowercase, one number
                  and one special character
                </p>
              )}
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign up</button>
            </div>
          </form>
          <p className="pl-8 mb-5">
            Do not have an account?{" "}
            <Link to="/login">
              <span className="text-blue-700">Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
