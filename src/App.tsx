import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { HomePage } from './pages/HomePage';
import { themeState } from './state/atoms';

function ThemeBoot() {
  const theme = useRecoilValue(themeState);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeBoot />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
