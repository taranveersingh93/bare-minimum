import whiteCircleLogo from '.././images/whiteCircleLogo.png'
import './App.css'
const App = () => {
  return (
    <>
      <div className="logo">
        <div className='image-container'>
          <div className='logo-image-halo'>
            <img src={whiteCircleLogo}></img>
          </div>
        </div>
        <h1>Bare Minimum</h1>
      </div>
      <div className='intro-text-container'>
        <p className='intro-text'>
          "Featherweight tasks for you to embrace the balance between self-care and productivity"
        </p>
      </div>
    </>
  )
}

export default App;