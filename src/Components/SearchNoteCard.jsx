import { Link } from "react-router-dom";

function SearchNoteCard({ id, title, note }) {
  const titleFixed =
    title.slice("").length < 75
      ? title
      : title.split("").slice(0, 75).join("") + "...";

  const noteFixed =
    note.slice("").length < 80
      ? note
      : note.split("").slice(0, 80).join("") + "...";

  return (
    <Link to={`/note/${id}`}>
      <div className="hover:bg-[rgb(29,33,45)] hover:text-black mx-5 mb-2 px-5 py-4 rounded-[7px] border border-[rgb(29,33,45)] cursor-pointer">
        <h4 className="text-[17px] text-[#adadad]">{titleFixed}</h4>
        <p className="text-[15px] text-[#3e4453]">{noteFixed}</p>
      </div>
    </Link>
  );
}

export default SearchNoteCard;
