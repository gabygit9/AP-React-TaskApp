
import { useEffect, useState } from 'react';
import { Task } from '../types/Task';
import { TaskService } from '../service/TaskService';
import TaskItem from '../components/TaskItem/TaskItem';

const CompletadasPage = () => {
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
  const selectedCategory = 'COMPLETADA';

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksData = await TaskService.getTasksInCategory(selectedCategory);
      setCompletedTasks(tasksData);
    };

    fetchTasks();
  }, []);

  return (
    <div className='container mt-5'>
        <h1>Completadas</h1>
        <TaskItem tasks={completedTasks} />
    </div>
  );
};

export default CompletadasPage;
