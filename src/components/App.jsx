import React from 'react';

// -------------------------------------------------------------------------------------------------- //

// useState - useEffect Class component
// class TestUseEffect extends React.Component {
//     state = {
//         numbers: [1, 2, 3],
//     };

//     addRandomNumber = () => {
//         const randNum = Math.round(Math.random() * 10);
//         this.setState({
//             numbers: [...this.state.numbers, randNum],
//         });
//     };

//     componentDidMount() {
//         console.log('Перший рендер відбувся');
//     }

//     componentDidUpdate(prevProps, prevState) {
//         console.log('Число додане', { prevProps, prevState, nextProps: this.props, nextState: this.state });
//     }

//     componentWillUnmount() {
//         console.log('Компонент буде видалений');
//     }

//     render() {
//         return (
//             <div>
//                 <ul>
//                     {this.state.numbers.map((num, index) => (
//                         <li key={`${num}__${index}`}>{num}</li>
//                     ))}
//                 </ul>
//                 <button onClick={this.addRandomNumber}>Додати число</button>
//             </div>
//         );
//     }
// }

// -------------------------------------------------------------------------------------------------- //

// useState - useEffect Function component
// function Test() {
// const [numbers, setNumbers] = React.useState([1, 2, 3]);
// const [count, setCount] = React.useState(0);

// const addRandomNumber = () => {
//     const randNum = Math.round(Math.random() * 10);
//     setNumbers([...numbers, randNum]);
// };

// const updateCount = () => {
//     setCount(count => count + 1)
// }

// React.useEffect(() => {
//     console.log('Компонент був відображений');
//     return () => {
//         console.log('Компонент був видалений');
//     }
// }, [numbers]);

//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={updateCount}>+</button>
//             <ul>
//                 {numbers.map((num, index) => (
//                     <li key={`${num}__${index}`}>{num}</li>
//                 ))}
//             </ul>
//             <button onClick={addRandomNumber}>Додати число</button>
//         </div>
//     );
// }

// -------------------------------------------------------------------------------------------------- //

// useRef Function component
// function Test() {
//     const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5]);

//     const ulRef = React.useRef();

//     const addNumber = () => {
//         const lastNumber = numbers[numbers.length - 1];
//         setNumbers([...numbers, lastNumber + 1]);
//     };

//     const handleClick = () => {
//         console.log('Click on li');
//     };

//     React.useEffect(() => {
//         ulRef.current.addEventListener('click', handleClick);
//     }, []);

//     const removeHandleClick = () => {
//         ulRef.current.removeEventListener('click', handleClick)
//     };

//     return (
//         <div>
//             <ul ref={ulRef}>
//                 {numbers.map((num, index) => (
//                     <li key={`${num}__${index}`}>{num}</li>
//                 ))}
//             </ul>
//             <button onClick={addNumber}>Додати число</button>
//             <button onClick={removeHandleClick}>Видалити можливість кліку</button>
//         </div>
//     );
// }

// -------------------------------------------------------------------------------------------------- //

// useRef Function component ver.2
function Test() {
    const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5]);

    let timerRef = React.useRef();
    
    const addNumber = () => {
        setNumbers(numbers => [...numbers, numbers[numbers.length - 1] + 1]);
    };

    const start = () => {
        timerRef.current = setInterval(addNumber, 1000);
    };
    
    console.log(numbers);
    
    const stop = () => {
        clearInterval(timerRef.current);
        console.log(timerRef.current);
    };

    return (
        <div>
            <ul>
                {numbers.map((num, index) => (
                    <li key={`${num}__${index}`}>{num}</li>
                ))}
            </ul>
            <button onClick={start}>Старт</button>
            <button onClick={stop}>Стоп</button>
        </div>
    );
}

export default Test;
