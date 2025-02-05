
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LooseContextProvider } from './Context/LooseContext.tsx'

createRoot(document.getElementById('root')!).render(
    <LooseContextProvider>
        <App />
    </LooseContextProvider>

)
