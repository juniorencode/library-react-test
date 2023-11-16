import { Button } from './components/Button'
import { Heading } from './components/Heading'

const App = () => {
  const handleClick = () => {
    alert('¡Hola! Has hecho clic en el botón.')
  }

  return (
    <div>
      <Heading>Ejemplo de Componente Button</Heading>
      <Button text="Haz clic aquí" onClick={handleClick} type="button" />
    </div>
  )
}

export default App
