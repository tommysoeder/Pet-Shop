const Arriba = () => {

    const handleScrollToTop=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }    

  return (
        <button className="Arriba" onClick={handleScrollToTop}>Arriba</button>
  )
}

export default Arriba