import { GoDotFill, GoDot } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Landing2 = () => {
  return (
    <div className="h-screen relative w-[90%] m-auto">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl text-font-dark font-bold text-center mx-w-[50%]">
          Easy Access, <span className="text-primary">Whenever</span> and <span className="text-primary">Wherever</span> you are.
        </h1>
        <p className="mt-2 capitalize text-font-secondary tracking-wide text-md text-center font-extralight">
          Effortless access, anytime, anywhere. Stay connected on the go.
        </p>
      </div>

      <div className="absolute bottom-0 w-full p-4">
        <ul className="flex justify-center items-center m-auto p-8 text-lg">
          <Link to="/" className="text-font-secondary mr-auto">
            <li>Skip</li>
          </Link>

          <li className="px-1">
            <GoDot />
          </li>
          <li className="px-1">
            <GoDotFill />
          </li>
          <li className="px-1">
            <GoDot />
          </li>

          <Link to="/landing3" className="ml-auto">
            <li>Next</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Landing2;
