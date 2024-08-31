import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState("");
  return (
    <div>
      <StarRating
        color="blue"
        maxRating={10}
        message={["😐", "😚", "😊", "😁", "🤗", "😀", "😎", "😍", "🥰", "🤑"]}
        onSetRating={setMovieRating}
      />
      <p>Rate of the Movie is {movieRating}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating maxRating={10} />
    <Test />
  </React.StrictMode>
);
