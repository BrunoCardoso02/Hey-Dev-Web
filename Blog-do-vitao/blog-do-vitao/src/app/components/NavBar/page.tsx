import React from 'react';
import AiOutlineSearch from 'react-icons';
import Image from 'next/image';
import ImagePerfil from '@/app/assets/images/image-perfil.jpg'
import GitHubLogo from '@/app/assets/icons/github-logo.png'
import LogoInstagram from '@/app/assets/icons/logo-instagram.webp'
import LogoEmail from '@/app/assets/icons/email-logo.png'
import LogoOrganization from '@/app/assets/icons/organization.png'

// import { Container } from './styles';

const NavBar: React.FC = () => {
    return (
        <>
            <nav className='bg-blue-400 w-full h-20 flex flex-row p-7 justify-around'>
                <ul className='flex flex-row justify-between gap-5'>
                    <li className='list-none hover:text-blue-700 '>
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
                    <input type="text" className='bg-blue-500 rounded-full h-8 outline-none p-3' placeholder='Digite aqui' />
                </form>
            </nav>

        </>
    );
}

export default NavBar;