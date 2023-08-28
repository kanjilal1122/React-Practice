import React from "react";
import withFetch from "./withFetch";
import { ImageList, ImageListItem } from "@mui/material";

function MovieList(props) {
  const { movies } = props;
 // console.log(props.movies);
  return (
    <div>
      <h2>Movie list HOC</h2>
      <ImageList
        sx={{ width: 500, height: 450 }}
        cols={4}
        rowHeight={164}
      >
        {
          movies.map((movie)=>(
            <ImageListItem key={movie.id}>
              <img  src={`${movie.poster}?w=164h=164&fit=crop&auto=format`}
              srcSet={`${movie.poster}?w=164h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={movie.title}
              loading="lazy"
              />
            </ImageListItem>
          ))
        }
      </ImageList>
    </div>
  );
}

const HOC = withFetch(MovieList);
export default HOC;

