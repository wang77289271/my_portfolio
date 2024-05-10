import ButtonGradient from '../assets/svg/ButtonGradient'
import { metaTags, navigation } from '../constants'
import {
  About,
  Collaboration,
  Navbar,
  Works,
  Header,
  Designs,
  Contact,
  Footer,
} from '../components'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const Home = () => {
  const homeMetaTags = metaTags.find((tag) => tag.id === 'home')
  return (
    <HelmetProvider>
      <Helmet>
        <title>Ye W.</title>
        {homeMetaTags.metaNames.map((item) => (
          <meta key={item.id} name={item.name} content={item.content} />
        ))}
        <link rel='canonical' href='https://findyewang.com/' />
        {homeMetaTags.metaProperties.map((item) => (
          <meta
            key={item.id}
            property={`og:${item.name}`}
            content={item.content}
          />
        ))}
      </Helmet>
      <div className='pt-[4.75em] lg:pt-[5.25em] overflow-hidden'>
        <Navbar navigation={navigation} />
        <Header />
        <About />
        <Collaboration />
        <Works />
        <Designs />
        <Contact />
        <Footer />
      </div>
      <ButtonGradient />
    </HelmetProvider>
  )
}

export default Home
