

function App() {

  // classname ვიყენებთ რეაქტში ხოლო class html ში

  //<h1 class="big">Title</h1>
  //<h1 className="big">Title</h1>

  //<p class="small">Title</p>
  //<p className="small">Title</p>

  //<h2 class="didi">Title</h2>
  //<h2 className="didi">Title</h2>

  const name = "Luka";
  const age = 20;
  const isStudent = true;
  
  
  return (
    <>
  
    <p1>5 + 5</p1>
    <p1>{5 + 5}</p1>

    <p1>1 + 1</p1>
    <p1>{1 + 1}</p1>
    
    <p1>3 * 3</p1>
    <p1>{3 * 3}</p1>

    <p1> 4 / 4</p1>
    <p1>{4 / 4}</p1>

    <p1>3 ** 2</p1>
    <p1>{3 ** 2}</p1>


      <img />
      <input />
      <br />
      <br />
      <img/>

    <h1>{name}</h1>
    <h2>Age: {age}</h2>
    <h3>Status: isStudent?  {isStudent}</h3>

    </>
  )
}

export default App
