import { useState } from "react";
import "./styles.css";

var musicDB = {
  "Hip Hop": [
    { name: "Eminem", song: "Lose Yourself" },
    { name: "Coolio", song: "Gangster's Paradise" },
    { name: "BigSean", song: "Friday Night Cypher" }
  ],
  "Psychadelic Rock": [
    { name: "Pink Floyd", song: "Echoes" },
    { name: "Pink Floyd", song: "Shine On You Crazy Diamond" },
    { name: "Pink Floyd", song: "Echoes" }
  ],
  Rock: [
    { name: "Freddie Mercury", song: "The Great Pretender" },
    { name: "The Queens", song: "Bohemian Rapsody" },
    { name: "Led Zepplin", song: "Stairway To Heaven" }
  ]
};

export default function App() {
  var musicList = Object.keys(musicDB);
  const [clickCounter, setClickCounter] = useState("Hip Hop");

  function onClickHandler(music) {
    setClickCounter(music);
  }

  return (
    <div className="App">
      <h1>Song Recommender</h1>
      <h2>Select Music Genre to see my Song recommendations!</h2>
      <div>
        {musicList.map((music) => (
          <li
            style={{
              display: "inline-block",
              margin: "1rem",
              border: "3px solid black",
              borderRadius: "1rem",
              padding: "0.5rem",
              backgroundColor: "lightpink",
              cursor: "pointer"
            }}
            onClick={() => onClickHandler(music)}
          >
            {music}
          </li>
        ))}
      </div>
      <div>
        {musicDB[clickCounter].map((music) => (
          <li
            style={{
              borderRadius: "1rem",
              padding: "0.5rem",
              backgroundColor: "lightpink",
              display: "block",
              textAlign: "left"
            }}
          >
            <div style={{ fontSize: "30px" }}>{music.song}</div>
            <div
              style={{ display: "block", fontSize: "20px", fontWeight: "bold" }}
            >
              by {music.name}
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}
