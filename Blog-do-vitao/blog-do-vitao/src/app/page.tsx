import Image from 'next/image';
import Feed from './pages/Feed/page';
import NavBar from './components/NavBar/page';

export default function Home() {
  return (
    <main className='bg-slate-300 w-full h-screen'>
      <NavBar/>
      <Feed/>
    </main>
  )
}
