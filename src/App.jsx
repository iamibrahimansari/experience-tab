import Profile from './components/Profile';
import About from './components/About';
import Navbar from './components/Navbar';
import emps from './components/emp_data';
import {useState} from 'react';
const App = () => {
  const [emp, setEmp] = useState(emps[0]);
  const handleOnClick = (id, setValue) =>{
    const currEmp = emps.find(emp => emp.id === id);
    setEmp(currEmp);
    setValue(id - 1);
  }
  return (
    <div className="App">
      <nav>
        <Navbar onClick={handleOnClick} emps={emps} />
      </nav>
      <main>
        <div className="profile">
          <Profile {...emp} />
        </div>
        <div className="about">
          <About about={emp.aboutEmp} />
        </div>
      </main>
    </div>
  )
}

export default App
