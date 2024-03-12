
const SeccionMascota = () => {
  
  const mascotaInfo = {
      name: 'Joaquín',
      sexo: 'Macho',
      edad: '3 años',
      talla: 'Pequeño',
      description: 'Más salao que el del Betis',
      
  };

  return (
    <div className="mascota-card">
      <h2>{mascotaInfo.name}</h2>
      <p>Sexo: {mascotaInfo.sexo}</p>
      <p>Edad: {mascotaInfo.edad}</p>
      <p>Talla: {mascotaInfo.talla}</p>
      <p>Descripción: {mascotaInfo.description}</p>
    </div>
  );
};

export default SeccionMascota;