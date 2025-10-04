import './App.css'

function App() {
  return (
    <>
      <div className="container">
        <h1>სპანჯბობის სამყარო</h1>

        <section className="sponge">
          <h2>სპანჯბობი</h2>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/3/33/SpongeBob_SquarePants_character.svg"
            alt="SpongeBob"
          />
          <p>
            სპანჯბობი არის მხიარული ყვითელი სპანჯის პიროვნება, რომელიც ცხოვრობს
            ბიკინის ძველში. ის ძალიან მეგობრული და ბედნიერი არსებაა.
          </p>
          <ul>
            <li>ცხოვრობს ბიკინის ძველში</li>
            <li>მუშობს კრაბში კრამბურგერების მზადებაზე</li>
            <li>ძალიან მეგობრული და მხიარულია</li>
          </ul>
        </section>

        <section className="patrick">
          <h2>პატრიკი</h2>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/d/d6/Patrick_Star.svg"
            alt="Patrick"
          />
          <p>
            პატრიკი არის სპანჯბობის საუკეთესო მეგობარი. ის ვარსკვლავის ფორმის პერსონაჟია
            და ხშირად ერთვება სპანჯბობის თავგადასავლებში.
          </p>
        </section>

        <section className="squidward">
          <h2>სკვიდვორდი</h2>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/3/3d/Squidward_Tentacles.svg"
            alt="Squidward"
          />
          <p>
            სქვიდვორდი არის სპანჯბობის მეზობელი და კოლეგა, რომელიც ხშირად მკაცრია
            და არ იტანს სპანჯბობის სიხარულს.
          </p>
        </section>
      </div>
    </>
  )
}

export default App
