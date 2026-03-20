import "./PiecesPanel.css"

export default function PiecesPanel({
  pieces,
  selectedPiece,
  onSelectPiece,
}) {
  return (
    <div
      className="pieces-grid"
      role="grid"
      aria-label="Puzzle pieces"
    >
      {pieces.map((piece) => {
        const isSelected = selectedPiece?.id === piece.id;

        return (
          <button
            key={piece.id}
            className={`piece ${isSelected ? "selected" : ""}`}
            onClick={() => onSelectPiece(piece)}
            aria-pressed={isSelected}
            aria-label={`Puzzle piece ${piece.id + 1}`}
          >
            <img
              src={piece.src}
              alt={`Puzzle piece ${piece.id + 1}`}
            />
          </button>
        );
      })}
    </div>
  );
}