import whiteCircleLogo from '../../.././images/whiteCircleLogo.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo">
      <div className='image-container'>
        <div className='logo-image-halo'>
          <img src={whiteCircleLogo} alt="Bare Minimum Logo"></img>
        </div>
      </div>
      <div className='logo-text'> <span className='bare'>Bare</span> <span className='Minimum'>Minimum</span></div>
    </div>)
}

export default Logo;