function Car({ stringProp, numberProp, arrayProp, objectProp }) {
  return (
    <div>
      <h2>{stringProp}</h2>
      <h2>{numberProp}</h2>
      <h2>{arrayProp[0]}</h2>
      <h2>{objectProp.name}</h2>
    </div>
  );
}





export default Car;
