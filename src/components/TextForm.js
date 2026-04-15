import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase", "success");
  };

  const handleTitleCaseClick = () => {
    const newText = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
    props.showAlert("Converted to title case", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text has been cleared", "success");
  };

  const handleSpeakClick = () => {
    if (!isSpeaking) {
      const msg = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(msg);
      setIsSpeaking(true);
      msg.onend = () => setIsSpeaking(false);
    } else {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text has been copied to clipboard", "success");
  };

  const handleRemoveWhiteSpaceClick = () => {
    const newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    props.showAlert("Extra white space removed", "success");
  };

  const handleNumExtract = () => {
    const digits = text.match(/[0-9]/g);
    if (digits !== null) {
      setText(digits.join(""));
      props.showAlert("Extracted numbers from the text", "success");
    } else {
      props.showAlert("No numbers found in the text", "warning");
    }
  };

  const handleTextExtract = () => {
    const letters = text.match(/[a-zA-Z]/g);
    if (letters !== null) {
      setText(letters.join(""));
      props.showAlert("Extracted letters from the text", "success");
    } else {
      props.showAlert("No letters found in the text", "warning");
    }
  };

  const handleLinkExtract = () => {
    const links = text.match(
      /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#/%=~_|$?!:,.]*\)|[A-Z0-9+&@#/%=~_|$])/gim
    );
    if (links !== null) {
      setText(links.join("\n"));
      props.showAlert("Extracted links from the text", "success");
    } else {
      props.showAlert("No links found in the text", "warning");
    }
  };

  const wordCount = text.trim().length > 0 ? text.trim().split(/\s+/).length : 0;
  const readingTime = (wordCount * 0.08).toFixed(2);

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 className="mb-2">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            placeholder="Type or paste your text here..."
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          />
        </div>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowClick}
        >
          Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleTitleCaseClick}
        >
          Title Case
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleRemoveWhiteSpaceClick}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleNumExtract}
        >
          Extract Numbers
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLinkExtract}
        >
          Extract Links
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleTextExtract}
        >
          Extract Letters
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleSpeakClick}
        >
          {isSpeaking ? "Stop Listening" : "Listen"}
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopyClick}
        >
          Copy to Clipboard
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-danger mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Text Summary</h2>
        <p>
          {wordCount} words &bull; {text.length} characters &bull; ~{readingTime} min read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview yet."}</p>
      </div>
    </>
  );
}
