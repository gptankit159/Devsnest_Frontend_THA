import './App.css';

const Card = ({food , cals}) => {
    return (
        <div className="card">
            <h1> {food} </h1>
            <h2>you have consumed {cals} cals today</h2>
        </div>
    );
}

export default Card;