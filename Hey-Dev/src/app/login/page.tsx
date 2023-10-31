import React from 'react';
import '@/app/login/style.css'
import Button from '../components/Button';



const Login: React.FC = () => {
  return (
    <>
        <title>HeyDev | Login</title>
        <section className='containerLogin'>
            <h2>Bem vindo de volta!</h2>
            <form action="">
                <input type="text" placeholder='Email' />
                <input type="password" placeholder='Senha' />
                <Button title="Sign In"/>
            </form>
        </section>
    </>
  );
}

export default Login;