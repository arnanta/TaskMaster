import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import style from './App.module.css';
import Navbar from '@/components/Navbar';
import Login from '@/components/Auth/Login/Login';
import PrivateRoute from '@/components/PrivateRoute';
import Tasks from '@/pages/Tasks';
import Home from '@/pages/Home';
import TasksPage from '@/pages/Tasks/TasksView';
import Dashboard from '@/pages/Dashboard/Dashboard';
import SignUp from '@/components/Auth/SignUp/SignUp';
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
                <Home />
              </>
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/my-tasks" element={<Tasks />} />
        <Route path="/my-tasks/active" element={<TasksPage />} />
        <Route path="/my-tasks/completed" element={<TasksPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
