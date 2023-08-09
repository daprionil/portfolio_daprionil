const IconTecnology = ({name, url}) => {
  return (
    <div className=''>
        <img src={url} className="max-w-[100px] aspect-square w-full object-cover rounded-2xl max-h-[100px] h-full" alt={name} />
    </div>
  )
}

export default IconTecnology