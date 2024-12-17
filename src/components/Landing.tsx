import { GoDotFill, GoDot } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="h-screen relative w-[90%] m-auto">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl text-font-dark font-bold">
          Welcome to Pay<span className="text-primary">ET</span>.
        </h1>
        <p className="mt-2 capitalize text-font-secondary tracking-wide text-lg text-center font-extralight">
          Revolutionize your finances, one tap at a time!
        </p>
      </div>

      <div className="absolute bottom-0 w-full p-4">
        <ul className="flex justify-center items-center m-auto p-8 text-lg">
          <Link to="landing" className="text-font-secondary mr-auto">
            <li>Skip</li>
          </Link>

          <li className="px-1">
            <GoDotFill />
          </li>
          <li className="px-1">
            <GoDot />
          </li>
          <li className="px-1">
            <GoDot />
          </li>

          <Link to="/landing2" className="ml-auto">
            <li>Next</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Landing;
