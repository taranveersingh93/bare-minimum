import './PageNotFound.css'
import bear from '../../images/pagenotfoundbear.svg'

const PageNotFound = () => {
  return (
    <img src={bear} className="error-bear" alt="404 Error Page Not Found"/>
  )
}

export default PageNotFound