

function App() {
  

// Container Component არის კომპონენტი,
// რომელიც პასუხისმგებელია ლოგიკაზე 
// ის არ ზრუნავს დიზაინზე 



// Presentational Component არის კომპონენტი,
// რომელიც პასუხისმგებელია მხოლოდ დიზაინზე
// ის იღებს მონაცემებს props-ით და უბრალოდ აჩვენებს მათ



// Container:
// - აკეთებს ლოგიკას (API, functions)
// - გადასცემს მონაცემებს ქვემოთ

// Presentational:
// - იღებს props-ებს
// - მხოლოდ აჩვენებს UI-ს


//presentational 

function UserView({ name }) {
  return <h1>User: {name}</h1>;
}

// Container
function UserContainer() {
  let [name, setName] = useState("Luka");

  return <UserView name={name} />;
}


  return (
    <>
      




    </>
  )
}

export default App
