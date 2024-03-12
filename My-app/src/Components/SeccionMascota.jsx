import React from 'react';
import '../styles/SeccionMascota.css'

const SeccionMascota = () => {
  
  const mascotaInfo = {
    mascota1: {
      name: 'Joaquin',
      sexo: 'Macho',
      edad: '3 años',
      talla: 'Pequeño',
      description: 'Más salao que el del Betis',
      
    },
    mascota2: {
      name: 'Victor Manuel',
      sexo: 'Macho',
      edad: '33',
      talla: 'Grande',
      description: 'Igual de longevo que de cariñoso',
    },
    mascota3: {
      name: 'Mary Poppins',
      sexo: 'Hembra',
      edad: '2',
      talla: 'Pequeño',
      description: 'Muy buena con los niños',
    },
  };

  return (
    <div className="mascota-card">
      <h2>{mascotaInfo.name}</h2>
      <p>{mascotaInfo.sexo}</p>
      <p>{mascotaInfo.edad}</p>
      <p>{mascotaInfo.talla}</p>
      <p>{mascotaInfo.description}</p>
    </div>
  );
};

export default SeccionMascota;