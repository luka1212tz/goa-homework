import { BrowserRouter, Routes, Route } from "react-router-dom"
import User from "./components/User"
import Blog from "./components/Blog"
import Dashboard from "./components/Dashboard"
import Category from "./components/Category"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/:id" element={<User />} />
         <Route path="/blog/:slug" element={<Blog />} />
         <Route path="/dashboard/:tab" element={<Dashboard />} />
         <Route path="/category/:categoryName" element={<Category />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App