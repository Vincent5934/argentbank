import Card from "../../Components/Account/Card/Card";
import "./profile.css"
import balance from "../../Data/balance.json"
import { useSelector, useDispatch } from 'react-redux';
import { selectToken, selectUser, setUser } from "../../Store/UserSlice"
import { useState } from 'react';


const Profile = () => {
    const [modal, setModal] = useState(false);
    const [userName, setName] = useState('');
    const token = useSelector(selectToken);
    const user = useSelector(selectUser);
    const changeUsername = useDispatch();

    const usernameSubmit = async (e) => {
        e.preventDefault();

        const sendUserName = { userName };

        const request = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token.payload}`
            },
            body: JSON.stringify(sendUserName)
        });

        const result = await request.json();

        changeUsername(setUser(result));
    };

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        
       
            <div className="profileContainer">
            {token && (
                <div className="profileTitle">
                    <h1>Welcome Back <br/> {user.payload.body.firstName} {user.payload.body.lastName} </h1>
                </div>
                    )}
                <button onClick={toggleModal} className="profileEditButton">Edit Name</button>
                {modal && (
                   <>
                        <div onClick={toggleModal}></div>
                        <div className="modal">
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
                                value={user.payload.body.firstName}
                                type="text" id="firstname"
                            />
                            <label htmlFor="lastname">Last name :</label>
                            <input
                                value={user.payload.body.lastName}
                                type="text" id="lastname"
                            />
                            <div className="buttonContainer" >
                                <button className="profileEditButton" onClick={usernameSubmit}>Submit</button>
                                <button className="profileEditButton" onClick={toggleModal}>Close</button>
                            </div>
                            </div>
                        </div>
                  </>
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
        
    );
}
export default Profile;




