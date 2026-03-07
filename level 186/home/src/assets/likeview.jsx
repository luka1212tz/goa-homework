function LikeView({ likes, onLike }) {
  return (
    <div>
      <p>Likes: {likes}</p>
      <button onClick={onLike}>Like</button>
    </div>
  )
}

export default LikeView