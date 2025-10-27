function Rakesh() {
  const fruits = ["apple", "mango", "banana", "grapes", "watermelon"];

  return (
    <ul type="none"className="fruits">
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

export default Rakesh;
