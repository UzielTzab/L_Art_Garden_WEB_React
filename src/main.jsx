import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Contact } from './pages/Contact';
import { CreateAccountClient } from './pages/CreateAccountClient';
import { CreateAccountSeller } from './pages/CreateAccountSeller';
import { AccountSelection } from './pages/AccountSelection';
import { CatalogueFlowerShops } from './pages/CatalogueFlowerShops';
import { MyAccount } from './pages/MyAccount';

const router = createBrowserRouter([
  {
    path: '/Home',
    element: <Home/>,
  },
  {
    path: '/Cart',
    element: <Cart/>,

  },
  {
    path: '/Contact',
    element: <Contact/>
  },
  {
    path: '/CreateAccountClient',
    element: <CreateAccountClient/>
  },
  {
    path: '/CreateAccountSeller',
    element: <CreateAccountSeller/>
  },
  {
    path: '/AccountSelection',
    element: <AccountSelection/>
  },
  {
    path: '/CatalogueFlowerShops',
    element: <CatalogueFlowerShops/>
  },
  {
  path: '/MyAccount',
  element: <MyAccount/>
  },

]);

const root = ReactDOM.createRoot(document.getElementById
('root'))
root.render( 
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
