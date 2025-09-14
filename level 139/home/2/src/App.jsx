import './App.css'

function App() {
  return (
    <div className="container">
      <h1>ვეფხვი</h1>
      <p className="info">
        ვეფხვი — ყველაზე დიდი კატა მსოფლიოში. ის გამოირჩევა ზოლოვანი ბეწვით,
        ძლიერი სხეულით და დამალვის უნარით. ვეფხვები ცხოვრობენ აზიაში:
        ინდოეთში, ბანგლადეშში, ნეპალში, ჩინეთსა და რუსეთში (ამური).
        ისინი უმეტესად მარტოხელა მონადირეები არიან და ნადირობენ
        ირემებზე, გარეულ ღორებზე და სხვა მსხვილ ცხოველებზე.  
        ვეფხვი ასევე ძალიან კარგად ცურავს და შეუძლია წყალში დიდხანს ყოფნა.
      </p>
      
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg" 
        alt="ვეფხვი" 
      />

      <p>
        <a 
          href="https://ka.wikipedia.org/wiki/ვეფხვი" 
          target="_blank" 
          className="wiki-link"
        >
          ვიკიპედია ვეფხვზე
        </a>
      </p>
    </div>
  )
}

export default App
