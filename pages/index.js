import Head from 'next/head';
import Body from '../src/components/body/body';
import Footer from '../src/components/footer/footer';

export default function Home() {
  return (
    <div>
      <Head>
          <title>Portfólio | Home</title>          
      </Head> 
      <Body/> 
      <Footer/>
    </div>
  )
}
