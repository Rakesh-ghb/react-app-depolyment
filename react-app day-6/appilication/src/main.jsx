import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Component1 from './Component1.jsx'
import Component2 from './Component2.jsx'
import Content1 from './Content1.jsx'
import { Content2, Content3 } from "./Content2.jsx";
import BirdsList from './Birds.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Component1/>
    <Component2 />
    <Content1/>
    <Content2/>
    <Content3/>
    <BirdsList/>
  </StrictMode>,
)

