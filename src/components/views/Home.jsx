import { useState, useEffect } from 'react';
import AddGuitar from './AddGuitar';
import GuitarList from './GuitarList';

const Home = () => {

    const [guitars, setGuitars] = useState([
        {guitarModel: 'GSW-123', serial: "143233", madeIn: 'Canada'},
        {guitarModel: 'Special Red', serial: "239233", madeIn: 'Canada'},
        {guitarModel: 'Strato-sphere 15', serial: "319233", madeIn: 'United States'},
    ]);

    // It is defined here cause "it's not a good practice" to edit the state of
    // "guitars" directly from another component.
    // The function will be passed as a prop to where it's needed.
    const handleDelete = (serial) => {
        // creating a new array that will be stored in newGuitars
        const newGuitars = guitars.filter(guitar => guitar.serial !== serial);
        setGuitars(newGuitars);
    }

    const addNewGuitar = (theNewGuitar) => {
        // const newGuitar = guitars.push(theNewGuitar)
        const newGuitar = [...guitars, ...theNewGuitar]
        setGuitars(newGuitar)
        console.log(newGuitar)
        
    }

    
    return (
        <div className="home">
            <AddGuitar addNewGuitar={addNewGuitar}/>
            <GuitarList guitars={guitars} handleDelete={handleDelete} />

        </div>
    );
}
 
export default Home;