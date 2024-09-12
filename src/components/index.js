import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ErrorFallback } from './errorFallback';
import { Header } from './header';
import { Home } from './home';
import { New } from './new';
import { Upload } from './upload';
import { View } from './view';

export const App = () => (
  <div className='wrapper'>
    <Header />

    <div className="main-div">
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<New />} path="/new" />
        <Route element={<Upload />} path="/upload" />
        <Route element={<Upload />} path="/upload/:patientId" />
        <Route element={<View />} path="/view" />
        <Route element={<View />} path="/view/:patientId" />
        <Route element={<ErrorFallback />} path="/*" />
      </Routes>
    </div>
  </div>
)