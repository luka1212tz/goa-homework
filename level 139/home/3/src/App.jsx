import './App.css'

function App() {
  return (
    <div className="container">
      <h1>წიწილი</h1>
      <p className="info">
        წიწილი — ქათმის პატარა, რომელიც იჩეკება კვერცხიდან. 
        ისინი ცნობილია თავიანთი ყვითელი ბუმბულით და სიფრიფანა სხეულით. 
        წიწილები სწრაფად იზრდებიან და რამდენიმე თვეში ქათმებად ან მამლებად იქცევიან.  
        თავდაპირველად მათ სჭირდებათ სითბო, საკვები და დაცვა, რადგან 
        ძალიან მოწყვლადები არიან. წიწილები მნიშვნელოვან როლს ასრულებენ 
        სოფლის მეურნეობაში და ადამიანის კვებაში.
      </p>
      
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/2/20/Yellow_Chicks.jpg" 
        alt="წიწილები" 
      />

      <p>
        <a 
          href="https://ka.wikipedia.org/wiki/ქათამი" 
          target="_blank" 
          className="wiki-link"
        >
          ვიკიპედია ქათამზე
        </a>
      </p>
    </div>
  )
}

export default App
