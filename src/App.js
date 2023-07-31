import React from 'react';

import Test from './components/App';

function App() {
    const [visibleList, setVisibleList] = React.useState(true);

    const toggleVisibleList = () => {
        setVisibleList(visible => !visible);
    };

    return (
        <div>
            { visibleList && <Test />}
            <button onClick={toggleVisibleList}>Приховати / Показати</button>
        </div>
    );
}

export default App;
