import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap"
import { ListTask, Person } from "react-bootstrap-icons"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Task } from "../../types/Task"
import { TaskService } from "../../service/TaskService"
import { toast } from "react-toastify"
import TaskForm from "../TaskForm/TaskForm"

const NavBar = () => {

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const createTask = async (newTask: Task) => {
    try{
      const result = await TaskService.createTask(newTask);
      console.log('Nueva tarea agregada: ', result.id);
      navigate(`/detalle/${result.id}`);

      toast.success('Tarea creada correctamente', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    } catch (error){
      toast.error('Error al crear la tarea', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
      console.error("Error al crear la tarea: ", error);
    }
  };
 
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand onClick={() => navigate('/')}>Desarrollo en Argentina</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
            
            <Nav.Link onClick={() => navigate('/')}>Inicio</Nav.Link> 
               
                <NavDropdown title="Tareas" id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={() => navigate('/por-hacer')}>Por Hacer</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => navigate('/en-produccion')}>En Producción</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => navigate('/por-testear')}>Por Testear</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => navigate('/completadas')}>Completada</NavDropdown.Item>
                </NavDropdown>

            <Nav.Link onClick={handleShowModal}>Agregar Tarea</Nav.Link>
            </Nav>

            <Nav className="d-none d-md-flex ms-auto">
                <Nav.Link onClick={() => navigate('/ticket')}><ListTask/></Nav.Link>
                <Nav.Link onClick={() => navigate('/perfil')}><Person/></Nav.Link>
            </Nav>

            <div className="d-md-none">
                <ul className="navbar-nav me-auto-mb-2 mb-md-0">
                    <li className="nav-item">
                        <a className="nav-link" href="#ticket">Ticket</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#perfil">Perfil</a>
                    </li>
                </ul>
            </div>
           
        </Navbar.Collapse>
      </Container>

    </Navbar>

    <TaskForm showModal={showModal} handleClose={handleCloseModal} createTask={createTask}/>

    </>
  )
}

export default NavBar
