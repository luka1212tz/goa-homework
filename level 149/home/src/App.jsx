import Header from "./assets/components/header";
import Product from "./assets/components/product";


  return (
    <div>
    
      <Header title="მოგესალმები ჩემს აპში!" />

     
      <Product price={50} inStock={true} />
      <Product price={120} inStock={false} />

  
     
      <Card>
        <h2>სათაური</h2>
        <p>ეს არის ბარათის შიგთავსი.</p>
      </Card>
    </div>
  );

