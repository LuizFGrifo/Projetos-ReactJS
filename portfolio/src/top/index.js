import React from 'react';
import './style.css';

function Top() {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);
    return (
        <top className="top-container">
            <div className="top-content">
                <p className="top-text">{!data ? "Loading..." : data}</p>
            </div>
        </top>
    );
};

export default Top;
