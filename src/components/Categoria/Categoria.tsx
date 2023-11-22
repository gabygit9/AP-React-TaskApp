import { useEffect, useState } from 'react';
import { Task } from '../../types/Task';
import TaskList from '../TaskList/TaskList';
import TaskItem from '../TaskItem/TaskItem';
import { TaskService } from '../../service/TaskService';

const Categoria = () => {
  // Estado para almacenar todas las tareas y la categoría seleccionadas
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  
  // Efecto secundario que se ejecuta al montar el componente
  useEffect(() => {
  // Función asincrónica para obtener todas las tareas usando el servicio TaskService
    const fetchTasks = async () => {
      const tasksData = await TaskService.getAllTasks();
      setTasks(tasksData);
    };

    fetchTasks();
  }, []);

  // Filtrar las tareas basándose en la categoría seleccionada
  const filteredTasks = selectedCategory
  ? tasks.filter(task => task.estado.toUpperCase() === selectedCategory.toUpperCase())
  : tasks;

  const handleCategoryClick = (category: string) => {
     // Cambiar la URL hash para reflejar la categoría seleccionada
    window.location.hash = `#${category}`;

    // Hacer scroll a la sección correspondiente con un retraso de 100ms
    setTimeout(() => {
      const section = document.getElementById(category);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className='container mt-5'>
      <TaskList 
      onSelectedTask={setSelectedCategory}
      onTaskClick={handleCategoryClick} />
      <TaskItem tasks={filteredTasks} />
    </div>
  )
}

export default Categoria
