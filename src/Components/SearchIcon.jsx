import { Link } from "react-router-dom";
import searchImg from "../assets/search.png";

function SearchIcon() {
  return (
    // <Link to={"/search"} className="">
    // <div className="flex items-center bg-[#10141e] px-2 rounded-full border-2 border-[#1a2031] cursor-pointer">
    <Link
      to={"/search"}
      className="flex items-center bg-[#10141e] px-2 rounded-full border-2 border-[#1a2031] cursor-pointer"
    >
      <img src={searchImg} alt="" className="w-4 h-4" />
      <span className="text-[12px] text-[#9e9fa2]">Ctrl K</span>
    </Link>

    // </Link>
  );
}

export default SearchIcon;
