


function App() {
  
  
  
function InlineExample() {
  return (
    <h1 style={{ color: "red", backgroundColor: "black" }}>
      Inline
    </h1>
  )
}




let styleObj = {
  color: "blue",
  fontSize: "20px"
}

function ObjectStyleExample() {
  return <p style={styleObj}>Object Style</p>
}




function MultiStyleExample() {
  return (
    <h1 className="title bg">
      Multiple Stylesheet
    </h1>
  )
}


let styles = {
  box: "box"
}

function ModuleExample() {
  return <div className={styles.box}>Module Style</div>
}
  
  
  return (
    <div>
      <InlineExample />
      <ObjectStyleExample />
      <MultiStyleExample />
      <ModuleExample />
    </div>
  )
}

export default App