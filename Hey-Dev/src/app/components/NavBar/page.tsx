import React from 'react';
import '@/app/components/NavBar/style.css'


// import { Container } from './styles';

const NavBar: React.FC = () => {
    return (
        <>
            <nav className='container'>
                <ul >
                    <li>
                        <a href="#" className='border-r-2 border-blue-50 pr-5'>Home</a>
                    </li>
                    <li className='list-none hover:text-blue-700 '>
                        <a href="#" className='border-r-2 border-blue-50 pr-5' >Minha conta</a>
                    </li>
                    <li className='list-none  hover:text-blue-700'>
                        <a href="#">Sair</a>
                    </li>
                </ul>
                <form action="" method="get">
                    <input type="text" placeholder='Digite aqui'  />
                </form>
            </nav>

        </>
    );
}

export default NavBar;