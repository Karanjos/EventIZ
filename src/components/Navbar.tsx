import { BiCalendarEvent, BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[70px] border-b-2 border-[#064439]">
      <header className="max-w-7xl mx-auto h-full">
        <nav className="w-full h-full flex justify-between items-center">
          <div className="">
            <Link to="/" className="flex gap-1 items-center">
              <h1 className="font-bold font-sherif text-3xl">EventIZ</h1>
              <BiCalendarEvent size={30} />
            </Link>
          </div>
          <div className="bg-[#064439] rounded-lg">
            <Link to="/login" className="flex gap-2 items-center py-2 px-4">
              Get Started <BiRightArrowAlt size={30} />
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default Navbar;
