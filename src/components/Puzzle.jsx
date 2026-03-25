import { useState, useEffect } from "react";
import PiecesPanel from "./PiecesPanel";
import Board from "./Board";
import "./styles/Puzzle.css";
import SettingsPanel from "./SettingsPanel";
import VolumeIcon from "./VolumeIcon";

const initialPieces = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  src: `/images/puzzle/bear-${i}.png`,
  correctPosition: i,
}));

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function Puzzle() {
  const [pieces, setPieces] = useState(() => shuffleArray(initialPieces));
  const [board, setBoard] = useState(Array(9).fill(null));
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [completedFade, setCompletedFade] = useState(false);

  const handleSelectPiece = (piece, source, originalIndex = null) => {
    setSelectedPiece((prev) =>
      prev?.id === piece.id ? null : { ...piece, source, originalIndex },
    );
  };

  const handlePlacePiece = (targetIndex = null) => {
    if (!selectedPiece) return;

    const newBoard = [...board];

    if (targetIndex === null && selectedPiece.source === "board") {
      setPieces((prev) => [...prev, selectedPiece]);
      newBoard[selectedPiece.originalIndex] = null;
      setBoard(newBoard);
    } else if (targetIndex !== null) {
      const targetCell = board[targetIndex];

      if (!targetCell) {
        newBoard[targetIndex] = { ...selectedPiece };
        if (selectedPiece.source === "sidebar") {
          setPieces((prev) => prev.filter((p) => p.id !== selectedPiece.id));
        } else if (selectedPiece.source === "board") {
          newBoard[selectedPiece.originalIndex] = null;
        }
      } else {
        newBoard[targetIndex] = { ...selectedPiece };
        if (selectedPiece.source === "board") {
          newBoard[selectedPiece.originalIndex] = targetCell;
        } else if (selectedPiece.source === "sidebar") {
          setPieces((prev) => [
            ...prev.filter((p) => p.id !== selectedPiece.id),
            targetCell,
          ]);
        }
      }
      setBoard(newBoard);
    }

    setSelectedPiece(null);
  };

  const isCompleted = board.every(
    (cell, index) => cell && cell.correctPosition === index,
  );

  // This effect synchronizes the "completedFade" state with "isCompleted".
  // We use a small timeout (50ms) to avoid updating state synchronously during render,
  // which can trigger React warnings about cascading renders.
  // When "isCompleted" changes, we schedule "setCompletedFade" to run after the timeout.
  // The cleanup function clears the timeout if "isCompleted" changes again before the timeout completes.
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCompletedFade(isCompleted);
    }, 50);

    return () => clearTimeout(timeout);
  }, [isCompleted]);

  const handleReset = () => {
    setPieces(shuffleArray(initialPieces));
    setBoard(Array(9).fill(null));
    setSelectedPiece(null);
    setCompletedFade(false);
  };

  return (
    <>
   <div className="div-settings-panel">
    <SettingsPanel/>
    </div>
      <div className="volume-div">
      <VolumeIcon/>

    </div>
      {!isCompleted && (
        <div className="puzzle-title">
          <h1>Puzzle</h1>
          <p>Select a piece, then place it on the board</p>
        </div>
      )}

      <section className="puzzle-main-section">
        {!isCompleted && (
          <div className="pieces-div">
            {!isCompleted && (
              <PiecesPanel
                pieces={pieces}
                selectedPiece={
                  selectedPiece?.source === "sidebar" ? selectedPiece : null
                }
                onSelectPiece={(piece) => handleSelectPiece(piece, "sidebar")}
              />
            )}

            {!isCompleted && selectedPiece?.source === "board" && (
              <button
                className="return-to-sidebar"
                onClick={() => handlePlacePiece(null)}
              >
                Return piece to sidebar
              </button>
            )}
          </div>
        )}

        <div className="board-div">
          {!isCompleted && (
            <Board
              board={board}
              selectedPiece={
                selectedPiece?.source === "board" ? selectedPiece : null
              }
              onSelectPiece={(piece, index) =>
                handleSelectPiece(piece, "board", index)
              }
              onPlacePiece={handlePlacePiece}
            />
          )}

          {isCompleted && (
            <div
              className={`completed-overlay ${completedFade ? "fade-in" : ""}`}
            >
              <p>Congratulations! Puzzle completed!</p>
              <img
                src="/images/puzzle/bear.png"
                alt="Completed puzzle"
                className="completed-image"
              />
              <button onClick={handleReset}>Reset Puzzle</button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
