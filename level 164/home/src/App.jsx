import playlistData from "./playlistData"
import SongCard from "./SongCard"

function App() {
  return (
    <div>
      {playlistData.map((song, index) => (
        <SongCard key={index} songObject={song} />
      ))}
    </div>
  )
}

export default App
