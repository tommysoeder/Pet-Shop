import { useState, useEffect} from 'react';
import '../styles/FormularioDonacion.css'
import { Navigate } from 'react-router-dom';

const FormularioDonacion = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expDate, setExpDate] = useState('');
    const [securityCode, setSecurityCode] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [submitted, setSubmitted] = useState(false); 
    const [totalDonation, setTotalDonation] = useState(0);

    useEffect(() => {
      const totalDonationFromStorage = localStorage.getItem('totalDonation');
      if (totalDonationFromStorage) {
          setTotalDonation(Number(totalDonationFromStorage));
      }
  }, []);

    const handleSubmit = (e) => {
      e.preventDefault();

      if (!name || !email || !amount || !cardNumber || !expDate || !securityCode){
        setShowAlert(true); 
        setShowThankYou(true);
        setTotalDonation(totalDonation + Number(donationAmount));

        localStorage.setItem('totalDonation', totalDonation + Number(donationAmount));

        return; 
      }

      console.log('Nombre:', name);
      console.log('Email:', email);
      console.log('Cantidad:', amount);
      console.log('Número de Tarjeta:', cardNumber);
      console.log('Fecha de Caducidad:', expDate);
      console.log('CVV:', securityCode);

      setTotalDonation(totalDonation + Number(amount));

      localStorage.setItem('totalDonation', totalDonation + Number(amount));

      setName('');
      setAmount('');
      setEmail('');
      setCardNumber('');
      setExpDate('');
      setSecurityCode('');
      setSubmitted(true);
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
          <button type="submit">Dona</button>
        </div>
      </form>
      {showAlert && <div className="alert">Por favor, rellene todos los campos.</div>}
      {console.log(totalDonation)}
      {submitted && <Navigate to={{ pathname: '/donated', state: { totalDonation } }} />}
    </div>
  )
}

export default FormularioDonacion;
