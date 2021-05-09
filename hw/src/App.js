import React from "react";
import Board from "./Components/Board";
import Card from "./Components/Card";

function App() {
  return (
    <div className="App">
      <main className="flexbox">
        <Board id="board-1" className="board">
          <Card id="card-1" className="card" draggable="true">
            <p>Card One</p>
          </Card>
        </Board>

        <Board id="board-2" className="board">
          <Card id="card-2" className="card" draggable="true">
            <p>Card Two</p>
          </Card>
          <Card id="card-3" className="card" draggable="true">
            <p>Card Three</p>
          </Card>
          <Card id="card-4" className="card" draggable="true">
            <p>Card Four</p>
          </Card>
        </Board>
      </main>
    </div>
  );
}
export default App;
