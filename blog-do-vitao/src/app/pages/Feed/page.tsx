import React from 'react';
import NavBar from '@/app/components/NavBar/page';
import SideBar from '@/app/components/SideBar/page';
import '@/app/pages/Feed/style.css'

// import { Container } from './styles';

const Feed: React.FC = () => {
  return (
    <>
      <title>HeyDev | Feed</title>
      <section>
        <SideBar />
        <div className='containerGeral'>
          <div className='containerInfo'>
            <h2>Bem-vindo(a) BrunoCardoso02</h2>
            <p>Desenvolvedor Front-end com experiência em React JS e outras ferramentas do seu ecossistema.</p>
            <div className='infoAccount'>
              <ul>
                <li>
                  <p>Repositórios</p>
                  <p>27</p>
                </li>
                <li>
                  <p>Organizações</p>
                  <p>3</p>
                </li>
                <li>
                  <p>Seguidores</p>
                  <p>1.1k</p>
                </li>
                <li>
                  <p>Seguindo</p>
                  <p>700</p>
                </li>
              </ul>
            </div>
          </div>

          <div className='formularioPost'>
            <h3>Compartilhe algo conosco!</h3>
            <form action="">
              <input type="text" name="postInput" id="" placeholder='Digite aqui' />
            </form>
          </div>

          <div className='containerPosts'>
            <h3>Ultimos Posts:</h3>
            <div className='post'>
              <h3>PedrinhoMatadorxx</h3>
              <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
            </div>
            <div className='post'>
              <h3>PedrinhoMatadorxx</h3>
              <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
            </div>
          </div>

        </div>
        <div className='containerDataFollowers'>
          <div className='containerFollowers'>
            <h3>Seguidores</h3>
          </div>
          <div className='containerFollowers'>
            <h3>Seguindo</h3>
          </div>
        </div>
      </section>
    </>

  );
}

export default Feed;