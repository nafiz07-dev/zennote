import { useState } from "react";
import Buttons from "../Components/Buttons";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../custom-hooks.jsx/useLocalStorage";
import formatDate from "../assets/formateDate";
import backTic from "../assets/next.png"

function NewNote() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [isInput, setIsInput] = useState(false);
  const navigate = useNavigate();

  // Saving the note in localStorage
  const [createNote, setCreateNote] = useLocalStorage("note", "");

  // Formating Date

  const newNote = [
    ...createNote,
    { id: Date.now(), dateCreated: formatDate(new Date()), title, note },
  ];

  function handleCreate() {
    if (!title) {
      setIsInput(true);
      return;
    }
    navigate("/");
    setCreateNote(newNote);
  }
  function handleBack() {
    navigate("/");
  }

  return (
    <div>
      {/* title  */}
      {isInput && (
        <p className="text-red-700 text-center">! Please input a title.</p>
      )}
      <div className="flex">
        <input
          type="text"
          placeholder="Title Here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className=" outline-0 w-[100%] p-2 mr-2 text-[18px] text-[#ffffff] rounded-md"
        />
        <div className="flex gap-1
        ">
          <Buttons onClick={handleCreate}>Create</Buttons>
          <Buttons onClick={handleBack}><img src={backTic} alt="back-button" className="w-7"/></Buttons>
        </div>
      </div>
      {/* Note */}
      <textarea
        type="text"
        placeholder="Description"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className=" w-[100%] h-[85vh] mt-2 text-[#9e9fa2] outline-0 p-2 rounded-md"
      />
    </div>
  );
}

export default NewNote;
