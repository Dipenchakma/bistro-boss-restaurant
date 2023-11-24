import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Components/Hooks/useAxiosPublic";
import { AuthContext } from "../Provider/AuthProvider";

const SocialLogin = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const { signInWithGoogle } = useContext(AuthContext);
  const handleGoogle = () => {
    signInWithGoogle().then((result) => {
    //   console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };
  return (
    <div>
      <div className="divider"></div>
      <div>
        <button className="flex items-center gap-3" onClick={handleGoogle}>
          {" "}
          <FaGoogle></FaGoogle> Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
