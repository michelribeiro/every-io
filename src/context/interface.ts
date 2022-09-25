import { ReactNode } from "react";

export interface TodoContextData {
  movingTaskBack: (id: string) => void;
  movingTaskAhead: (id: string) => void;
  addTodo:(todo: string) => void;
  listTodo: IList[];
}

export interface TodoProps {
  children: ReactNode;
}

export interface IList {
  id: string;
  name: string;
  columns: string;
}