import React from 'react';
import home from '../imageGroup/katalog/home.jpg';
import '../cssGroup/katalog.css'
import ButtonGrid from '../component/katalog/ButtonGrid';
import Navigasi from '../component/indexComponent/navigasi'
import { map } from 'jquery';


import { useState } from 'react';
import BawahKet from '../component/katalog/BawahKet';

const Katalog = () => {

  return (
    <div className='KatalogWrapper'>
      <Navigasi />
      <div className='upImage'>
        <img src={home} alt='dag'></img>
      </div>
      <div className='headText'>
        <h2>KATALOG UNDANGAN WEBSITE</h2>
        <p>Pilih design sesuai kategori dengan menekan Tombol di bawah</p>
      </div>
      <div className='grid-wrapper'>     
        <ButtonGrid/>
    </div>

    <div>
      <div className='bungkusHR'>
    <hr></hr>

      </div>
      <div className='textBawah'>
        <p>
          <strong>Penting !!! </strong>
          Pastikan tidak menggunakan DARK MODE pada browser yang digunakan, untuk tampilan terbaik disarankan menggunakan Google Chrome
        </p>
      </div>
    </div>
    {/* <div>
    <BawahKet />
    </div> */}

    <div className='KotakBesar'>
      <div className="KbHeader">
          <h1>PRICELIST</h1>
          <p>Daftar Harga Undangan Website</p>
      </div>
      <div>
        <BawahKet />
      </div>
    </div>

    
  
    </div>
  )
};

export default Katalog;