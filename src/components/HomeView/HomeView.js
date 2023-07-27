import './HomeView.css'
import IntroText from './IntroText/IntroText';
import { Link } from 'react-router-dom'

const HomeView = () => {
  return (
    <div className='home-view'>
      <IntroText />
      <h1 className='choose-category-title'>Choose a category from the options below</h1>
      <div className='categories'>
        <Link to='/exercise' ><section id='exercise' className='category'>Exercise</section></Link>
        <Link to='/cleaning' ><section id='cleaning' className='category'>Cleaning</section></Link>
        <Link to='/organization' ><section id='organization' className='category'>Organization</section></Link>
        <Link to='/work' ><section id='work' className='category'>Work</section></Link>
        <Link to='/mentalcare' ><section id='mentalCare' className='category'>Mental Care</section></Link>
        <Link to='/health' ><section id='health' className='category'>Health</section></Link>
      </div>
    </div>
  )
}

export default HomeView;