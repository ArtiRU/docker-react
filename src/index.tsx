import React, { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './app';
import './assets/styles/global.scss';
import { LazyAbout } from '@/components/about/lazy.about';
import Contact from '@/components/contact/contact';

const domNode = document.querySelector('#root');

const root = createRoot(domNode);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/about"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyAbout />
            </Suspense>
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
