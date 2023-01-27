import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes, useParams } from 'react-router-dom';

import { MainPage } from './pages/main';
import { BookPage } from './pages/book';
import { ContractPage } from './pages/contract';
import { TermsPage } from './pages/terms';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/all' element={<MainPage />} />
        <Route path='/books' element={<MainPage />} />
        <Route path='/book/:id' element={<BookPage />} />
        <Route path='/contract' element={<ContractPage />} />
        <Route path='/terms' element={<TermsPage />} />
        <Route path='*' element={<MainPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
