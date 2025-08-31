import { useNavigate, useParams } from "react-router-dom";
import Buttons from "../Components/Buttons";
import useLocalStorage from "../custom-hooks.jsx/useLocalStorage";
import { useState } from "react";

function NotePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // data from local storage:
  const [notes, setNotes] = useLocalStorage("note", "");
  const noteData = notes.find((e) => e.id === +id);
  console.log(noteData, notes);

  const [title, setTitle] = useState(noteData.title);
  const [note, setNote] = useState(noteData.note);

  const [isEditing, setIsEditing] = useState(false);

  const index = notes.findIndex((e) => e.id === +id);

  let newNotes;

  if (index !== -1) {
    // update existing note
    const updatedNote = { ...notes[index], title, note };
    newNotes = [...notes];
    newNotes[index] = updatedNote;
  }

  function handleButton() {
    navigate(-1);
    setNotes(newNotes);
  }

  return (
    <div>
      {/* title  */}
      <div className="flex">
        <div onClick={() => setIsEditing(true)} className="w-[100%]">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title Here"
            className=" outline-0 w-[100%] p-2 mr-2 text-[18px] text-[#ffffff]"
          />
        </div>
        <div>
        <Buttons onClick={handleButton}>{isEditing ? "Save" : "Back"}</Buttons>
        </div>
      </div>
      {/* Note */}
      <div onClick={() => setIsEditing(true)}>
        <textarea
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Description"
          className="w-[100%] h-[85vh] mt-2 text-[#9e9fa2] outline-0 p-2"
        />
      </div>
    </div>
  );
}

export default NotePage;
