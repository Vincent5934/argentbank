import "./banner.css"
import bannerDataItem from "../../Data/bannerDataItem.json"
import Card from "../Card/Card";
import iconChat from "../../Assets/icon-chat.webp"
import iconMoney from "../../Assets/icon-money.webp"
import iconSecurity from "../../Assets/icon-security.webp"

const Banner = () => {

    const bannerImage = {
        "icon-chat.webp": iconChat,
        "icon-money.webp": iconMoney,
        "icon-security.webp": iconSecurity
    }

    return ( 
        <div className="banner">
            {bannerDataItem.map((data => (
                <Card 
                key={data.id}
                image={bannerImage[data.image]}
                title={data.title}
                description={data.description}
                /> 
            )))}
                       


        </div>

     );
}
 
export default Banner;