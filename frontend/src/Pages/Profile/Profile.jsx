import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSignIn } from "../../Store/UserSlice"
import Form from "../../Components/Form/Form"
import Card from "../../Components/Account/Card/Card";
import balance from "../../Data/balance.json";
import "./profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.USER.userData);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const getUserData = async (token) => {
      try {
        await fetch("http://localhost:3001/api/v1/user/profile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        })
          .then((res) => {
            return res.json();
          })
          .then((userStatus) => {
            dispatch(userSignIn(userStatus.body));
          });
      } catch (error) {
        console.log(error);
      }
    };
    if (!(sessionStorage.getItem("token") || localStorage.getItem("token"))) {
      navigate("/");
    } else {
      sessionStorage.getItem("token")
        ? getUserData(sessionStorage.getItem("token"))
        : getUserData(localStorage.getItem("token"));
    }
  }, [navigate, dispatch]
  );

  return (
    <div className="profileContainer">
      <div className="profileTitle">
        {!modal && (
          <>
            <h2>
              Welcome back
              <br />
              {userData.firstName} {userData.lastName}
            </h2>
            <button onClick={(e) => setModal(true)} className="profileEditButton">
              Edit Name
            </button>
          </>
        )}
        {modal && (
          <Form setModal={setModal} />
        )}
      </div>
      <div className="cardContainer">
        {balance.map((data) => (
          <Card
            key={data.id}
            title={data.title}
            amount={data.amount}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
