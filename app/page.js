import Image from 'next/image'
import ApiProvider from './utils/api-provider'

export default async function Home() {
  
  const anime = await ApiProvider.getTopAnime();
  return (
    <div/>
  )
}
