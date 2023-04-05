import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from '../Containers/Layout';
import { Home } from '../Pages/Home';

import { Cultura } from '../Pages/Cultura/Cultura';
import { CineMunicipal } from '../Pages/Cultura/Cine';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Layout>                                                                                                                                     
    </BrowserRouter>
  );
};

export { App };
