import React from "react";

export default class MarkdownEditorUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>Hello, MarkdownEditor!</h1>
      </div>
    );
  }
}