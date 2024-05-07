import "./card.css";

const Card = ({ title, amount, description }) => {
  return (
    <div className="accountContainer">
      <div>
        <p className="accounText">{title}</p>
        <p className="accountAmount">{amount}</p>
        <p className="accounText">{description}</p>
      </div>
      <div>
        <button className="accountButton">View Transaction</button>
      </div>
    </div>
  );
};
export default Card;
