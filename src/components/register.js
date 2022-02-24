import React, {useState} from 'react';
import './styles/login.css';


const Register = () => {
  const [active, setActive] = useState({ next: true, register: false });
  const [subjects,setSubjects] = useState([])
  return <div className='loginContainer'>
    {active.next && <>
    <input type='text' placeholder='First name' className='email' />
    <input type='text' placeholder='Last Name' className='email'/>
    <input type='text' placeholder='Email' className='email' />
    <input type='password' placeholder='Password' className='email'/>
    <button className='btnSecondary' onClick={() => setActive({next:false,register:true})}><div>Next</div></button></>}
    {active.register && <>
      <select name="subjects" className='email' onChange={(e) => {
        if (!subjects.includes(e.target.value)) {
          setSubjects([...subjects, e.target.value])
        }
      }} >
    <option>Math</option>
    <option>Physics</option>
    <option>Science</option>
      </select>
      {subjects.map((item, index) => {
        return <div>
          <span>{item}</span>
          <span onClick={() => {
            console.log('click');
            setSubjects(() => subjects.splice(index,1))
          }}> x </span>
        </div>
      })}
      <button className='btnPrimary' onClick={() => setActive({ next: true, register: false })}><div>Back</div></button>
      <button className='btnSecondary'><div>Register</div></button>
      </>
    }
  </div>
}

export default Register