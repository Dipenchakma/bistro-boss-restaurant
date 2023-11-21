import img from "../../../bistro-boss-restaurant-resources-main/assets/others/authentication1.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Login = () => {
  const [disable, setDisable] = useState(true);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    login(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "",
        text: "Login successful!",
        icon: "success",
      });
      navigate(from, { replace: true });
    });
  };

  const handleValidateCaptcha = (e) => {
    const captchaValue = e.target.value;
    console.log(captchaValue);
    if (validateCaptcha(captchaValue)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img className="w-2/3 bg-transparent" src={img} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  placeholder="type here"
                  name="captcha"
                  className="input input-bordered"
                  required
                />
                {/* <button className="btn btn-outline btn-xs mt-5">validate</button> */}
              </div>
              <div className="form-control mt-6">
                <button disabled={disable} className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
            <p className="pl-8 mb-5">
              Do not have an account?{" "}
              <Link to="/signUp">
                <span className="text-blue-700">register here</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
