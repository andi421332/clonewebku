function CardHp ({alamat}){
    return (
        <div className='cardHPwrapper'>
            <div className="imgCH">
                <img src={alamat} alt=''></img>
            </div>
            <div className="btnCH">
                <button>
                    Preview
                </button>
            </div>

        </div> 
    )
}

export default CardHp;