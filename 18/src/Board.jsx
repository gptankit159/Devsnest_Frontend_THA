import './App.css';
import Tile from './Tile';
const Board = () =>{
    var arr = [1,2,3,4,5,6,7,8];
    return(
        <div className="board">
            <div className="iboard">
                {
                arr.map(item => item%2!==0 ? <Tile row="fis" />: <Tile row="sec" />)
                }
            </div>
        </div>
    );
}

export default Board;