

function App() {
  

{/* 
React-ში "class" ვერ გამოიყენება რადგან ეს სიტყვა რეზერვირებულია JavaScript-ში (class keyword).
ამის ნაცვლად ვიყენებთ "className".
*/}

{/* მაგალითი 1 */}
<h1 className="title">Hello World</h1> 
//  <h1 class="title"> — მუშაობას არასწორად

{/* მაგალითი 2 */}
<div className="container">Content</div>
//  <div class="container"> — React-ი ჩივის

{/* მაგალითი 3 */}
<p className="text-large">Text here</p>
// className ატრიბუტი რეალურად HTML-ის class-ს ქმნის DOM-ში








  return (
    <>
      <img />
      <input />
      <br />
      <br />
      <img/>
      <img />
      <input />
      <br />
      <br />
      <img/>


  {/* 
Curly braces JSX-ში ნიშნავს, რომ შეგვიძლია ჩავწეროთ JavaScript კოდი:
განსაკუთრებით: ცვლადები, გამოთვლები, ფუნქციების გამოძახება და სხვა.
*/}

      <p>{5 + 5}</p>                         
      <p>{Math.random()}</p>                 
      <p>{userName}</p>                       
      <p>{age > 18 ? "Adult" : "Child"}</p>   
      <p>{items.length}</p>                  
      <li>{items[0]}</li>                    
      <p>{new Date().getFullYear()}</p>      
      <p>{formatName("Bernard")}</p>         
      <p>{status ? "Online" : "Offline"}</p> 
      <p>{message || "No message"}</p>        


{/* 
JSX-ში ნებისმიერი ცვლადი უნდა იყოს {} შიგნით 
*/}

let name = "Bernard";
let age = 16;
let city = "Tbilisi";
let score = 95;
let isStudent = true;
let colors = ["red", "blue", "green"];
let price = 120;
let discount = 20;
let fullPrice = price - discount;

<p>{name}</p>                       
<p>{age}</p>                        
<p>{city}</p>                       
<p>{score}</p>                      
<p>{isStudent.toString()}</p>       
<p>{colors[1]}</p>                  
<p>{user.first}</p>                 
<p>{price}</p>                      
<p>{discount}</p>                   
<p>{fullPrice}</p>   










    </>
  )
}

export default App
