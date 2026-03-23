// src/components/board.test.jsx
import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Board from "./Board";

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe("Board component", () => {
  const mockOnPlacePiece = vi.fn();
  const mockOnSelectPiece = vi.fn();

  const board = [
    { id: 0, src: "piece0.png" },
    null,
    { id: 1, src: "piece1.png" }
  ];

  const selectedPiece = { id: 0, originalIndex: 0 };

  it("renders all cells correctly", () => {
    render(
      <Board
        board={board}
        onPlacePiece={mockOnPlacePiece}
        onSelectPiece={mockOnSelectPiece}
        selectedPiece={selectedPiece}
      />
    );

    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(3);

    expect(buttons[0].innerHTML).toContain('img'); 
    expect(buttons[1].innerHTML).toBe("");          
    expect(buttons[2].innerHTML).toContain('img'); 

    expect(screen.getByAltText("Placed piece 1")).toBeTruthy();
    expect(screen.getByAltText("Placed piece 2")).toBeTruthy();
  });

  it("calls onPlacePiece when clicking an empty cell", () => {
    render(
      <Board
        board={board}
        onPlacePiece={mockOnPlacePiece}
        onSelectPiece={mockOnSelectPiece}
        selectedPiece={selectedPiece}
      />
    );

    const emptyCell = screen.getByLabelText("Empty cell 2");
    fireEvent.click(emptyCell);

    expect(mockOnPlacePiece).toHaveBeenCalledTimes(1);
    expect(mockOnPlacePiece).toHaveBeenCalledWith(1);
  });

  it("calls onSelectPiece when clicking a cell with a different piece", () => {
    render(
      <Board
        board={board}
        onPlacePiece={mockOnPlacePiece}
        onSelectPiece={mockOnSelectPiece}
        selectedPiece={selectedPiece}
      />
    );

    const otherCell = screen.getByLabelText("Cell 3 with piece 2");
    fireEvent.click(otherCell);

    expect(mockOnSelectPiece).toHaveBeenCalledTimes(1);
    expect(mockOnSelectPiece).toHaveBeenCalledWith(board[2], 2);
  });

  it("does not call onSelectPiece if the clicked cell is the selected piece", () => {
    render(
      <Board
        board={board}
        onPlacePiece={mockOnPlacePiece}
        onSelectPiece={mockOnSelectPiece}
        selectedPiece={selectedPiece}
      />
    );

    const selectedCell = screen.getByLabelText("Cell 1 with piece 1");
    fireEvent.click(selectedCell);

    expect(mockOnSelectPiece).not.toHaveBeenCalled();
  });

  it("applies 'selected' class and aria-pressed to the selected piece", () => {
    render(
      <Board
        board={board}
        onPlacePiece={mockOnPlacePiece}
        onSelectPiece={mockOnSelectPiece}
        selectedPiece={selectedPiece}
      />
    );

    const selectedCell = screen.getByLabelText("Cell 1 with piece 1");
    expect(selectedCell.classList.contains("selected")).toBe(true);
    expect(selectedCell.getAttribute("aria-pressed")).toBe("true");
  });
});