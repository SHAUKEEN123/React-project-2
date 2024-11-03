import { useState } from 'react'
import './App.css'
import Card from './conponents/Card'

function App() {

  return (
    <>
    <h1 className='bg-slate-950 p-4 rounded-xl text-white mb-4'>Tailwind</h1>
    
<Card userName="Shaukeen khan" 
description="Hi, I'm Shaukeen Khan, a final-year B.Tech Computer Science Engineering student with a passion for web development, particularly with React and TailwindCSS. 
I love building user-friendly applications and am always exploring new technologies to improve my skills."
ProfileLink="https://www.linkedin.com/in/shaukeen-khan-9a7071260/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bcfq%2Ff40CQpSQcsN9nKiAcw%3D%3D"
btntext='Read more'
ImageSrc="/image.jpg"
/>
<Card userName="Samar khan"
description="Hello, I'm Samar Khan, and I'm interested in backend development and database management. 
I enjoy problem-solving and implementing efficient solutions for complex projects."
ProfileLink="https://www.linkedin.com/in/samar-khan"
btntext='Read more'
ImageSrc="/image2.jpg"
/>
    </>
  )
}

export default App
