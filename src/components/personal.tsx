import './personal.css'; // Import CSS file for Personal component styling
import profileImage from '../assets/image.jpg'; // Import your profile image

const personal = () => {
    return (
        <div className="personal">
        <div className="personal-info">
          <div className="name">AKSHAYA KS</div>
          <img src={profileImage} alt="Profile" className="profile-image" />        
        </div>
      </div>
    );
  }

export default personal;