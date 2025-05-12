import style from './App.module.css';
import Navbar from '@/components/Navbar';
import PersonalTasks from '../components/PersonalTasks/PersonalTask';
import WorkTasks from '../components/WorkTasks/WorkTask';

function App() {
  return (
    <div className={style.container}>
      <Navbar />
      <div className={style.top}>
        <PersonalTasks />
      </div>
      <div className={style.bottom}>
        <WorkTasks />
      </div>
    </div>
  );
}

export default App;
