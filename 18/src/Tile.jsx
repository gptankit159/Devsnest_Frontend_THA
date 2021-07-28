import './App.css';

const Tile = ({row}) =>{
    const arr = [1,2,3,4,5,6,7,8];
    if (row === 'fis')
    return(
        <div className="tiles">
            {
                // arr.map( item => item%2 !== 0 ? <div className="black"></div> : <div className="white"></div> )
                //Both are working fine
                arr.map( item =><div className= {item%2 !== 0 ? "black" : "white"}></div> 
                )
            }
        </div>
    );
    else
    return(
        <div className="tilesb">
            {
                arr.map( item => item%2 === 0 ? <div className="black"></div> : <div className="white"></div> 
                )
            }
        </div>
    );
}

export default Tile;