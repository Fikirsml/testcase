import { useState } from 'react';
import { Link } from 'react-router-dom';

// Define a type for userInfo
interface UserInfo {
  phone: string;
  password: string;
}

const Login = () => {
  // Specify the type for useState
  const [userInfo, setUserInfo] = useState<UserInfo>({
    phone: '',
    password: '',
  });

  // Define the event type for the handleUserChange function
  const handleUserChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="h-screen w-[90%] m-auto">
      <div></div>
      <div className="mt-20">
        <h1 className="text-2xl font-bold capitalize">Login to your account</h1>
        <p className="text-font-secondary capitalize tracking-tight mt-2">
          Good to see you again, enter your details below and start financing.
        </p>
      </div>

      <div className="mt-10">
        <label htmlFor="phone-number" className="font-extralight block mb-1">
          Phone Number
        </label>
        <input
          type="text"
          id="phone-number"
          value={userInfo.phone}
          name="phone"
          onChange={handleUserChange}
          className="w-full p-3 rounded-lg"
        />
        <label htmlFor="password" className="font-extralight block mt-3 mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={userInfo.password}
          name="password"
          onChange={handleUserChange}
          className="w-full p-3 rounded-lg border-solid-2 border-lightStroke"
        />
        <p className="flex justify-end mt-2 capitalize text-font-secondary">
          Forgot password?{' '}
          <Link to="/create-account" className="text-primary font-bold">
            <span>Click here</span>
          </Link>
        </p>
      </div>

      <div className="mt-20">
        <button className="w-full p-4 rounded-lg text-lightStroke bg-primary">
          Login
        </button>

        <button className="mt-1 w-full p-4 rounded-lg text-primary bg-lightStroke border-2 border-primary">
          Create an Account
        </button>
      </div>
    </div>
  );
};

export default Login;
