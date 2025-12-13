import SongBody from "./SongBody"
import AlbumArt from "./AlbumArt"

function SongCard({ songObject }) {
  return (
    <div>
      <AlbumArt albumArt={songObject.albumArt} />
      <SongBody
        songTitle={songObject.songTitle}
        artist={songObject.artist}
      />
    </div>
  )
}

export default SongCard
