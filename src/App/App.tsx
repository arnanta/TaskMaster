import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import style from './App.module.css';
import Navbar from '@/components/Navbar';
import PersonalTasks from '@/components/PersonalTasks/PersonalTask';
import WorkTasks from '@/components/WorkTasks/WorkTask';
import Login from '@/components/Login/Login';
import PrivateRoute from '@/components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <>
                <Navbar />
                <div className={style.container}>
                  <div className={style.top}>
                    <PersonalTasks />
                  </div>
                  <div className={style.bottom}>
                    <WorkTasks />
                  </div>
                </div>
              </>
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
