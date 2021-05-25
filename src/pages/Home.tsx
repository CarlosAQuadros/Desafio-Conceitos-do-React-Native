import React, { useState, useEffect } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState<Task[]>([]);
  const [refresh, setRefresh] = useState(false)
  //const [doneTasks, setDoneTasks] = useState<Task[]>([]);


  function handleAddTask(newTaskTitle: string) {
    const task = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }
    
    if (task.title !== "") {
      setTask(task.title)
      setTasks(oldState => [...oldState, task])
    }

  }

  function handleMarkTaskAsDone(id: number) {
    let refreshView = !refresh;

    tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done    
      }
    })
    setRefresh(refreshView)
  }

  //TODO - mark task as done if exists


  function handleRemoveTask(id: number) {


    setTasks(oldstate => oldstate.filter(
      task => task.id !== id

    ))
    //TODO - remove task from state
  }

  useEffect(() => {
  }, [refresh])

  return (
    <>
      <Header />

      <TodoInput  addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  )
}
