import './HomeView.css'
import IntroText from './IntroText/IntroText';
import { Link } from 'react-router-dom'
import ServerDown from '../ServerDown/ServerDown';

const HomeView = ({serverError}) => {

  const renderHomeView = () => {
    return (
      <div className='home-view'>
        <IntroText />
        <h3 className='choose-category-title'>Choose a category from the options below</h3>
        <div className='categories'>
          <Link to='/exercise' ><section id='exercise' className='category'>Exercise</section></Link>
          <Link to='/cleaning' ><section id='cleaning' className='category'>Cleaning</section></Link>
          <Link to='/organization' ><section id='organization' className='category'>Organization</section></Link>
          <Link to='/work' ><section id='work' className='category'>Work</section></Link>
          <Link to='/mentalCare' ><section id='mentalCare' className='category'>Mental Care</section></Link>
          <Link to='/health' ><section id='health' className='category'>Health</section></Link>
        </div>
      </div>
    )
  }
  return (
    <>
    {serverError ? <ServerDown /> : renderHomeView()}
    </>
  )
}

export default HomeView;