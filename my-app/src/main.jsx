import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Outlet } from "react-router";
import './index.css'
import App from './App.jsx'
import { HeaderComponent } from './component/header/header.jsx';
import FooterComponent from './component/header/footer/footer.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <HeaderComponent/>  
    <Outlet/>
    <App />
    <FooterComponent/>
    </BrowserRouter> 
  </StrictMode>,
)
