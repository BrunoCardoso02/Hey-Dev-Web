import React from 'react';
import NavBar from '@/app/components/NavBar/page';
import SideBar from '@/app/components/SideBar/page';

// import { Container } from './styles';

const Feed: React.FC = () => {
  return (
    <>
      <section className='mt-10 h-5/6 w-10/12 flex m-auto relative p-5 gap-7'>
        <SideBar />
        <main className='h-6/6 w-7/12 flex flex-col gap-5 '>
          <div className='bg-white h-2/6 w-12/12 rounded-xl'>

          </div>
          <div className='bg-white h-5/6 w-12/12 rounded-xl'>

          </div>
        </main>
        <aside className='h-6/6 w-3/12 flex flex-col gap-5'>
          <div className='bg-white h-4/6 w-12/12 rounded-xl'>

          </div>
          <div className='bg-white h-4/6 w-12/12 rounded-xl'>

          </div>
        </aside>
      </section>
    </>

  );
}

export default Feed;