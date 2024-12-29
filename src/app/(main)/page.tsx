import AboutUs from '@/components/AboutUs'
import CompanyLogos from '@/components/CompanyLogos'
import Hero from '@/components/Hero'
import NewsUpdate from '@/components/NewsUpdate'
import Resume from '@/components/Resume'
import React from 'react'

export default function App() {
  return (
    <main>
       <Hero/>
       <CompanyLogos/>
       <AboutUs/>
       <NewsUpdate/>
       <Resume/>
    </main>
  )
}
