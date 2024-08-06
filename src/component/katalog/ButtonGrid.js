import ButtonKatalog from './ButtonKatalog';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import React from 'react';
import data from '../katalog/dataGambar.json' ;
import data2 from '../katalog/dataGambar2.json';
import data3 from '../katalog/dataGambar3.json';
import data4 from '../katalog/dataGambar4.json';
import data5 from '../katalog/dataGambar5.json';
import CardHp from '../katalog/CardHp';

function ButtonGrid() {
  const [isiText, setIsiText] = useState("SPECIAL DESIGN");
  const [gantiIsi, setGantiIsi] = useState(data);


  function handleButtonClick(text){
    setIsiText(text.toUpperCase());
    if(text == "3D Motion"){
      setGantiIsi(data2)
    } else if(text == "Special Design"){
      setGantiIsi(data)
    } else if(text == "Floral & Simple"){
      setGantiIsi(data3)
    } else if(text == "Non Wedding"){
      setGantiIsi(data4)
    } else if(text == "Clasic & Etnik"){
      setGantiIsi(data5)
  }
}


  return (
    <div>
      <div>
    <Container>
      <Row>
        <Col>
          <ButtonKatalog text="Special Design" onClick={handleButtonClick}/> {/* Kirimkan teks melalui props */}
        </Col>
      </Row>
      <Row>
        <Col>
          <ButtonKatalog text="3D Motion" onClick={handleButtonClick}/> {/* Kirimkan teks melalui props */}
        </Col>
      </Row>
      <Row>
        <Col>
          <ButtonKatalog text="Floral & Simple" onClick={handleButtonClick}/> {/* Kirimkan teks melalui props */}
        </Col>
      </Row>
      <Row>
        <Col>
          <ButtonKatalog text="Clasic & Etnik" onClick={handleButtonClick}/> {/* Kirimkan teks melalui props */}
        </Col>
      </Row>
      <Row>
        <Col>
          <ButtonKatalog text="Non Wedding" onClick={handleButtonClick}/> {/* Kirimkan teks melalui props */}
        </Col>
      </Row>
    </Container>
      </div>
      <div className='BigButtonWrapper'>
          <div className='BigButton'>
            <p>{isiText}</p>
          </div> 
      </div>

      <div className='bungkusmenucontainer'>
      <div className="menu-container">
      {  
      gantiIsi.menu.map((item, index) => (
        <div key={index} className="menu-item">
          <div className='pembungkusCardHP'>
            <div className='isipembungkus'>
              <CardHp alamat = {item.alamat}/>
            </div>
          </div>
        </div>
      ))
      }
    </div>

    
    </div>

    </div>
  );
}

export default ButtonGrid;
