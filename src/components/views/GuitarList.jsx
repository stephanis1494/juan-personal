// Use destructuring to receive the parameters
const GuitarList = ({ guitars, handleDelete}) => {
    // not used cause we're destructuring the props
    // const guitars = props.guitars;

    return (
        <div className="guitarList">
            {guitars.map((guitar) => (
                <div className="guitarDetailsPreview" serial={ guitar.serial }>
                    <h2>{ guitar.guitarModel }</h2>
                    <p>Made in { guitar.madeIn }</p>
                    <button onClick={() => handleDelete(guitar.serial)}>Remove</button>
                </div>
            ))}
        </div>  
    );
}
 
export default GuitarList;