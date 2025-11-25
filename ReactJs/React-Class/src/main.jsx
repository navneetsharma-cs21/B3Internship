import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ClickEvent from './ClickEvent.jsx'
// import './index.css'
import CurlyBraces from './CurlyBraces.jsx'
import State from './State.jsx'
import ImportExportC,{Login,Setting} from './ImportExportC.jsx' //default import with named import

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <ImportExportC />  
    <Setting />
    <Login />
    <ClickEvent />
    <CurlyBraces/>
    <State/>
    
  </StrictMode>,
)
