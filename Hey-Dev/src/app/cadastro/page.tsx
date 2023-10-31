"use client"
import React, { useState, useEffect } from 'react';
import '@/app/cadastro/style.css'
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Button from '../components/Button';

const Cadastro: React.FC = () => {
    const [username, setUsername ] = useState('');
    const [email, setEmail] = useState('');
    const [socialName, setSocialName] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter() 


    const dataUser = {
        username: username,
        email: email,
        password: password,
        social_name: socialName
    }

    function handleRegister(event: React.FormEvent) {
        event.preventDefault()
        axios.post('http://localhost:8080/useraccount/create', dataUser)
        .then(() => {
            alert("Dados cadastrados");
            const router = useRouter()
            router.push('/feed')

        })
        .catch((err) => alert(err))
    }
    function routerTeste(){
        router.push('login')
    }

    return (
        <>
            <title>HeyDev | SignUp</title>
            <section className='containerCadastro'>
                <aside>
                    <h2>Bem-vindo!</h2>
                    <p>Já possui uma conta?</p>

                    <button className='containerLink' onClick={() =>  routerTeste()}><p>Sign In</p></button>
                </aside>
                <div className='container-Principal'>
                    <h1>Junte-se a nós</h1>
                    <form action="">
                        <input type="text" placeholder='Nome' value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="text" placeholder='Nome Social' value={socialName} onChange={(e) => setSocialName(e.target.value)}/>
                        <input type="password" placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button onClick={handleRegister}>Sign Up</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Cadastro;