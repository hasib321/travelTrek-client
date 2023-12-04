import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginLottie from "../../assets/login.json";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
// import axios from "axios";
import useAuth from "../../hook/useAuth";
import useAxiosPublic from "../../hook/useAxiosPublic";

const Login = () => {
  const { logInUser, googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    //login with email & password
    logInUser(email, password)
      .then((result) => {
        console.log(result.user);

        const loggedInUser = result.user;
        console.log(loggedInUser);
        // const user = { email };

        //get access token
        // axios
        //   .post("https://ridewave-server.vercel.app/jwt", user, {
        //     withCredentials: true,
        //   })
        //   .then((res) => {
        //     console.log(res.data);
        //   })
        //   .catch((error) => console.log(error));

        navigate(location?.state ? location.state : "/");
        new Swal("Good job!", "Successfully logged in", "success");
      })
      .catch((error) => {
        console.log(error);
        new Swal("OPS!", error.message, "error");
      });
  };

  //login with Google
  const handleGoogleLogIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        const touristInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        axiosPublic.post("/tourist", touristInfo).then((res) => {
          console.log(res.data);
        });
        navigate(from, { replace: true });
        new Swal("Good job!", "Successfully logged in", "success");
      })
      .catch((error) => {
        console.log(error);
        new Swal("OPS!", error.message, "error");
      });
  };
  return (
    <div className="max-w-screen-xl mx-auto px-8">
      <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-10 my-8">
        <div className="flex-1">
          <div>
            <Lottie
              animationData={loginLottie}
              loop={false}
              className="h-96"
            ></Lottie>
          </div>
        </div>
        <div className="flex-1">
          <div className="card flex-shrink-0 w-full max-w-sm  shadow-2xl bg-[#e2f4ea]">
            <form onSubmit={handleSubmit} className="card-body">
              <h1 className="text-5xl text-[#2095AE] text-center font-bold">
                Log In!
              </h1>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-600 font-semibold">
                    Email
                  </span>
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
                  <span className="label-text text-gray-600 font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-gray-600 font-semibold"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#2095AE] text-white">Log In</button>
              </div>
              <div className="mt-3">
                <div className="flex items-center  gap-1">
                  <h1 className="text-gray-600 font-semibold">Or login with</h1>
                  <div className="mt-2 ">
                    {/* Google login */}
                    <FcGoogle
                      onClick={handleGoogleLogIn}
                      className="text-red-600 text-4xl cursor-pointer"
                    ></FcGoogle>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-gray-600 font-semibold">
                  Don't have account? please
                  <Link className="text-[#2095AE]" to="/registration">
                    <span> Registration</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
