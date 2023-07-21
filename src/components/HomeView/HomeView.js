import './HomeView.css'
import IntroText from './IntroText/IntroText';

const HomeView = () => {
  return (
    <div className='home-view'>
      <IntroText />
      <div className='categories'>
        <section className='category'>Category A</section>
        <section className='category'>Category A</section>
        <section className='category'>Category A</section>
        <section className='category'>Category A</section>
        <section className='category'>Category A</section>
        <section className='category'>Category A</section>
      </div>
    </div>
  )
}

export default HomeView;