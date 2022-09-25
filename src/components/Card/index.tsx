import React, { useEffect, useState } from 'react';
import { IList } from '../../context/interface';
import Task from '../Task';
import * as Styles from './styles';

interface Props {
  list: IList[];
}
const Card = ({ list } : Props) => {
const [todo, setTodo] = useState<IList[]>([]);
const [inProgess, setInProgess] = useState<IList[]>([]);
const [done, setDone] = useState<IList[]>([]);

  useEffect(() => {
    const todoUpdated = list.filter(item => item.columns === "TODO");
    setTodo(todoUpdated);
  },[list])

  useEffect(() => {
    const inProgessUpdated = list.filter(item => item.columns === "IN_PROGRESS");
    setInProgess(inProgessUpdated);
  },[list])

  useEffect(() => {
    const doneUpdated = list.filter(item => item.columns === "DONE");
    setDone(doneUpdated);
  },[list])

  return (
    <Styles.Container>
      <Styles.Card>
        <h2>To Do</h2>
        <Task task={todo} />
      </Styles.Card>
      <Styles.Card>
        <h2>In Progress</h2>
        <Task task={inProgess} />
      </Styles.Card>
      <Styles.Card>
        <h2>Done</h2>
        <Task task={done} />
      </Styles.Card>
    </Styles.Container>
  )
}

export default Card;