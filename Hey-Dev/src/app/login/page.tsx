import React from 'react';
import '@/app/login/style.css'



const Login: React.FC = () => {
  return (
    <>
        <title>HeyDev | Login</title>
        <section>
            <h2>Bem vindo de volta!</h2>
            <form action="">
                <input type="text" placeholder='Email' />
                <input type="password" placeholder='Senha' />
                <button>Login</button>
            </form>
        </section>
    </>
  );
}

export default Login;