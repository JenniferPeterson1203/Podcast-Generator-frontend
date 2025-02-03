// import "./App.css";
import "./index.css";

import React from "react";
import { useState } from "react";

function App() {
  // const [transcript, setTranscript] = useState("");
  // const [podcastContent, setPodcastContent] = useState("");

  return (
    <div>
      <h1 className="bg-red-400">Podcast Generator</h1>
      <form>
        <label htmlFor="transcript">Enter Transcript: </label>
        <textarea
          id="transcript"
          name="transcript"
          // value={transcript}
          // onChange={handleInputChange}
          rows="4"
          cols="50"
          placeholder="Type your transcript here..."
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
