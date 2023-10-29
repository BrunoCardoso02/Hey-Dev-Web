import React from 'react';
import Image from "next/image"
import ImagePerfil from '@/app/assets/images/image-perfil.jpg'
import GitHubLogo from '@/app/assets/icons/github-logo.png'
import LogoInstagram from '@/app/assets/icons/logo-instagram.webp'
import LogoEmail from '@/app/assets/icons/email-logo.png'
import LogoOrganization from '@/app/assets/icons/organization.png'
import '@/app/components/SideBar/style.css'


export default function SideBar(){
    return(
        <div className='containerLateral'>
        <figure>
            <Image src={ImagePerfil} alt='Foto de perfil do usuário' className='imageProfile' />
        </figure>
        <ul className='userInformations'>
            <li>
                <h3 className='userId'>Bruno Cardoso</h3>
            </li>
            <li>
                <p className='userDescription'>Desenvolvedor Back-End</p>
            </li>
        </ul>
        <ul className='userInformations'>
            <li className='socialMedia'>
                <Image src={GitHubLogo} alt='Logo do instagram' className='icon'/>
                <p className='text-gray-500 hover:underline hover:text-blue-700 hover:cursor-pointer'>BrunoCardoso02</p>
            </li>
            <li  className='socialMedia'>
                 <Image src={LogoInstagram} alt='Logo do instagram' className='icon'/>
                 <p>@bruunocardoso_</p>
            </li>
            <li  className='socialMedia'> 
                <Image src={LogoEmail} alt='Logo do Email' className='icon'/>
                <p>bruno.cardoso02</p>
            </li>
        </ul>
        <ul className='organizations'>
            <h2>Organizações</h2>
            <li className='socialMedia'>
                <Image src={LogoOrganization} alt='organização 1' className='icon' />
                <p>TaleDreams</p>
            </li>
            <li className='socialMedia'>
                <Image src={LogoOrganization} alt='organização 1' className='icon'/>
                <p>Forthless</p>
            </li>
        </ul>
    </div>
    )
}