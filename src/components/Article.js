import React from "react";

function Article({ title, date, preview }){
    let displayedDate= date ? date : "January 1, 1970";
  return(
    <>
     <article>
        <h3> {title} </h3>
        <small> {displayedDate} </small>
        <p> {preview} </p>
     </article>
    </>
  );
}

export default Article;