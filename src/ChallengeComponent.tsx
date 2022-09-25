import React from 'react'
import Card from './components/Card';
import { useTodo } from './context/todo';
import FormEnterNameTask from './components/FormEnterNameTask';

export function ChallengeComponent() {
  const { listTodo } = useTodo();

  return (
    <>
      <Card list={listTodo} />
      <FormEnterNameTask />
    </>
  )
}
