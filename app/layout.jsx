import React from 'react'
import '@/assets/styles/global.css'

export const metadata = {
  title: "PropertyPulse | Find The Perfect Rental",
  description: "Find your dream rental property",
  keywords: "rental, find rental, find properties"
}

const MainLayout = ({children}) => {
  return (
    <html lang="ru">
        <body>
            <div className="bg-green-600">
                {children}
            </div>
        </body>
    </html>
    
  )
}

export default MainLayout
