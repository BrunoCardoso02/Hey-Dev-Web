import React from 'react';
import '@/app/pages/Cadastro/style.css'
import Link from 'next/link';

// import { Container } from './styles';

const Cadastro: React.FC = () => {
    return (
        <>
            <title>HeyDev | SignUp</title>
            <section>
                <aside>
                    <h2>Bem-vindo!</h2>
                    <p>Já possui uma conta?</p>
                    <div><p>Sign In</p></div>
                </aside>
                <main>
                    <h1>Junte-se a nós</h1>
                    <form action="">
                        <input type="text" placeholder='Nome' />
                        <input type="email" placeholder='Email' />
                        <input type="password" placeholder='Senha' />
                        <button>Sign Up</button>
                    </form>
                </main>
            </section>
        </>
    )
}

export default Cadastro;