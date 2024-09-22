import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ErrorFallback } from './errorFallback';
import { Header } from './header';
import { Home } from './home';
import { New } from './new';
import { Record } from './record';
import { Upload } from './upload';
import { View } from './view';

export const App = () => (
  <div className='wrapper'>
    <Header />

    <div className="main-div">
      <Routes>
        <Route element={<Home />} path="/cop-proj/" />
        <Route element={<New />} path="/cop-proj/new" />
        <Route element={<Upload />} path="/cop-proj/upload" />
        <Route element={<Upload />} path="/cop-proj/upload/:patientId" />
        <Route element={<View />} path="/cop-proj/view" />
        <Route element={<View />} path="/cop-proj/view/:patientId" />
        <Route element={<Record />} path="/cop-proj/view/:patientId/:recordId" />
        <Route element={<ErrorFallback />} path="/cop-proj/*" />
      </Routes>
    </div>
  </div>
)