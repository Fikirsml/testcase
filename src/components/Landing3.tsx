import { GoDotFill, GoDot } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Landing3 = () => {
  return (
    <div className="h-screen relative w-[90%] m-auto">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl text-font-dark font-bold text-center mx-w-[50%] tracking-wide">
          Activate your account <span className="text-primary">Now!</span>
        </h1>
        <p className="mt-2 capitalize text-font-secondary tracking-wide text-md text-center font-extralight">
          Effortless access, anytime, anywhere. Stay connected on the go.
        </p>
      </div>

      <div className="absolute bottom-0 w-full p-4">
        <ul className="flex justify-center items-center m-auto p-8 text-lg">
          <Link to="/landing2" className="text-font-secondary mr-auto">
            <li>Skip</li>
          </Link>
          <li className="px-1">
            <GoDot />
          </li>
          <li className="px-1">
            <GoDot />
          </li>
          <li className="px-1">
            <GoDotFill />
          </li>

          <Link to="/create-account" className="ml-auto">
            <li>Finish</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Landing3;
