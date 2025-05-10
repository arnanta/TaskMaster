import style from './App.module.css';
import Navbar from '@/components/Navbar';

function App() {
  return (
    <div className={style.container}>
      <Navbar />
      <div className={style.top}>Personal tasks</div>
      <div className={style.bottom}>Work Related</div>
    </div>
  );
}

export default App;
