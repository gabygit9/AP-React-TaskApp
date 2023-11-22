import CarouselHome from "../components/CarouselHome/CarouselHome"
import TaskList from "../components/TaskList/TaskList"
import TaskItem from "../components/TaskItem/TaskItem"
import { TaskService } from "../service/TaskService"
import { Task } from "../types/Task"
import { useState, useEffect } from "react"

const LandingPage = () => {

  const [tasks, setTasks] = useState<Task[]>([])
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  useEffect (() => {
    const fetchTasks = async () => {
      const tasksData = await TaskService.getAllTasks()
      setTasks(tasksData)
    };
    fetchTasks();
  }, []);

  useEffect (() => {
    if (selectedCategory) {
      const filtered= tasks.filter(task => task.estado.toUpperCase() === selectedCategory.toUpperCase())
      setFilteredTasks(filtered)
    } else {
      setFilteredTasks(tasks)
    }
  }, [selectedCategory, tasks])
  return (
    <>
      <CarouselHome />
      <TaskList onSelectedTask={setSelectedCategory} onTaskClick={setSelectedCategory} />
      <TaskItem tasks={filteredTasks.length > 0 ? filteredTasks : tasks} />
    </>
  )
}

export default LandingPage

