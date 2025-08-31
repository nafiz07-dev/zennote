import { Link } from "react-router-dom";

function button() {
  return (
    <Link to={"/create"}>
      <div className="btn bg-[white] text-black flex items-center gap-1 py-1 px-3 rounded tracking-wider cursor-pointer transform transition-transform duration-150 ease-in-out active:scale-95">
        <span>+</span>
        <span>New</span>
      </div>
    </Link>
  );
}

export default button;
