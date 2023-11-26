import React from 'react'
import ReactDOM from 'react-dom/client'
import {CashFlow} from './pages/CashFlow/index';
import './styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CashFlow />
  </React.StrictMode>,
)
