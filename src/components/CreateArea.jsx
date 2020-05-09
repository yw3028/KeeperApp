import React, { useState } from "react";

function CreateArea(props) {
  const [input, setInput] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  function submitNote(event) {
    props.onAdd(input);
    event.preventDefault();
    setInput({
        title: "",
        content: ""
      });

  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={input.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={input.content}
        />
        <button
          onClick={submitNote}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
