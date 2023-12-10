import Image from 'next/image'
import ApiProvider from './utils/api-provider'
import Sidebar from './components/sidebar';

export default async function Home() {
  
  const anime = await ApiProvider.getTopAnime();
  return (
    <Sidebar />
  )
}
