import NoteCard from "../Components/NoteCard";
import useLocalStorage from "../custom-hooks.jsx/useLocalStorage";

function Main() {
  const [notes, setNotes] = useLocalStorage("note", "");
  const notesReverse = [...notes].reverse();
  console.log(notesReverse);

  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      {notesReverse.length > 0 ? (
        notesReverse.map((noteItem) => (
          <NoteCard
            id={noteItem.id}
            title={noteItem.title}
            note={noteItem.note}
            dateCreated={noteItem.dateCreated}
            key={noteItem.id}
          />
        ))
      ) : (
        <p className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#9e9fa2]">
          Start by creating a new note
        </p>
      )}
    </div>
  );
}

export default Main;
