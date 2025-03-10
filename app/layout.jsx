import React from 'react'
import  Navbar from '../components/Navbar';
import '../assets/styles/global.css'

export const metadata = {
  title: "PropertyPulse | Find The Perfect Rental",
  description: "Find your dream rental property",
  keywords: "rental, find rental, find properties"
}

const MainLayout = ({children}) => {
  return (
    <html lang="ru">
        <body>
            <Navbar/>
            <main className="h-screen">
                {children}
            </main>
        </body>
    </html>
    
  )
}

export default MainLayout
