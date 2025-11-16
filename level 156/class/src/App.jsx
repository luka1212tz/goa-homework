
function App() {
  
    function link(){
      alert("p is clicked ")
    }

    let name = "nika"

    if(name === "nika"){
      alert("name is nika")
    }else{
      alert("name is not nika")
    }

    let check = name === "nika"? alert("name is right it is nika"): alert("wrong name it is not nika")


  return (
    <>
   

    <p onClick={link}>click this</p>



    </>
  )
}

export default App
