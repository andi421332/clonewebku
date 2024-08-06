import logo from '../../logo.svg';
import "../../cssGroup/navigasi.css";
import { Link } from 'react-router-dom';

function Navigasi(){
    return (
        <div className='navWrapper'>
            <div className='navBar'>
                <Link to="/" target="_self">
                <nav>
                    <img src={logo} alt='logo ku' className='nav-logo'></img>
                </nav>
                </Link>
            </div>
        </div>
        
    )
}

export default Navigasi;