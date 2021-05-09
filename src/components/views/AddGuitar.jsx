import { useState, useEffect } from 'react';

const AddGuitar = ({ addNewGuitar }) => {

    // const [newGuitar, setNewGuitar] = useState({
    //   guitarModel: '',
    //   serial: '',
    //   madeIn: ''
    // });

    const [guitarModel, setGuitarModel] = useState('');
    const [guitarSerial, setGuitarSerial] = useState('');
    const [guitarMadeIn, setGuitarMadeIn] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      // console.log(e);
      const newGuitar = [{guitarModel: guitarModel, serial: guitarSerial, madeIn: guitarMadeIn}]
      // console.log(newGuitar)
      addNewGuitar(newGuitar);
    }
     
    // const handleGuitarModelInputChange = (e) => {
    //   setNewGuitar({...newGuitar, guitarModel: e.target.value})
    //   console.log(newGuitar.guitarModel)
    // }
    // const handleGuitarSerialInputChange = (e) => {
    //   setNewGuitar({...newGuitar, serial: e.target.value})
    //   console.log(newGuitar.serial)
    // }
    // const handleGuitarMadeInInputChange = (e) => {
    //   setNewGuitar({...newGuitar, madeIn: e.target.value})
    //   console.log(newGuitar.madeIn)
    // }

    return (
      <div>
        <form onSubmit={handleSubmit}>

          <label>Model: </label>
          <input type="text" 
            value={guitarModel}
            onChange={(e) => setGuitarModel(e.target.value)}
          />
          <p>{ guitarModel }</p>
          <p>{ guitarSerial }</p>
          
          <label htmlFor="">Serial </label>
          <input type="text"
            value={guitarSerial}
            onChange={(e) => setGuitarSerial(e.target.value)}
          />
               
          <label>Made in: </label>
          <input type="text"
            value={guitarMadeIn}
            onChange={(e) => setGuitarMadeIn(e.target.value)}
          />
          
          <button type="submit">Add</button>

        </form>

      </div>
    );
}
 
export default AddGuitar;