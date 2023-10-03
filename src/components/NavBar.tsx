
import Link from 'next/link';

const Navbar = () => {
  return (
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-2xl font-bold text-transparent bg-clip-text">Agronomia - Unisangil</h1>
            </div>
            <div className="flex">
              <Link href="/" passHref>
                <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">CIC</span>
              </Link>
              <Link href="/ph" passHref>
                <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">pH</span>
              </Link>
              <Link href="/mo" passHref>
                <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">MO</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Navbar;

