import Logo from "./Logo";
import SearchIcon from "./SearchIcon";
import Button from "./Button";

function Navbar() {
  return (
    <div className="flex mb-8 justify-between items-center">
      <Logo />
      <div className="flex gap-3">
        <SearchIcon />
        <Button />
      </div>
    </div>
  );
}

export default Navbar;
