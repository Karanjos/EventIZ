import { BiCalendarEvent, BiRightArrowAlt } from "react-icons/bi";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTelegramPlane,
  FaYoutubeSquare,
} from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col gap-4 my-20 items-center">
      <div className="w-full flex flex-col gap-2 items-center">
        <span>
          <BiCalendarEvent size={50} />
        </span>
        <h1 className="text-2xl font-semibold tracking-widest">
          One-stop platform
        </h1>
      </div>
      <div className="w-full max-w-2xl mx-auto">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl font-bold tracking-wider text-center leading-snug">
            Everything you need to schedule your work.
          </h1>
          <p className="font-normal text-sm tracking-widest text-center">
            Eventiz offers all the tools you need to manage your events, build a
            dedicated schedule, create meeting spaces and take your productivity
            to the next level..
          </p>
        </div>
      </div>
      <div className="flex gap-2 justify-center items-center my-8">
        <FaInstagramSquare size={30} />
        <FaFacebookSquare size={30} />
        <FaTelegramPlane size={30} />
        <FaYoutubeSquare size={30} />
        <FaLinkedinIn size={30} />
        <FaGithubSquare size={30} />
      </div>
      <div className="bg-[#064439] rounded-lg">
        <Link to="/login" className="flex gap-2 items-center py-2 px-4">
          Get Started <BiRightArrowAlt size={30} />
        </Link>
      </div>
    </div>
  );
};
export default HomePage;
