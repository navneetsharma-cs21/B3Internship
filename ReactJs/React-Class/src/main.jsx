import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ClickEvent from './ClickEvent.jsx'
// import './index.css'
import CurlyBraces from './CurlyBraces.jsx'
import State from './State.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>   
    <ClickEvent />
    <CurlyBraces/>
    <State/>
    
  </StrictMode>,
)
