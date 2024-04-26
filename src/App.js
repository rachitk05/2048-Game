import './App.css';
import GameContextProvider from "./contexts/GameContext";
import Game from "./pages/game";


function App() {
  return (
      <GameContextProvider>
        <Game />
      </GameContextProvider>
  );
}

export default App;
