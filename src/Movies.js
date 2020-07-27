import React from "react";
import styled from "styled-components";

const MovieList = styled.div`
  ul {
    list-style: none;
    display: flex;
    padding: 0;
  }
  .Movie_Contents {
    margin-left: 40px;
  }
  ul > li {
    margin-right: 5px;
    color: #868e96;
    font-size: 0.8rem;
  }
  .Movie_view {
    width: 30%;
  }

  .Movie_Line {
    display: flex;
  }

  .pharase {
    width: 95%;
    margin: 0;
    margin-left: 10px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;
function Movies({ title, rating, year, genres, summary, poster, url }) {
  return (
    <MovieList className="Movie_view">
      <div className="Movie_Line">
        <img src={poster} title={title} alt={title} />
        <div className="Movie_Contents">
          <h1>{title}</h1>
          <ul>
            {genres.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h4>{year}</h4>
          <h4>Rating Score: {rating}</h4>
          <span>
            <a href={url}>Download</a>
          </span>
        </div>
      </div>
      <p className="pharase">{summary}</p>
    </MovieList>
  );
}

export default Movies;
