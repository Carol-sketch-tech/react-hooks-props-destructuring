import React from "react";

function MovieCard({
  title,
  posterSrc = "https://m.media-amazon.com/images/M/MV5BOTJjNzczMTUtNzc5MC00ODk0LWEwYjgtNzdiOTEyZmQxNzhmXkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_UY268_CR1,0,182,268_AL_.jpg",
  genres,
}) {
  return (
    <div className="movie-card">
      <img src={posterSrc} alt={title} />
      <h2>{title}</h2>
      <small>{genres.join(", ")}</small>
    </div>
  );
}

export default MovieCard;


//  extra notes when studying.
// static prop data 
function Movie(){
  return (
    <div id="movie-card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1OTYGz2GDC1XjA9tirh_1Rd571yE5UFIYsmZp4nACMd7CCHM" alt="origins of hiphop"></img>
      <h2>Mad Max:Super Sonic </h2>
      <small>Geners:Action, Adeveture, Science Fiction, Thriller</small>
    </div>
  )
}
Movie;

// passing in props 
// the above fucnitonal componenet has static prop code. But what if we want o pass another prop for anohter movie?
// we pass component taht receive props from the parent component.
// to pass the prop to a componenet, we add them as attributes whenyou render the 
// componenet, just like adding attributes to an HTML element.
 const movieTitle="Super Sonic"
 return(
  <Movie title={movieTitle}/> // note that the value of the prop is enclosed inside curly braces.
  // remeber values of props can be of any datatype, if the value of the prop is a string it should be enclosed with double quotation marks.

 )

//  DESTRUCTURING PROPS.
// parent component.
function AnotherApp(){
  const socialLinks= {
    github:"https://github.com/liza",
    likedin:"https://www.linkedin.com/in/liza/",
  }
  return (
    <div>
      <SocialMedia links={socialLinks}/>
    </div>
  )
}
AnotherApp;
//  child component of AnotherApp
function SocialMedia({socialLinks}){
  return (
    <div> <a href={socialLinks.github}>{socialLinks.github}</a>,
    <a href={socialLinks.linkedin}>{socialLinks.linkedin}</a></div>
  )
}
// since social links is an object, we can also destruture ut to make our JSX
// cleaner, either by detructuring in the body of the function
// destructuring the props socialLinks
 function SocialMedia({socialLinks}){
  // the attribute below shows destructuring nested objects
  const {github,linkedin}= socialLinks
   return (
    <div>
      <a href={github}>{github}</a>,
      <a href={linkedin}>{linkedin}</a>
    </div>
   )
 }
//  we can also destructure as we are passing a prop as an argument to a child component.
 function SocialMedia({socialLinks :{github, linkedin}}){
  return (
    <div>
      <a href={github}>{github}</a>,
      <a href={linkedin}>{linkedin}</a>
    </div>
  )
 }

//  DEFAULT VALUES FOR PROPS.
// default values are assigned when a props is passed as an argument to the child component 
// however a value is assigned to using the assignment operator.
// for example.
  function MovieCard({title,genres, posterSrc="https://m.media-amazon.com/images/M/MV5BOTJjNzczMTUtNzc5MC00ODk0LWEwYjgtNzdiOTEyZmQxNzhmXkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_UY268_CR1,0,182,268_AL_.jpg"}){
    return (
      <div>
        <img src={posterSrc} alt={title}></img>,
        <h2>{title}</h2>,
        <small>{genres.join(", ")}</small>
      </div>
    )
  }