import { Link } from 'react-router-dom';


const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      

      <h2 className="text-2xl font-semibold text-gray-700">Oops...</h2>
      
      <p className="text-gray-500 mt-2">
      It looks like this page does not exist.
      </p>

      <Link
        to="/"
        className="flex items-center justify-center w-36 py-2 
                bg-[#1AB1F6] text-white hover:bg-[#1389c9] mx-auto 
                rounded-3xl mt-10"
      >
        Go back
      </Link>
    </div>
  );
};

export default PageNotFound;
