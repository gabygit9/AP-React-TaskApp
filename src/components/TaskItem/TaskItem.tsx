import { Task } from '../../types/Task'
import { Link } from 'react-router-dom'
const TaskItem = ({tasks}: {tasks: Task[]}) => {
  const categorias = ['PORHACER', 'ENPRODUCCION', 'PORTESTEAR', 'COMPLETADA']
  return (
    <section className='container-fluid mt-5' id='categorias'>
      {categorias.map((categoria, index) => (
        <section className='text-center mb-5' key={index}>
          <h3 className='display-6'>{categoria}</h3>
          <div className='row row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-center g-4'>
            {tasks && tasks
            .filter(task=> task.estado === categoria.toUpperCase())
            .map(task => (
              <div className='col' key={task.id}>
                <div className='card h-100'>
                  <img style={{ minHeight: '300px', maxHeight: '300px',}} className='card-img-top' src={task.imagen} alt={task.titulo}/>
                  <div className='text-center'>
                    <h5 className='fw-wolder'>{task.titulo}</h5>
                    <span>{`Tiempo: ${task.tiempo}`}</span> <br/>
                    <span>{`Responsable: ${task.responsable}`}</span>
                  </div>
                  <div className='card-footer p-4 pt-2 border-top-0 bg-transparent mt-auto'>
                    <div className='text-center d-flex gap-1 align-items-center justify-content-center'>
                      <Link to={`/detalle/${task.id}`} className={`btn btn-secondary mt-auto`}>Ver más</Link>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
          </section>
      ))}
    </section>
  )
}

export default TaskItem
