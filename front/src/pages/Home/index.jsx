import React from 'react'
import Food from '../../components/Food'
import Welcome from '../../components/Welcome'
import Testimonials from '../../components/Testimonials'
import OurServices from '../../components/OurServices'
import OurMenu from '../../components/OurMenu'
import Map from '../../components/Map'
import Contact from '../../components/Contact'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
 <>
    <Helmet>
    <meta charSet="utf-8" />
    <title>Pulse Menu</title>
    <link rel="canonical" href="http://mysite.com/example" />
</Helmet>
    <div>
        <Food/>
        <Welcome/>
        <Testimonials/>
        <OurServices/>
        <OurMenu/>
        <Map/>
    </div>
 </>
  )
}

export default Home