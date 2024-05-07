import Card from "../../Components/Account/Card/Card";
import "./profile.css"
import balance from "../../Data/balance.json"

const Profile = () => {
    return (
        <>
            <div className="profileTitle">
                <h1>Welcome Back</h1>
            </div>
            <div className="profileContainer">
                {balance.map((data => (
                    <Card
                        key={data.id}
                        title={data.title}
                        amount={data.amount}
                        description={data.description}
                    />
                )))}
            </div>
        </>
    );
}
export default Profile;
