import './App.css';
import { ExerciseWrapper } from './components/ExerciseWrapper';
import { GetExercise } from './components/GetExercise';
import { GetWeather } from './components/GetWeather';
import { ListExercise } from './components/ListExercise';
import { TodoWrapper } from './components/TodoWrapper';


function App() {
  return (
    <div className="App">
      <h1 class="header">My Planner</h1>
      <div class="two-products-same-size-row">
        <TodoWrapper class="twoProductsSameSizeFirst"></TodoWrapper>
        <GetWeather class="twoProductsSameSizeSecond"></GetWeather>
      </div>
      <div class="two-products-same-size-row">
        <ExerciseWrapper class="twoProductsSameSizeFirst"></ExerciseWrapper>
        
      </div>
      
      
    </div>
  );
}

export default App;