const Square =({id, square, squares, setSquares, go, setGo, winningMessage}) => {

    const handleClick = (e) =>{
    let taken = e.target.firstChild.classList.contains('circle')||
                e.target.firstChild.classList.contains('cross')
    if(!taken){
        if(go==="circle"){
            e.target.firstChild.classList.add('circle')
            handleSqaureChange('circle')
            setGo('cross')
        }
        if(go==="cross"){
            e.target.firstChild.classList.add('cross')
            handleSqaureChange('cross')
            setGo('circle')
        }
    }
    }

    const handleSqaureChange = (className) => {
        const newSquare = squares.map((square, index)=>{
            if(index===id){
                return(className)
            }
            else{
                return square
            }
        })

        setSquares(newSquare)
    }

    return(
    <div className="square" id={id} onClick={!winningMessage && handleClick}>
        <div className={square}></div>
    </div>    
    
    );
};

export default Square;