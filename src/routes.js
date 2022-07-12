import DefaultPage from 'components/DefaultPage';
import TopBar from 'components/TopBar';
import Footer from 'components/Footer';
import About from 'pages/About';
import Home from 'pages/Home';
import Menu from 'pages/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from 'pages/NotFound';

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
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
