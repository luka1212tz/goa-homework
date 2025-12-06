
import GameItem from "./GameItem";

function App() {
  return (
    <div>
      <h2>Game Selector</h2>
      <GameItem name="Minecraft" />
      <GameItem name="Fortnite" />
      <GameItem name="CS:GO" />
      <GameItem name="Valorant" />
    
      <h2>Workout Planner</h2>
      <WorkoutItem name="Push-ups" />
      <WorkoutItem name="Squats" />
      <WorkoutItem name="Plank" />
      <WorkoutItem name="Burpees" />
    </div>


  );
}

export default App;
