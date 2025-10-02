import React from "react";

function CreateArea(props) {
  
  function addNote(event) {
    event.preventDefault()
    const note = {
      title: event.target.title.value,
      content: event.target.content.value
    }
    props.onAdd(note)
    event.target.title.value = ""
    event.target.content.value = ""
  }

  return (
    <div>
      <form className="form" onSubmit={addNote}>
        <input name="title" placeholder="Title"/>
        <textarea name="content" placeholder="Take a note..." rows="3" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
