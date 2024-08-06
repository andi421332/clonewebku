import mockupImage from '../../imageGroup/sec1/mock-up-web2.png';
import cont2_01 from '../../imageGroup/sec2/CETAK-1024x640.jpg';
import cont2_02 from '../../imageGroup/sec2/IMAGE-filter-1024x640.jpg';
import cont2_03 from '../../imageGroup/sec2/WEB-1024x640.jpg';

import cont3_01 from '../../imageGroup/sec3/01.png';
import cont3_02 from '../../imageGroup/sec3/02.png';
import cont3_03 from '../../imageGroup/sec3/03.png';

import cont4_01 from '../../imageGroup/sec4/google.png';
import cont4_02 from '../../imageGroup/sec4/instagram.png';
import cont4_03 from '../../imageGroup/sec4/whatsapp.png';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch, Link } from 'react-router-dom';




import '../../cssGroup/konten1.css'
import Navigasi from './navigasi';
import FilterInsta from '../../pages/FilterInsta';
function Konten (){
    

     // State untuk menyimpan status apakah elemen harus disembunyikan
     
     const [isHidden, setIsHidden] = useState(false);
     const [pathData, setPathData] = useState("M553 459C263.4 445.8 64 423.333 0.5 412V0H1444V375C1258.67 409.5 842.6 472.2 553 459Z");
     const [viewUbah, setViewUbah] = useState("0 0 1444 461");
     const [ubahWidth, setUbahWidt] = useState("1444");
     const [ubahHeight, setUbahHeight] = useState("1400");
     

     // Fungsi untuk memeriksa ukuran viewport dan memperbarui state
     const handleViewportChange = (event) => {
         setIsHidden(event.matches); // Set isHidden true jika viewport > 300px
         console.log(setIsHidden(event.matches));
     };

     useEffect(() => {
        const idBox = document.querySelectorAll('.widget-visible');
        const idBox2 = document.querySelectorAll('.widget-invisible')
        if(isHidden == true){
            idBox.forEach(function(item) {
                item.classList.remove('widget-visible');
                item.classList.add('widget-invisible');
              });
        } else {
            idBox2.forEach(function(item) {
                item.classList.remove('widget-invisible');
                item.classList.add('widget-visible');
              });
        }
        
     }, [isHidden]);

     useEffect(() => {
        // Mengubah pathData berdasarkan nilai isHidden
        setPathData(isHidden 
            ? "M442 1163C278 1158.6 79 1154.33 0 1148V0.5H840V1089C779.833 1110.33 606 1167.4 442 1163Z"
            : "M553 459C263.4 445.8 64 423.333 0.5 412V0H1444V375C1258.67 409.5 842.6 472.2 553 459Z"
        );
    }, [isHidden]);

    useEffect(() => {
        // Mengubah pathData berdasarkan nilai isHidden
        setViewUbah(isHidden 
             ? "0 0 840 1400"
             : "0 0 1444 660"
         );

        // setViewUbah(isHidden2 
        //     ? "0 0 1444 461"
        //     : "0 0 1444 660"
        // );

        setUbahWidt(isHidden 
            ? '840'
            : '1444'
        );
        setUbahHeight(isHidden 
            ? '1400'
            : 'auto'
        );
    }, [isHidden]);

 
     useEffect(() => {
         // Membuat media query untuk lebar viewport lebih dari 1000px
         const mediaQuery = window.matchMedia('(max-width: 800px)');
 
         // Menambahkan listener untuk mendeteksi perubahan ukuran viewport
         mediaQuery.addEventListener('change', handleViewportChange);
 
         // Set state saat komponen pertama kali dimuat
         handleViewportChange(mediaQuery);
 
         // Cleanup listener saat komponen unmount
        
     }, []);

     useEffect(() => {
        const mediaQuery2 = window.matchMedia('(max-width: 1000px)');
        mediaQuery2.addEventListener('change', handleViewportChange);
        handleViewportChange(mediaQuery2);
     }, [])
     useEffect(() => {
        document.getElementById('sendKonten').addEventListener('click', function() {
            // Ambil elemen dengan ID 'product'
            const productElement = document.getElementById('ourProduct');
            
            // Hitung posisi relatif elemen terhadap viewport
            const elementPosition = productElement.getBoundingClientRect().top;
            
            // Hitung posisi scroll yang diinginkan dengan offset tambahan
            const offsetPosition = elementPosition + window.pageYOffset - 90;
          
            // Scroll ke posisi yang dihitung
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth' // Efek scroll yang halus
            });
          });
     }, []);


     

    return (
        
        <div id="konten-wrapperAll">
            <Navigasi />
            {/* konten 1 awal */}
            <section>
                <div className="konten1wrapper">
                    <div className='textBesar'>
                        <h1>WEBKU</h1>
                    </div>
                    <div className="konten1">
                        <div>
                            <h1>UNDANGAN DIGITAL YOGYAKARTA</h1>
                        </div>
                        <div className='konten1img'>
                            <img src={mockupImage} alt="UNDANGAN DIGITAL YOGYAKARTA"/>
                        </div>
                        <div>
                            <h2>LENGKAPI MOMEN BAHAGIA ANDA DENGAN PRODUK KAMI</h2>
                        </div>
                        <div className='boxButton'>
                            <button id='sendKonten'>Let's Go !</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* konten 1 end */}

            {/* konten 2 awal */}
            <section className="konten2">
                <div className='ourpdc'>
                    <h1 id='ourProduct'>OUR PRODUCT</h1>
                </div>
                <div className='koten2Wrapper'>
                    <div className='card'>
                        <div className='k2imgw'>
                            <img src={cont2_01}></img>
                        </div>
                        <div className='penuhin'>
                            <h2>WEBSITE INVITATION</h2>
                            <p>Cara baru mengirim undangan pernikahan Anda. Dengan undangan website, Anda bisa mengirim undangan ke semua orang sambil <b>rebahan</b></p>
                            
                            <Link to="/home" className="tmblKatalog" target="_blank">
                                <button className='tmblKatalog'>Lihat katalog</button>
                            </Link>
                        </div>
                        
                    </div>

                    <div className='card'>
                        <div className='k2imgw'>
                            <img src={cont2_02}></img>
                        </div>
                        <div className='penuhin'>
                            <h2>FILTER INSTAGRAM</h2>
                            <p>Bagikan momen spesial Anda di social media dengan menggunakan filter ekslusive untuk pernikahan Anda.</p>
                            <Link to="/FilterInsta" className="tmblKatalog" target="_blank">
                                <button className='tmblKatalog'>Lihat katalog</button>
                            </Link>
                        </div>
                        
                    </div>

                    <div className='card'>
                        <div className='k2imgw'>
                            <img src={cont2_03}></img>
                        </div>
                        <div className='penuhin'>
                            <h2>INVITATION CARD</h2>
                            <p>Undangan menjadi sesuatu yang harus Ada di acara pernikahan Anda. Kami menyedikan kartu undangan dengan design yang menarik dan kekinian !</p>
                            <a href="https://www.example.com" className="tmblKatalog" target="_blank">
                                <button className='tmblKatalog'>Lihat katalog</button>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* konten 2 end */}

            {/* konten 3 awal */}
            <section className="konten3">
                <div className='konten3wrapper'>
                    <div className='svgwrap'>
                        <svg className='svgkonten' width={ubahWidth} height={ubahHeight} viewBox={viewUbah} fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="myPath" d={pathData} fill="#D7B4A0"/>
                                <foreignObject x="0" y="0" width="100%" height="1400" >
                                    <div className='kontener'>
                                        <div className='titlekon4'>
                                            <h1>KENAPA HARUS MEMILIH KAMI?</h1>
                                        </div>
                                        <div className='knwrap'>
                                            <div className='knt3card'>
                                                <img src={cont3_01} alt='icon'></img>
                                                <p>Design Beragam</p>
                                            </div>
                            
                                            <div className='knt3card'>
                                                <img src={cont3_03} alt='icon'></img>
                                                <p>Harga Bersahabat</p>
                                            </div>
                                    
                                    
                                            <div className='knt3card'>
                                                <img src={cont3_02} alt='icon'></img>
                                                <p>Respon Cepat</p>
                                            </div>
                                        </div>

                                        
                                    </div>
                                </foreignObject>
                        </svg>                   
                    </div>                     
                    
                </div>

            </section>
            {/* konten 3 end */}
            <section className="konten4">
                <div>
                    <div className='konter4isi'>
                        <ul>
                            <li className='listK4'>
                                <img src={cont4_01}></img>
                                <p>andi421332@gmail.com</p>
                            </li>
                            <li className='listK4'>
                                <img src={cont4_02}></img>
                                <p>andi priyono</p>
                            </li>
                            <li className='listK4'>
                                <img src={cont4_03}></img>
                                <p>0882 1070 6846</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <footer>
                <h3>UNDANGAN DIGITAL</h3>
            </footer>
            <script src="../ubahsvg.js"></script>
            
        </div>
         
    )
    
}

export default Konten;