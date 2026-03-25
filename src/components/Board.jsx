import "./styles/Board.css";

export default function Board({ board, onPlacePiece, onSelectPiece, selectedPiece }) {
  return (
    <div className="board-grid" role="grid" aria-label="Puzzle board">
      {board.map((cell, index) => (
        <button
          key={index}
          className={`board-cell ${
            selectedPiece?.originalIndex === index ? "selected" : ""
          }`}
          onClick={() => {
            if (cell && selectedPiece?.id !== cell.id) {
              onSelectPiece(cell, index); 
            } else {
              onPlacePiece(index); 
            }
          }}
          aria-label={
            cell
              ? `Cell ${index + 1} with piece ${cell.id + 1}`
              : `Empty cell ${index + 1}`
          }
          aria-pressed={selectedPiece?.originalIndex === index}
        >
          {cell && <img src={cell.src} alt={`Placed piece ${cell.id + 1}`} />}
        </button>
      ))}
    </div>
  );
}