

function App() {




 // hover როცა მაუს გადავატარებთ ეშვება hover ში ჩაწერილი კოდი
// focus როცა ინპუტზე დაჭერილი გვაქვს მაუსი
// active როცა დავაჭერთ მაუსით div ს ან სხვა თეგს
 



  return (
    <>
    <button className="px-6 py-3 bg-blue-500 text-white hover:bg-red-500">
  Hover 1
</button>

<button className="px-6 py-3 bg-green-500 text-white hover:scale-110 transition">
  Hover 2
</button>

<button className="px-6 py-3 bg-purple-500 text-white hover:rounded-full transition">
  Hover 3
</button>

<button className="px-6 py-3 bg-orange-500 text-white hover:shadow-xl">
  Hover 4
</button>

<button className="px-6 py-3 bg-gray-700 text-white hover:text-yellow-300">
  Hover 5
</button>


<button className="px-6 py-3 bg-red-500 text-white active:bg-black">
  Active 1
</button>

<button className="px-6 py-3 bg-blue-600 text-white active:scale-90 transition">
  Active 2
</button>

<button className="px-6 py-3 bg-green-600 text-white active:opacity-50">
  Active 3
</button>


<button className="px-6 py-3 bg-pink-600 text-white active:translate-y-1 transition">
  Active 4
</button>


<input
  className="border p-2 focus:outline-none focus:ring-4 focus:ring-blue-500"
  placeholder="Focus 1"
/>

<input
  className="border p-2 focus:bg-yellow-200"
  placeholder="Focus 2"
/>

<input
  className="border p-2 focus:border-red-500"
  placeholder="Focus 3"
/>




    </>
  )
}

export default App
