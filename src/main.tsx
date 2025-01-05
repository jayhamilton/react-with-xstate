import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Card from './components/card/Card.tsx';
import Workflow from './components/worfklow/Workflow.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <Card/>
    <Workflow />
   
  </StrictMode>,
)
