import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

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

  const [isExpanded, setIsExpanded] = useState(false);

  function handleClick() {
      setIsExpanded(true);
  };
  

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={input.title}
        />}
        <textarea
          onClick = {handleClick}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          value={input.content}
        />
        <Zoom in={isExpanded} >
          <Fab
          onClick={submitNote}
        >
          <AddIcon />
        </Fab>  
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
