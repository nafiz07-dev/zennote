import { Link } from "react-router-dom";

function NoteCard({ id, title, note, dateCreated }) {
  const titleFixed =
    title.slice("").length < 45
      ? title
      : title.split("").slice(0, 45).join("") + "...";

  const noteFixed =
    note.slice("").length < 140
      ? note
      : note.split("").slice(0, 137).join("") + "...";

  return (
    <Link to={`/note/${id}`}>
      <div className="border border-[rgb(37,43,59)] p-[20px] rounded-lg cursor-pointer transform transition-transform duration-150 ease-in-out active:scale-95 w-full h-[11rem] flex flex-col justify-between">
        <div>
          <h4 className="text-[18.5px] text-[#adadad] font-medium">
            {titleFixed}
          </h4>
          <p className="text-[15px] text-[#3e4453] mb-2">{noteFixed}</p>
        </div>
        <span className="text-sm text-[#3e4453] font-bold">{dateCreated}</span>
      </div>
    </Link>
  );
}

export default NoteCard;
