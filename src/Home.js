import { useState, useEffect } from 'react';

const Home = () => {
    // useState
    const [name, setName] = useState('Juan');
    const [age, setAge] = useState(27);

    useEffect(() => {
        console.log('the useEffect did run');
    }, [age]);

    const handleClick = () => {
        console.log('hello there');
    }
    const handleClickAgain = (theName) => {
        console.log(theName);
    }
    const handleClickAgainAgain = (theName) => {
        setName(theName);
        setAge(age+1)
    }

    return (
        <div className="home">
            <h2>THE Homepage</h2>
            <button onClick={handleClick}>Click here</button>
            {/* an anonymous function doesn't get self-invoked? */}
            <button onClick={() => {
                handleClickAgain('John')
            }}>Click here too</button>

            <p>{ name } is {age} years old!</p>
            <button onClick={() => {handleClickAgainAgain('The John')}}>Also click here</button>
        </div>
    );
}
 
export default Home;