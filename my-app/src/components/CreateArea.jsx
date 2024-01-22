import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    // destructuring event:
    const { name, value } = event.target;

    setNote((prevNote) => {
      // if(name === "title") {
      //     return {
      //         title: value,
      //         content: prevNote.content
      //     }
      // } else if(name === "content") {
      //     return {
      //         title: prevNote.title,
      //         content: value
      //     }
      // }

      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNotes(event) {
    props.onAdd(note);
    setNote(
      {
        title: "", 
        content: ""
      }
    );
    event.preventDefault();
  }

  // The default behaviour of form is to refresh the page. to stop that, use preventDefault().
  //   function handleSubmit(event) {
  //     event.preventDefault();
  //   }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={submitNotes}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
