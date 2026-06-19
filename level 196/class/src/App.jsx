import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {


  //მე ვისწავლე active link ის გასტილვა route ში ამისთვის ჩვენ უნდა გამოვიყენოთ navlink და სტილის ადგილას ჩავწეროთ რაღაც პატარა if else რომლისთვისაც როცა isactive არის true გაისტილოს სხვანაირად და როცა არის false გაისტილოს სხვანაირად. ამის გამოყენება შეგვიძლია საიტის გასალამაზებლად და მომხმარებელს შეუძლია მარტივად მიხვდეს რომელ page ზე არის გადასული იგი
  //ასევე useparamas გამოყენებით შეგვიძლია url დან ანუ საიტის ლინკიდან ამოვიღოთ ინფორმაცია და ეს გამოვიყენოთ საიტზე მაგალითად ლინკის ბოლოში თუ ეწერება luka კომპონენტმა გამოიყენოს ეს და დაწეროს hello luka


let navlink = ({ isActive }) => {
  if (isActive) {
    return { color: "green" }
  } else {
    return { color: "red" }
  }



}

  return (
    <>
     
<NavLink to="/about" style={navlink}>
  about page
</NavLink>
  




    </>
  )
}

export default App
