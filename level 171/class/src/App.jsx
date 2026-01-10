
function App() {


  // hover როცა მაუს გადავატარებთ ეშვება hover ში ჩაწერილი კოდი
  // focus რო
  return (
    <>
    <div className="flex flex-col">
      <button className="w-60 h-50 bg-amber-700  text-3xl text-teal-300   hover:w-70 hover:bg-blue-500">btn1</button>
     <button className="w-60 h-50 bg-amber-700  text-3xl text-teal-300 hover:h-100 hover:text-8xl hover:text-blue-700 ">btn2</button>
     <button className="w-60 h-50 bg-amber-700  text-3xl text-teal-300  hover:rounded-[50%]">btn3</button>
     
    <button className="w-60 h-50 bg-amber-700  text-3xl text-teal-300   focus:w-100 focus:bg-green-500">btn1</button>
     <button className="w-60 h-50 bg-amber-700  text-3xl text-teal-300 focus:h-100 focus:text-[300px] focus:text-blue-700 ">btn2</button>
     <button className="w-60 h-50 bg-amber-700  text-3xl text-teal-300  focus:rounded-[25 %]">btn3</button>

    <button className="w-60 h-14 bg-amber-700 text-3xl text-teal-300  active:bg-green-500">btn1</button>
    <button className="w-60 h-14 bg-amber-700 text-3xl text-teal-300 active:h-24 active:text-blue-700 active:text-5xl">btn2</button>
<button className="w-60 h-14 bg-amber-700 text-3xl text-teal-300 active:rounded-[25%] active:bg-red-600 ">btn3</button>


     </div>
    </>
  )
}

export default App
