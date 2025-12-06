
function SongItem({ title }) {
  let play = () => {
    alert(`Now playing: ${title}`);
  };

  return (
    <button onClick={play} style={{ margin: "5px" }}>
      {title}
    </button>
  );
}

export default SongItem;
