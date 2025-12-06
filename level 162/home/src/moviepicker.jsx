
function MovieItem({ name }) {
  let addMovie = () => {
    alert(`You added ${name} to your watchlist!`);
  };

  return (
    <button onClick={addMovie} style={{ margin: "5px" }}>
      {name}
    </button>
  );
}

export default MovieItem;
