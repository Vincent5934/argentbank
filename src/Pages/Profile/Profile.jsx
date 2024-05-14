import Card from "../../Components/Account/Card/Card";
import "./profile.css"
import balance from "../../Data/balance.json"
import { useState } from "react";


const Profile = () => {
    const [modal, setModal] = useState(false);
    const [userName, setName] = useState('');
    const test = "test"

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }


    return (
        <>
            <div className="profileTitle">
                <h1>Welcome Back</h1>
            </div>
            <div className="profileContainer">
                <button onClick={toggleModal} className="profileEditButton">Edit Name</button>
                {modal && (
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                        <div className="modalContent">
                            <h2>Edit User</h2>
                            <label htmlFor="username">User name :</label>
                            <input
                                value={userName}
                                onChange={(e) => setName(e.target.value)}
                                type="text" id="username"

                            />
                            <label htmlFor="firstname">First name :</label>
                            <input
                                value={test}
                                type="text" id="firstname"
                            />
                            <label htmlFor="lastname">Last name :</label>
                            <input
                                value={test}
                                type="text" id="lastname"
                            />

                            <button className="closeModal" onClick={toggleModal}>
                                CLOSE
                            </button>
                        </div>
                    </div>
                )}
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




