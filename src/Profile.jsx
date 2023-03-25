import React from 'react'
import About from './views/About'
import Experience from './views/Experience'
import Footer from './views/Footer'
import Header from './views/Header'
import TechStack from './views/TechStack'

const Profile = () => {
  return (
    <main>
        <Header/>
        <About/>
        <TechStack/>
        <Experience/>
        <Footer/>
    </main>
  )
}

export default Profile