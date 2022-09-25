import { render, screen } from '@testing-library/react';
import Card from '.';

const listTodo = [
  {
    "id": "eb503d4a-15ef-4e33-b02e-c9d504678416",
    "name": "casa",
    "columns": "TODO"
  },
  {
    "id": "5cfa88fa-65a3-4aab-a951-28673769d5b4",
    "name": "Carro",
    "columns": "TODO"
  },
  {
    "id": "63300ac9-5470-4b24-a5af-9abf5160926e",
    "name": "Pagar conta",
    "columns": "TODO"
  },
  {
    "id": "bb02e1b9-4009-45ae-b8d4-222adca256e9",
    "name": "Escola",
    "columns": "DONE"
  }
];

describe('Card Component', () => {
  it('Load a list of Todo', () => {
    render(<Card list={listTodo} />);
    expect(screen.queryAllByTestId(/listTodo/)).toHaveLength(4);
  })
});
