import './personal.css'; // Import CSS file for Personal component styling
import profileImage from '../assets/images/913122104014 AKSHAYA KS.jpg'; // Import your profile image

const personal = () => {
    return (
        <div className="personal">
        <div className="personal-info">
          <br></br>
            <div className="name">AKSHAYA KS</div>
            <br></br>
            <div className='content'>
            <h2>III-YR CSE STUDENT</h2>
            <h3>Enthusiastic and dedicated Computer Science and Engineering student with a strong foundation
                in full-stack development and problem-solving skills. Eager to apply technical knowledge in
                real-world projects and enhance coding proficiency. Passionate about developing innovative
                software solutions and continuously learning new technologies</h3>
            </div>
          </div>
          <div className='image'>
            <img src={profileImage} alt="Profile" className="profile-image" />        
          </div>
      </div>
    );
  }

export default personal;