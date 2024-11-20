import React from "react";

function About({ image, about }){
    let displayedImg= image ? <img src={image} alt="blog logo"/> : <img src="https://via.placeholder.com/215" alt="blog logo"/>;
  return(
    <>
     <aside>
        {displayedImg}
     </aside>
     <p> {about} </p>
    </>
  );
}

export default About;