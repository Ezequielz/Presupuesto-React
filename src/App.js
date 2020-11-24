import React, {useState} from 'react'
import Pregunta from "./components/Pregunta"
import Formulario from "./components/Formulario"



function App() {

  //definir el state
  const [presupuesto , guardarPresupuesto] = useState(0);
  const [restante,guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true)


  return (
    <div  className="container">
      <header>
          <h1>Gasto semanal</h1>

          
            <div className="contenido-principal contenido">
              {/* si mostrarpregunta existe es por que no se indico presupuesto y muestra la pregunta*/}
              {mostrarpregunta ? 
              (
              <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
            />
            ) :  /* si no existe mostrarpregunta es que ya se indico presupuesto y se muestra solo formulario */
             (
              <div className="row">
              <div className="one-half column">
                  <Formulario/>
              </div>
              <div className="one-half column">
                  2
              </div>
          </div>
            ) }
            

            </div>
      </header>
         

    </div>
    
  );
}

export default App;
