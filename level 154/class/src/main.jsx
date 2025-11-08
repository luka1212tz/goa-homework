// React ბიბლიოთეკის იმპორტი — React საჭიროა JSX კოდის გასაშვებად და კომპონენტების შესაქმნელად.
import React from 'react';

// ReactDOM ბიბლიოთეკიდან `createRoot` ფუნქციის იმპორტი — ეს ფუნქცია გამოიყენება React აპლიკაციის დასაწყებად.
import { createRoot } from 'react-dom/client';

// HTML დოკუმენტში ვპოულობთ ელემენტს, რომლის id არის 'app'.
// ამ ელემენტში ჩაისმება ჩვენი React აპლიკაცია.
const container = document.getElementById('app');

// ვქმნით "root" ობიექტს React-ის გამოყენებით.
// `createRoot(container)` უთითებს React-ს, სად უნდა გამოჩნდეს აპლიკაცია.
const root = createRoot(container);

// `root.render()` ფუნქციით ვუთითებთ, რა უნდა გამოისახოს ეკრანზე.
root.render(
  <div>
      {/* <h1> */}
      <h1>Hello world</h1> 
      
      {/* <p> */}
      <p>Lorem text</p>
  </div>
)
