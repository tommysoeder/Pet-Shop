import { useState } from 'react';
import '../styles/FormularioDonacion.css'
import Nav_Button from './Nav_Button';
import { Link } from 'react-router-dom';

const FormularioDonacion = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expDate, setExpDate] = useState('');
    const [securityCode, setSecurityCode] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      setName('');
      setAmount('');
      setEmail('');
      setCardNumber('');
      setExpDate('');
      setSecurityCode('');

      console.log('Nombre:', name);
      console.log('Email:', email);
      console.log('Cantidad:', amount);
      console.log('Número de Tarjeta:', cardNumber);
      console.log('Fecha de Caducidad:', expDate);
      console.log('CVV:', securityCode);
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
        <div>
          <label htmlFor="cardNumber">Número de Tarjeta:</label>
          <input type="text" id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required/>
        </div>
        <div>
          <label htmlFor="expDate">Fecha de Caducidad:</label>
          <input type="date" id="expDate" value={expDate} onChange={(e) => setExpDate(e.target.value)} required/>
        </div>
        <div>
          <label htmlFor="securityCode">CVV:</label>
          <input type="text" id="securityCode" value={securityCode} onChange={(e) => setSecurityCode(e.target.value)} required/>
        </div>
        <div className='dona-button'>
        <Nav_Button link={<Link to="/donated">Dona</Link>}/>
        </div>
      </form>
    </div>
  )
}

export default FormularioDonacion