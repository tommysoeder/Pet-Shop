const Inicio = () => {

    const handleScrollToTop=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }    

  return (
        <button onClick={handleScrollToTop}>Inicio</button>
  )
}

export default Inicio