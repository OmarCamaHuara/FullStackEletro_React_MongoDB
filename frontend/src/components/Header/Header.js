
import {Link, withRouter } from 'react-router-dom';
import './style.css';
import Suricatas from '../../img/logo.png';
import Categoria from './Categorias'


function HeaderBase(){
    return(
    <ul className="nav nav-fill shadow d-flex align-items-center font-weight-bold">
        <li className="nav-item">
            <a className="nav-link active text-white" as={Link} to="/" href="/"><img className="logo" src={Suricatas} alt="FullStackEletro" /></a>
        </li>
        <li className="nav-item">
            <a className="nav-link text-white" as={Link} to="/pedidos" href="/pedidos">Pedidos</a>
        </li>
        <li className="nav-item">
            <Categoria />
        </li>
        <li className="nav-item">
            <a className="nav-link text-white" as={Link} to="/lojas" href="/lojas">Nossas Lojas</a>
        </li>
        <li className="nav-item">
            <a className="nav-link text-white" as={Link} to="/contatos" href="/contatos">Contato</a>
        </li>
    </ul>
    );
}


const Header = withRouter(HeaderBase);

export default Header;