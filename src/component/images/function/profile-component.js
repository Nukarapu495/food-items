
import Studentdetails from "./data"

const ProfileComponent = () => {

   
    const{name,imgURL,imagedimension}=Studentdetails

    return (
        <div>
            <h3>Darling Prabhas</h3>
            <img
                src={imgURL}
                alt={`PERSON NAME ${name}`}
                width={imagedimension}
                heigth={imagedimension}

            />
        </div>
    )
}
export default ProfileComponent