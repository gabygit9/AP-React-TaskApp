// PorHacerPage.jsx
import { useEffect, useState } from 'react';
import { Task } from '../types/Task';
import { TaskService } from '../service/TaskService';
import TaskList from '../components/TaskList/TaskList';
import TaskItem from '../components/TaskItem/TaskItem';


const PorHacerPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('PORHACER');

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksData = await TaskService.getTasksInCategory(selectedCategory);
      setTasks(tasksData);
    };

    fetchTasks();
  }, [selectedCategory]);

  return (
    <div className='container mt-5'>
      <TaskList
        onSelectedTask={setSelectedCategory}
        onTaskClick={() => {}}
      />
      <TaskItem tasks={tasks} />
    </div>
  );
};

export default PorHacerPage;
