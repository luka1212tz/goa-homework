

function App() {
  let name = 'hi'

  let class1 = ['luka','andria','davit']

  let goaLevels = {
    group1: "level 20",
    group2: "level 28",
    group3: "level 110" 
}

  return (
    <>
     <p>hello</p>
      {name}<br/>
     {class1} <br /> 
     {goaLevels.group1}
      
    </>
  )
}

export default App
