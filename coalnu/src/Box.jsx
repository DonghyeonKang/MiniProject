import React from 'react';

function Box(props) {
    const clickMe = () => {
        alert("가갸가갸가갸갸가갸");
    }

    return (
        <div className='box'>   
            {props.name}
            <button onClick={clickMe}>클릭!</button>
        </div>
    );
}

export default Box