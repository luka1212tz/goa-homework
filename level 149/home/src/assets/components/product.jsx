export default function Product(props) {
  return (
    <div>
      <p>ფასი: {props.price} ₾</p>
      <p>
        სტატუსი: {props.inStock ? "ხელმისაწვდომია ✅" : "არ არის ხელმისაწვდომი ❌"}
      </p>
    </div>
  );
}
