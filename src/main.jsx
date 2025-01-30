import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';

import ProductProvider from './context/ProductProvider';
import FeatureProvider from './context/FeatureProvider';
import AuthProvider from './context/AuthContext';
import ReviewProvider from './context/ReviewProvider';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ProductProvider>
        <FeatureProvider>
          <ReviewProvider>
            <RouterProvider router={router}></RouterProvider>
          </ReviewProvider>
        </FeatureProvider>
      </ProductProvider>
    </AuthProvider>
  </StrictMode>
);
