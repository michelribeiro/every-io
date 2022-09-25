import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IList, TodoContextData, TodoProps } from './interface';

const TodoContext = createContext<TodoContextData>({} as TodoContextData);

export function TodoProvider({ children }: TodoProps): JSX.Element {
  const [listTodo, setListTodo] = useState<IList[]>(() => {
    const todoList = localStorage.getItem('@todoList');
    if (todoList) {
      return JSON.parse(todoList)
    }
    return []
  });

  const addTodo = useCallback(async (item: string) => {
    try {
      const addItem = [...listTodo, {
        id: uuidv4(),
        name: item,
        columns: 'TODO'
      }];
      setListTodo(addItem)
      localStorage.setItem('@todoList', JSON.stringify(addItem));
    } catch (error) {
      console.error(error);
    }
  }, [listTodo]);

  const movingTaskBack = useCallback((id: string) => {
    try {
      const listTasks = [...listTodo];
      const taskIndex = listTasks.findIndex((item) => item.id === id);
      if (taskIndex >= 0) {
        listTasks.splice(taskIndex, 1);
      }

      listTodo.map(item => {
        if (item.id === id) {
          const updatedTask = {
            ...item,
            columns: item.columns === 'DONE' ? 'IN_PROGRESS' : 'TODO'
          }
          listTasks.push(updatedTask)
        }
        return null;
      });

      setListTodo(listTasks);
      localStorage.setItem('@todoList', JSON.stringify(listTasks));

    } catch (error) {
      console.error(error);
    }
  }, [listTodo]);

  const movingTaskAhead = useCallback((id: string) => {
    try {
      const listTasksNew = [...listTodo];
      const taskBackIndex = listTasksNew.findIndex((item) => item.id === id);
      if (taskBackIndex >= 0) {
        listTasksNew.splice(taskBackIndex, 1);
      }

      listTodo.map(item => {
        if (item.id === id) {
          const updatedTaskNew = {
            ...item,
            columns: item.columns === 'TODO' ? 'IN_PROGRESS' : 'DONE'
          }
          listTasksNew.push(updatedTaskNew)
        }
        return null;
      });

      setListTodo(listTasksNew);
      localStorage.setItem('@todoList', JSON.stringify(listTasksNew));

    } catch (error) {
      console.error(error);
    }
  }, [listTodo]);

  const memorizeValue = useMemo(() => {
    return {
      addTodo,
      listTodo,
      movingTaskBack,
      movingTaskAhead,
    };
  }, [
    addTodo,
    listTodo,
    movingTaskBack,
    movingTaskAhead,
  ]);

  return (
    <TodoContext.Provider value={memorizeValue}>
      {children}
    </TodoContext.Provider>
  )
}

export function useTodo(): TodoContextData {
  const context = useContext(TodoContext)
  return context
}