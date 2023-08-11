import { Tooltip } from "react-tooltip";

const IconTecnology = ({ name, url }) => {
    const idToolTip = `id_${name}_tooltip`;
    return (
        <>
            <div data-tooltip-id={idToolTip} data-tooltip-content={name} className='min-w-[100px] bg-white rounded-2xl shadow-3xl transform transition duration-300 hover:rotate-6 hover:scale-[105%]'>
                <img src={url} className="max-w-[100px] aspect-square w-full object-cover rounded-2xl max-h-[100px] h-full" alt={name} />
            </div>
            <Tooltip id={idToolTip}/>
        </>
    )
}

export default IconTecnology;