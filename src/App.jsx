import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import header from './top'
import './App.css'

function App() {

    const employees = [
      { name: 'Juan', lastName: 'Perez', hobbies: ['fútbol', 'lectura'], age: 25 },
      { name: 'María', lastName: 'González', hobbies: ['pintura', 'música'], age: 30 },
      { name: 'Pedro', lastName: 'López', hobbies: ['senderismo', 'cine'], age: 28 },
      { name: 'Ana', lastName: 'Martínez', hobbies: ['baile', 'viajar'], age: 22 },
      { name: 'Carlos', lastName: 'Sánchez', hobbies: ['cocina', 'videojuegos'], age: 35 },
      { name: 'Sofía', lastName: 'Ruiz', hobbies: ['natación', 'teatro'], age: 29 },
      { name: 'Luis', lastName: 'Hernández', hobbies: ['jardinería', 'patinar'], age: 31 },
      { name: 'Elena', lastName: 'Díaz', hobbies: ['fotografía', 'montañismo'], age: 27 },
      { name: 'Javier', lastName: 'Torres', hobbies: ['ajedrez', 'surf'], age: 33 },
      { name: 'Laura', lastName: 'Romero', hobbies: ['yoga', 'ciclismo'], age: 26 },
      { name: 'David', lastName: 'Gómez', hobbies: ['escritura', 'musculación'], age: 34 },
      { name: 'Isabel', lastName: 'Jiménez', hobbies: ['piano', 'voleibol'], age: 23 },
      { name: 'Miguel', lastName: 'Alvarez', hobbies: ['cocina', 'pintura'], age: 37 },
      { name: 'Carmen', lastName: 'Moreno', hobbies: ['jardinería', 'cine'], age: 24 },
      { name: 'Alejandro', lastName: 'Dominguez', hobbies: ['viajar', 'fotografía'], age: 30 },
      { name: 'Rosa', lastName: 'Ortega', hobbies: ['bailar', 'leer'], age: 32 },
      { name: 'Francisco', lastName: 'Vargas', hobbies: ['música', 'senderismo'], age: 28 },
      { name: 'Lucía', lastName: 'Ramos', hobbies: ['gimnasia', 'ciclismo'], age: 26 },
      { name: 'Antonio', lastName: 'Castillo', hobbies: ['cocinar', 'pintura'], age: 29 },
      { name: 'Eva', lastName: 'Iglesias', hobbies: ['cine', 'teatro'], age: 31 },
      { name: 'José', lastName: 'Fernández', hobbies: ['fútbol', 'baloncesto'], age: 27 },
      { name: 'Teresa', lastName: 'Serrano', hobbies: ['pintura', 'música'], age: 33 },
      { name: 'Manuel', lastName: 'Garrido', hobbies: ['cocina', 'fotografía'], age: 30 },
      { name: 'Rocío', lastName: 'Cortés', hobbies: ['patinar', 'leer'], age: 28 },
      { name: 'Pablo', lastName: 'Marín', hobbies: ['surf', 'senderismo'], age: 25 },
      { name: 'Beatriz', lastName: 'Luna', hobbies: ['piano', 'yoga'], age: 29 },
      { name: 'Diego', lastName: 'Ibáñez', hobbies: ['ciclismo', 'música'], age: 34 },
      { name: 'Nuria', lastName: 'Gil', hobbies: ['teatro', 'cocina'], age: 27 },
      { name: 'Rubén', lastName: 'Sanz', hobbies: ['fútbol', 'lectura'], age: 32 },
      { name: 'Cristina', lastName: 'Herrero', hobbies: ['bailar', 'pintura'], age: 26 }
    ];
  
    
    const almacenamiento = [];
    for (let i = 0; i < employees.length; i++) {
      almacenamiento.push(
        <div key={i}>
          <p>Nombre: {employees[i].name}</p>
          <p>Apellidos: {employees[i].lastName}</p>
          <p>Hobbies: {employees[i].hobbies.join(', ')}</p>
          <p>Edad: {employees[i].age}</p>
        </div>
      );
    }



    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)
    const [result, setResult] = useState(0)



    const handleSuma = (e) => {
        e.preventDefault()
       setResult(Number(number1) + Number(number2))
      return result
    }
    const handleResta = (e) => {
      e.preventDefault()
     setResult(Number(number1) - Number(number2))
    return result
  }
      const handleDivision = (e) => {
        e.preventDefault()
      setResult(Number(number1) / Number(number2))
      return result
    }
    const handleMultiplicacion = (e) => {
      e.preventDefault()
    setResult(Number(number1) * Number(number2))
    return result
  }
   
  return (
    <div className="envoltura">
    <header>
      <img className="logo" src="./src/assets/cocretainc.jpg" alt="logo" />
    </header>
    <main>

    
      {almacenamiento}

      <div>
            <form action="">
                <h2>Calculadora</h2>
                <input type="number" id="number1" name="number1" onChange={(e)=>{setNumber1(e.target.value)}} placeholder="Number 1"/><br />
                <input type="number" id="number2" name="number2" onChange={(e)=>{setNumber2(e.target.value)}} placeholder="Number 2"/>
                <div>
                  <button onClick={handleSuma}>+</button>
                  <button onClick={handleResta}>-</button>
                  <button onClick={handleMultiplicacion}>*</button>
                  <button onClick={handleDivision}>/</button>
                </div>
                <h2>Resultado: {result}</h2>
              
            </form>
        </div>
    </main>

    <footer>
    <p>Todos los derechos reservados.</p> 
    <p>Coquetas INC © </p> 
    <p>Dirección: Simancas (Madriz)</p>
    <p>Teléfono: 917335673 - 635444912 </p>
    <p>Email: croquetasINC@hotmail.com</p>
    </footer>


      
      
      
      {/* <button>Aquí tiene que enviar algo para que funcione</button>
      </Form> */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
    /* <pie /> */
  )
}

export default App
