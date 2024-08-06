import React from 'react';
import { Link } from "react-router-dom";


function ButtonKatalog({ text, onClick }) {

  return (
    <div className="BtnKatalog">
        <Link>
        <button onClick={() => onClick(text)}>
            {text}
        </button>
        </Link>
    </div> 

  )
}

export default ButtonKatalog;
