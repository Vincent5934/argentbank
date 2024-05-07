import "./card.css"

const Card = ({ image, title, description }) => {
    return (
        <div className="card">
            <img src={image} alt="titre" className="cardImage" />
            <h3>{title}</h3>
            <p className="cardText">{description}</p>
        </div>

    );
}

export default Card;