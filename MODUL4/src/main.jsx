import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Wine from './Wine'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Wine title="alessa"  description="This  desc" rating="3.5"/>
    <Wine title="fernando"  description=" Those desc" rating="5.5"/>
  </StrictMode>,
)