const Loader = () => {
  return (
    <div className=" w-12 h-12 relative aspect-square rounded-full shadow-inner-white mx-auto drop-shadow-xl">
        <span className="absolute left-0 w-12 h-12 rounded-full border-t-4 border-red-500 loader-animation"></span>
        <span className="absolute left-0 w-12 h-12 rounded-full border-b-4 border-red-500 loader-animation"></span>
        <span className="absolute left-0 w-12 h-12 rounded-full border-r-4 border-white-300 blur-sm loader-animation-x"></span>
        <span className="absolute left-0 w-12 h-12 rounded-full border-l-4 border-white-300 blur-sm loader-animation-x"></span>
    </div>
  )
}

export default Loader