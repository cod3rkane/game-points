import React from 'react';

import BoardGame from '../../components/Board';
import PlayerInfor from '../../components/PlayerInfo';

export const Main = () => (
  <div>
    <header>
      <h1>Game Points!</h1>
    </header>
    <main>
      <BoardGame />
      <PlayerInfor />
    </main>
  </div>
);

export default Main;
