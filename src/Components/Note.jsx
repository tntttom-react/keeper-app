//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
import React from "react";

import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  return (
    <div
      className="note"
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
