import React, { useEffect, useContext } from 'react';
import { useSwipeable } from 'react-swipeable';
import {DIRECTIONS} from "../../constants";
import GameView from './Game.view';
import { GameContext } from '../../contexts/GameContext';

function GameContainer() {
  const { state, newGame, moveTiles } = useContext(GameContext);

  // Starts a new game
  useEffect(() => {
    newGame();
  }, [newGame]);

  const handleSwipe = (e) => {
    const direction = DIRECTIONS[e.dir.toUpperCase()];

    if (direction) {
      moveTiles(direction);
    }
  }

  const handlers = useSwipeable({ onSwiped: handleSwipe });

  return (
    <div {...handlers}>
      <GameView gameState={state.gameState} />
    </div>
  );
}

export default GameContainer;
