import React from "react";

const CardComponent = () => {
  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjA0Mjg0MjQ0Nl5BMl5BanBnXkFtZTcwMjI5MjM5OQ@@._V1_SX300.jpg",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      rating: 8.9,
    },
    {
      id: 2,
      title: "The Godfather: Part II",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjA0Mjg0MjQ0Nl5BMl5BanBnXkFtZTcwMjI5MjM5OQ@@._V1_SX300.jpg",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      rating: 8.9,
    },
    {
      id: 3,
      title: "The Godfather: Part III",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjA0Mjg0MjQ0Nl5BMl5BanBnXkFtZTcwMjI5MjM5OQ@@._V1_SX300.jpg",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      rating: 8.9,
    },
    {
      id: 4,
      title: "The Godfather: Part IV",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjA0Mjg0MjQ0Nl5BMl5BanBnXkFtZTcwMjI5MjM5OQ@@._V1_SX300.jpg",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      rating: 8.9,
    },
    {
        id: 4,
        title: "The Godfather: Part IV",
        image:
          "https://m.media-amazon.com/images/M/MV5BMjA0Mjg0MjQ0Nl5BMl5BanBnXkFtZTcwMjI5MjM5OQ@@._V1_SX300.jpg",
        description:
          "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        rating: 8.9,
      },
      {
        id: 4,
        title: "The Godfather: Part IV",
        image:
          "https://m.media-amazon.com/images/M/MV5BMjA0Mjg0MjQ0Nl5BMl5BanBnXkFtZTcwMjI5MjM5OQ@@._V1_SX300.jpg",
        description:
          "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        rating: 8.9,
      },
  ];
  return (
    <div className="box">
     
        {movies.map((movie) => (
          <div className="movie-container" key={movie.id}>
            <h5>{movie.title}</h5>
            <img src={movie.image} alt={movie.title} />
            <p>{movie.description}</p>
            <strong>Rating: {movie.rating}</strong>
          </div>
        ))}
      
    </div>
  );
};

export default CardComponent;
