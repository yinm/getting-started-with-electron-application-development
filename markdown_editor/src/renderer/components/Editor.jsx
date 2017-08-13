import React from "react";

export default function Editor(props) {
  return (
    <textareaa
      id="editor"
      value={props.value}
      onChange={props.onChange}
    />
  );
}