import React from 'react';
import Image from "next/image"
import ImagePerfil from '@/app/assets/images/image-perfil.jpg'
import GitHubLogo from '@/app/assets/icons/github-logo.png'
import LogoInstagram from '@/app/assets/icons/logo-instagram.webp'
import LogoEmail from '@/app/assets/icons/email-logo.png'
import LogoOrganization from '@/app/assets/icons/organization.png'


export default function SideBar(){
    return(
        <aside className='bg-white relative h-min w-64 p-3 rounded-xl'>
        <figure className='relative w-full p-3 flex items-center justify-center border-b border-gray-300'>
            <Image src={ImagePerfil} alt='Foto de perfil do usuário' className='h-52 w-48 rounded-full' />
        </figure>
        <ul className='p-2 border-b border-gray-300 flex flex-col mt-2'>
            <li className='list-none flex items-center'><p  className='text-blue-700 font-semibold font'>Bruno Cardoso</p></li>
            <li className='list-none flex items-center'><p className='text-gray-500'>Desenvolvedor Back-End</p></li>
        </ul>
        <ul className='p-2 border-b border-gray-300 flex flex-col gap-4 mt-2'>
            <li className='list-none flex items-center'> <Image src={GitHubLogo} alt='Logo do instagram' className='h-6 w-6  mr-1'/><p className='text-gray-500 hover:underline hover:text-blue-700 hover:cursor-pointer'>BrunoCardoso02</p></li>
            <li className='list-none flex items-center'> <Image src={LogoInstagram} alt='Logo do instagram' className='h-6 w-6 mr-1 rounded-2xl'/><p className='text-gray-500 hover:underline hover:text-blue-700 hover:cursor-pointer'>@bruunocardoso_</p></li>
            <li className='list-none flex items-center w-5 '> <Image src={LogoEmail} alt='Logo do Email' className='h-6 w-6 mr-1 rounded-2xl'/><p className='text-gray-500 text-sm hover:underline hover:text-blue-700 hover:cursor-pointer'>bruno.cardoso02@gmail.com</p></li>
        </ul>
        <ul className='p-2 flex flex-col gap-4 mt-2'>
            <h1 className='text-blue-700 font-semibold  font'>Organizações</h1>
            <li className='list-none flex'><Image src={LogoOrganization} alt='organização 1' className='h-5 w-5  mr-1'/><p className='text-gray-500'>TaleDreams</p></li>
            <li className='list-none flex flex-row'><Image src={LogoOrganization} alt='organização 1' className='h-5  w-5  mr-1'/><p className= 'text-gray-500'>Forthless</p></li>
        </ul>
    </aside>
    )
}