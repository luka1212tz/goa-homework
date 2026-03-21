function Comment({ name, time, text, score, isYou, reply }) {
  return (
    <div className="flex gap-4 bg-white p-4 rounded-xl mb-4">

      <div className="flex flex-col items-center bg-gray-100 px-3 py-2 rounded-xl">
        <button className="text-gray-500">+</button>
        <span className="font-bold">{score}</span>
        <button className="text-gray-500">-</button>
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <strong>{name}</strong>

            {isYou && (
              <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded">
                you
              </span>
            )}

            <span className="text-gray-400 text-sm">{time}</span>
          </div>

          <div className="text-blue-500 cursor-pointer text-sm">
            {isYou ? "Delete Edit" : "Reply"}
          </div>
        </div>

        <p className="mt-2 text-gray-600">{text}</p>

        {reply && (
          <div className="mt-4 ml-6 border-l-2 border-gray-200 pl-4">
            {reply}
          </div>
        )}
      </div>

    </div>
  )
}

function App() {
  return (
    <div className="max-w-xl mx-auto mt-10">

      <Comment
        name="amyrobson"
        time="1 month ago"
        score={12}
        text="Impressive! Though it seems the drag feature could be improved..."
      />

      <Comment
        name="maxblagun"
        time="2 weeks ago"
        score={5}
        text="Woah, your project looks awesome!"
        reply={
          <Comment
            name="ramsesmiron"
            time="1 week ago"
            score={4}
            text="@maxblagun Focus on HTML, CSS, JS first."
          />
        }
      />

      <Comment
        name="juliusomo"
        time="2 days ago"
        score={2}
        isYou={true}
        text="I couldn’t agree more."
      />

    </div>
  )
}

export default App