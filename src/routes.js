import DefaultPage from 'components/DefaultPage';
import TopBar from 'components/TopBar';
import Footer from 'components/Footer';
import About from 'pages/About';
import Home from 'pages/Home';
import Menu from 'pages/Menu';
import Dish from 'pages/Dish';
import NotFound from 'pages/NotFound';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="about" element={<About />} />
            <Route path="dishes/:id" element={<Dish />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
