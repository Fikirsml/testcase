import { useState } from "react";
import { Link } from "react-router-dom";


interface UserInfo {
  phone: string;
  password: string;
  confirm: string;
}

const CreateAccount = () => {

  const [userInfo, setUserInfo] = useState<UserInfo>({
    phone: "",
    password: "",
    confirm: "",
  });

  const handleUserChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="h-screen w-[90%] m-auto">
      <div></div>
      <div className="mt-10 sm:mt-20">
        <h1 className="text-2xl font-bold capitalize">Create an account</h1>
        <p className="text-font-secondary capitalize tracking-tight mt-2 text-sm sm:text-base">
          Welcome friend, enter your details so let's get started in financing.
        </p>
      </div>

      <div className="mt-6 sm:mt-10">
        <label htmlFor="phone-number" className="font-extralight block mb-1 ">
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
        <label htmlFor="password" className="font-extralight block mt-3 mb-1 ">
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
        <label htmlFor="confirm" className="font-extralight block mt-3 mb-1 ">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirm"
          value={userInfo.confirm}
          name="confirm"
          onChange={handleUserChange}
          className="w-full p-3 rounded-lg border-solid-2 border-lightStroke"
        />
        <p className="flex justify-end mt-2 capitalize text-font-secondary text-xs sm:text-sm">
          Already have an account ?
          <Link to="/login" className="text-primary font-bold">
            <span>Login Instead</span>
          </Link>
        </p>
      </div>

      <div className="mt-10 sm:mt-20">
        <button className="w-full p-4 rounded-lg text-lightStroke bg-primary capitalize">
          Create an account
        </button>
      </div>
    </div>
  );
};

export default CreateAccount;
