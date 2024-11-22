import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Wine from './Wine'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Wine title="THis is a title"  description="This is a desc" rating="3.5"/>
    <Wine title="title"  description=" desc" rating="5.5"/>
  </StrictMode>,
)