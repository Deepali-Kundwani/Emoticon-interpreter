import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love"

};

var ej = 0;
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  ej = emojisWeKnow.map(function (emoji) {
    return (
      <span
        onClick={() => emojiClickHandler(emoji)}
        style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        key={emoji}
      >
        {emoji}
      </span>
    );
  });

  function emojiInputHandler(event) {
    // processing
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning); // react call to show output
  }

  function emojiClickHandler(emoji) {
    // processing
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); // react call to show output
  }
  return (
    <div className="App">
      <h1>inside outt!</h1>

      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>
      {/* Actual output set by React using useState */}

      <h3> emojis we know </h3>
      {ej}
      <div className="Division">
        <p> Select the emoji and get the meaning out of it.</p>
      </div>
    </div>
  );
}
