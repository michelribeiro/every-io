import { ArrowLeft, ArrowRight } from "phosphor-react";
import { IList } from "../../context/interface";
import { useTodo } from "../../context/todo";
import * as Styles from './styles'
;
interface Props {
  task: IList[]
}

const Task = ({ task }: Props) => {
  const { movingTaskBack, movingTaskAhead } = useTodo();

  const handleBackTask = (id: string) => {
    movingTaskBack(id);
  }

  const handleNextTask = (id: string) => {
    movingTaskAhead(id);
  }

  return (
    <Styles.Container>
      <ul>
        {
          task.map(item => (
            <li key={item.id}>
              <button
                aria-label="back"
                type="button"
                className="back"
                disabled={item.columns === "TODO"}
                onClick={() => handleBackTask(item.id)}
              >
              <ArrowLeft color="white" size={24} />
              </button>
              {item.name}
              <button
                aria-label="back"
                type="button"
                className="next"
                disabled={item.columns === "DONE"}
                onClick={() => handleNextTask(item.id)}
              >
              <ArrowRight color="white" size={24} />
              </button>
            </li>
          ))
        }

      </ul>
    </Styles.Container>
  )
}

export default Task;