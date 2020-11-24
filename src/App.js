import React, {useState, useEffect} from 'react'
import Pregunta from "./components/Pregunta"
import Formulario from "./components/Formulario"
import Listado from "./components/Listado"
import ControlPresupuesto from "./components/ControlPresupuesto"



function App() {

  //definir el state
  const [presupuesto , guardarPresupuesto] = useState(0);
  const [restante,guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true)
  const [gastos, guardarGastos] = useState([]);
  const [gasto , guardarGasto] = useState({})
  const [creargasto, guardarCrearGasto]= useState(false)

  //useEfect que actualiza el saldo restante
  useEffect( () => {
    if(creargasto){

      //agrega el nuevo presupuesto
      guardarGastos([
        ...gastos,
        gasto
      ])

      //resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad
      guardarRestante(presupuestoRestante)
    

    //resetear a false
    guardarCrearGasto(false)
    }
  },[gasto])


/*   //cuando se agregue un gasto
  const agregarNuevoGasto = gasto =>{
    guardarGastos([
      ...gastos,
      gasto
    ])
  } */


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
                  <Formulario
                  guardarGasto={guardarGasto}
                  guardarCrearGasto={guardarCrearGasto}
                  />
              </div>
              <div className="one-half column">
                  <Listado
                    gastos={gastos}
                  />

                  <ControlPresupuesto 
                    presupuesto={presupuesto}
                    restante={restante}
                  />
              </div>
          </div>
            ) }
            

            </div>
      </header>
         

    </div>
    
  );
}

export default App;
