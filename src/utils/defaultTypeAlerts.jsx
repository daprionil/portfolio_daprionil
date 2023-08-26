//* Define all types of default alerts

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


const mySwal = withReactContent(Swal);

function sweetFalse({message}){
    mySwal.fire({
        title:'Error',
        html: <>
            <p className="pb-6">{message}</p>
            <button onClick={Swal.close} className="btn bg-red-600">Cerrar</button>
        </>,
        icon:'error',
        showConfirmButton:false
    })
}


function sweetSuccess({message}){
    mySwal.fire({
        title:'Tarea realiza correctamente',
        html: <>
            <p className="pb-6">{message}</p>
            <button onClick={Swal.close} className="btn bg-green-300">Aceptar</button>
        </>,
        icon:'success',
        showConfirmButton:false
    })
}

export {
    sweetFalse,
    sweetSuccess
}