import CardInsta from "../component/FilterInsta/CardInsta";
import Navigasi from "../component/indexComponent/navigasi";

function FilterInsta() {
    return (
        <div className='KatalogWrapper'>
          <Navigasi />
          <div className='upImage'>
            <img src="./imageGroup/filter/IMAGE-filter.jpg" alt='dag'></img>
          </div>
          <div className='headText'>
            <h2>KATALOG UNDANGAN WEBSITE</h2>
          </div>
          <div className='bungkusHR'>
            <hr></hr>
          </div>

          <div className="centeringContenFilterInsta">
          <div className="menu-container">
            <div className='isipembungkus2'>
                <CardInsta numberImg="1"/>
            </div>
            <div className='isipembungkus2'>
                <CardInsta numberImg="2"/>
                </div>
            <div className='isipembungkus2'>
                <CardInsta numberImg="3"/>
                </div>
            <div className='isipembungkus2'>
                <CardInsta numberImg="4"/>
                </div>
            <div className='isipembungkus2'>
                <CardInsta numberImg="5"/>
                </div>
            <div className='isipembungkus2'>
                <CardInsta numberImg="6"/>
                </div>
            <div className='isipembungkus2'>
                <CardInsta numberImg="7"/>
                </div>
            <div className='isipembungkus2'>
                <CardInsta numberImg="8"/>
                </div>
            <div className='isipembungkus2'>
                <CardInsta numberImg="9"/>
                </div>
            <div className='isipembungkus2'>
                <CardInsta numberImg="10"/>
                </div>
            </div>
        </div>
        
        <div className="FilterFooter">
            <div className="jufulfilterfooter">
                <h1>PROMO FILTER HANYA 50K</h1>
            </div>
            <div className="cardFooterFilterWrapper">
                <div className="cardFooterFilter">
                    <img src="./imageGroup/filter/star.png"></img>
                    <p>Design Sesuai Katalog</p>
                </div>

                <div className="cardFooterFilter">
                    <img src="./imageGroup/filter/hashtag.png"></img>
                    <p>Free Tambah Hashtag</p>
                </div>

                <div className="cardFooterFilter">
                    <img src="./imageGroup/filter/bulat.png"></img>
                    <p>Free Revisi</p>
                </div>

                <div className="cardFooterFilter">
                    <img src="./imageGroup/filter/refisi.png"></img>
                    <p>Pengerjaan 2-3 Hari</p>
                </div>
                
            </div>
        </div>

          

        </div>
      )
    }

export default FilterInsta;