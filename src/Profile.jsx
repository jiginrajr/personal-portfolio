import React from 'react'
import About from './views/About'
import Experience from './views/Experience'
import Footer from './views/Footer'
import Header from './views/Header'
import { NavigationToolbar } from './views/NavigationToolbar'
import TechStack from './views/TechStack'

const Profile = () => {
  return (
    <main>
      <NavigationToolbar/>
        <Header/>
        <About/>
        <TechStack/>
        <Experience/>
        <Footer/>
    </main>
  )
}

export default Profile