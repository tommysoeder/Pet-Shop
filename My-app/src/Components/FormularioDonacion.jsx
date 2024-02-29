import { useState } from 'react';
import '../styles/FormularioDonacion.css'

const FormularioDonacion = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState('');
    const [showThanks, setShowThanks] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      setShowThanks(true);
      setName('');
      setAmount('');
      setEmail('');
      console.log('Nombre:', name);
      console.log('Email:', email);
      console.log('Cantidad:', amount);
    };

  return (
    
    <div className='formulario-donacion'>
        <h2>Formulario de Donación</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div>
          <label htmlFor="amount">Cantidad:</label>
          <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} required/>
        </div>
        <button className="dona-button"type="submit">Dona!</button>
      </form>
    </div>
  )
}

export default FormularioDonacion