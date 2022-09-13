import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppHeader from './AppHeader';
import { paths } from '../utils';
import About from '../containers/About';
import Home from '../containers/Home';
import Services from '../containers/Services';
import Contact from '../containers/Contact';
import AppFooter from './AppFooter';
import { useState } from 'react';

const MainNavigation = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <AppHeader isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen} />
        <main>
          <Routes>
            <Route exact path={paths.HOME} element={<Home />} />
            <Route path={paths.ABOUT} element={<About />} />
            <Route path={paths.SERVICES} element={<Services />} />
            <Route path={paths.CONTACT} element={<Contact />} />
          </Routes>
        </main>
        <AppFooter />
      </BrowserRouter>
    </div>
  );
};

export default MainNavigation;
