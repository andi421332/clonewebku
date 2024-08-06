import '../../cssGroup/filterInsta.css'


function CardInsta ({numberImg}){
    return(
        <div className="filterCardWrapper">
            <div className="textFilterInsta">
                <h2>Filter {numberImg}</h2>
            </div>
            <div className="imgCardFilterInsta">
                <img src="./imageGroup/filter/conten.jpg"></img>
            </div>
        </div>

    );
}

export default CardInsta;