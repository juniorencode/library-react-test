import React from 'react';
import Button from './Button'; // Asegúrate de ajustar la ruta según la ubicación de tu componente

function App() {
  const handleClick = () => {
    alert('¡Hola! Has hecho clic en el botón.');
  };

  return (
    <div>
      <h1>Ejemplo de Componente Button</h1>
      <Button text="Haz clic aquí" onClick={handleClick} type="button" />
    </div>
  );
}

export default App;
