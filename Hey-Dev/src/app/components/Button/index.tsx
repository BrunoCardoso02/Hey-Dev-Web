import React from 'react';
import '@/app/components/Button/style.css';

interface ButtonProps {
    title: string;
}

const Button: React.FC<ButtonProps> = ({title}) => {
  return (
    <>
        <button className='buttonSubmit'>
            <p>{title}</p>
        </button>  
    </>
  )
}

export default Button;

