"use client"
import React, { useState, useEffect } from 'react';
import '@/app/cadastro/style.css'
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';




const Cadastro: React.FC = () => {
    const [username, setUsername ] = useState('');
    const [email, setEmail] = useState('');
    const [socialName, setSocialName] = useState('');
    const [password, setPassword] = useState('');

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


    return (
        <>
            <title>HeyDev | SignUp</title>
            <section>
                <aside>
                    <h2>Bem-vindo!</h2>
                    <p>Já possui uma conta?</p>
                    <Link href={'/login'} className='containerLink'><p>Sign In</p></Link>
                </aside>
                <main>
                    <h1>Junte-se a nós</h1>
                    <form action="">
                        <input type="text" placeholder='Nome' value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="text" placeholder='Nome Social' value={socialName} onChange={(e) => setSocialName(e.target.value)}/>
                        <input type="password" placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button onClick={handleRegister}>Sign Up</button>
                    </form>
                </main>
            </section>
        </>
    )
}

export default Cadastro;