
import React from 'react';
import { Link } from 'react-router-dom';
import './footnote.css';
import { RiFacebookBoxLine, RiInstagramLine} from 'react-icons/ri';
import { DiJavascript } from 'react-icons/di';


function footnote() {
  return (
    <div className='footnote'>
      <div className='global'>
        <div className='global_detail'>
         
            <Link to='/' className='logo'> <DiJavascript className='NB_icon' /> JavaScript for girls </Link>
          
          <div className='iman'> Made by Iman Sunje © 2021</div>
          
          <div className='ikone'>
            <Link className='ikone_velicina' to={'//https://www.facebook.com/srednja.morrison'} target='_blank' >
              <RiFacebookBoxLine />
            </Link>

            <Link className='ikone_velicina'  to='//https://www.instagram.com/imanoniii/' target='_blank' >
              <RiInstagramLine/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footnote;


