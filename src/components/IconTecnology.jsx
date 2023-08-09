const IconTecnology = ({ name, url }) => {
    return (
        <div className='min-w-[100px] bg-white rounded-2xl shadow-3xl transform transition duration-300 hover:rotate-12 hover:scale-[101%]'>
            <img src={url} className="max-w-[100px] aspect-square w-full object-cover rounded-2xl max-h-[100px] h-full" alt={name} />
        </div>
    )
}

export default IconTecnology