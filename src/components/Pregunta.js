import React,{Fragment}from 'react'

function Pregunta() {
    return (
     <Fragment>
         <h2>Coloca tu presupuesto</h2>

         <form>
             <input
                type="number"
                className="u-full-width"
                placeholder="coloca tu presupuesto"
             />

             <input
                type="submit"
                className="button-primary u-full-width"
                value="Definir Presupuesto"
             />
         </form>
     </Fragment>
    )
}

export default Pregunta