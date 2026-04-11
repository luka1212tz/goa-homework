import { Routes, Route, Link } from "react-router-dom"
import ShopCart from "./components/shopcart"
import Profile from "./components/profile"
import Home from "./components/mainn"
function App() {


  //react router არის ერთერთი რეაქტის დამატებითი თვისება რომელსაც ვიყენებ page ების შესაცვლელად საიტზე ანუ ნავიგაციისთვის ეს მეთოდი სწრაფია რადგან საიტს არ უწევს refresh ის გაკეთება და პირდაპირ კომპონენტს ცვლის როცა უკვე დავაიმპორტებთ რეაქტ როუტერს უნდა დავუწეროთ სათითაოდ ყველა კომპონენტისთვის route ში path და ელემენტი ელემენტში იქნება კომპონენტი რომელზე გვინდა საიტი გადავიდეს ხოლო path ში ის რაც გვინდა ეწეროს საიტის ლინკში  
  // შემდეგ უნდა შევქმნათ link თაგები  სადაც დავუწერთ to='' და შიგნით იმას რაც path ში დავწერეთ 

  return (
    <>
     

    
        <Link to="/shopcart">ShopCart</Link>
        <Link to="/profile">Profile</Link>
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopcart" element={<ShopCart />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>


    </>
  )
}

export default App
