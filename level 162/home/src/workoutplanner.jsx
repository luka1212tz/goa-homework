
function WorkoutItem({ name }) {
  let addWorkout = () => {
    alert(`Workout added: ${name}`);
  };

  return (
    <button onClick={addWorkout} style={{ margin: "5px" }}>
      {name}
    </button>
  );
}

export default WorkoutItem;
