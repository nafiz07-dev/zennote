function Buttons({ onClick, children }) {
  return (
    <div
      className="btn bg-[white] text-black flex items-center gap-1 py-1 px-3 rounded tracking-wider cursor-pointer transform transition-transform duration-150 ease-in-out active:scale-95"
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Buttons;
