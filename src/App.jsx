import { Button } from './components/Button'
import { Heading } from './components/Heading'

const App = () => {
  const handleClick = () => {
    alert('¡Hola! Has hecho clic en el botón.')
  }

  return (
    <div>
      <Heading>Ejemplo de Componente Button</Heading>
      <Button onClick={handleClick} type="button">
        Haz clic aquí
      </Button>
    </div>
  )
}

export default App
