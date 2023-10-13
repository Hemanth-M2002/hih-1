import React , { useState } from 'react';
import '../component/home1.css';
import Blacklogo from '../images/Blacklogo.png';
import doctor from '../images/doctor.png';
import user from '../images/user.png';
import android from '../images/Android.png';
import doc from '../images/doc.jpg'
function button()
{
  const backgroundColor = 'lightblue';
  const text = 'black';
  const font = '12px';

  const divstyle={
    backgroundColor,color: text,font
  };
}
const Home1 = () => {
  const [docVisible, setDocVisible] = useState(true);
  const [userVisible, setUserVisible] = useState(true);

  const toggleDocVisibility = () => {
    setDocVisible(!docVisible);
  };

  const toggleUserVisibility = () => {
    setUserVisible(!userVisible);
  };
  return (
    <div>
      <div className='background'>
        <img src={doc} alt="background image" />
      </div>
      <div className='logo'>
        <img src={Blacklogo} alt='logo'></img>
      </div>
      <div className='doc'>
       
      </div>
      {/* <div className='home-logo'>
        <img src={android} style={{width:'100px'}} alt='home'></img>
      </div> */}
      <div className='signup'>
      <div className='user'>
      <img src={doctor} height='100px' alt='doc'></img>
      <button style={{backgroundColor : '#007bff',color: 'black', fontSize: '12px',padding: '10px 20px',borderRadius:'10px'}} onClick={toggleDocVisibility}>Doctor</button>
      </div>
      <div className='guardian'>
      <img src={user} height='100px' alt='user'></img>
      <button style={{backgroundColor : '#007bff',color: 'black', fontSize: '12px',padding: '10px 20px',borderRadius:'10px'}} onClick={toggleUserVisibility}>Guardian</button>
      </div>
      {/* </div> */}
      {/* <div className='doc-button'> */}
      {/* <button onClick={toggleDocVisibility}>Doctor</button> */}
      </div>
      <div className='user-button'>
      </div>
      </div>
  );
};

export default Home1;
