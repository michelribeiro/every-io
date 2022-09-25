import { useState } from 'react';
import { useTodo } from '../../context/todo';
import { Plus } from 'phosphor-react';
import * as Styles from './style';

const FormEnterNameTask = () => {
  const [name, setName] = useState<string>("");
  const { addTodo } = useTodo();

  const handleAddTask = () => {
    if (name === "") return;
    addTodo(name);
    setName("")
  }

  return (
    <Styles.Container>
      <form onSubmit={handleAddTask}>
        <input placeholder='Add Task' type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={() => handleAddTask}>
          <Plus color='white' size={24} />
        </button>
      </form>
    </Styles.Container>
  )
}

export default FormEnterNameTask;