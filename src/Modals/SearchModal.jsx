import { Link } from "react-router-dom";
import SearchNoteCard from "../Components/SearchNoteCard";
import { useEffect } from "react";
import { useRef } from "react";
import useLocalStorage from "../custom-hooks.jsx/useLocalStorage";
import { useState } from "react";

function SearchModal() {
  // auto foucse to input
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // Focus the input on mount
  }, []);

  const [noteData, setNoteData] = useLocalStorage("note", []);
  // const [noteData, setNoteData] = useLocalStorage("note", "");

  const [query, setQuery] = useState("");

  // Filter notes based on search query (case-insensitive)
  const filteredNotes = noteData.filter(
    (n) =>
      n.title.toLowerCase().includes(query.toLowerCase()) ||
      n.note.toLowerCase().includes(query.toLowerCase())
  );

  // console.log(filteredNotes);

  return (
    <>
      <Link to="/">
        <div className="fixed bg-black w-[100%] h-[100vh] opacity-80"></div>
      </Link>

      <div className="fixed top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#10141e] border border-[rgb(46,53,72)] rounded-2xl max-sm:w-[75%]">
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search"
          className="border-b border-[rgb(31,36,49)] w-[40rem] px-5 py-3 text-[20px] outline-0 mb-5"
        />
        <div className="h-85 overflow-y-auto mb-3 hide-scrollbar ">
          {filteredNotes.length > 0 ? (
            filteredNotes.map((noteItem) => (
              <SearchNoteCard
                id={noteItem.id}
                title={noteItem.title}
                note={noteItem.note}
              />
            ))
          ) : (
            <p className="text-center text-[#3e4453]">No note were found!</p>
          )}

          {/* <SearchNoteCard /> */}
        </div>
      </div>
    </>
  );
}

export default SearchModal;
