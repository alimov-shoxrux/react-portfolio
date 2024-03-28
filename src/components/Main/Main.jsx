import React from 'react'
import './Style.css'

import sun from './img/yellow-sun.png'
import moon from './img/moon.png'
import me from './img/me.png'
import github from './img/git-hub.png'
import skype from './img/skype.svg'
import inimg from './img/in.svg'
import youtube from './img/you-tube.svg'
import lightgithub from './img/light-github.svg'
import lightskype from './img/light-skype.svg'
import lightin from './img/light-in.svg'
import lightyoutube from './img/lightyoutube.svg'
import zagruzka from './img/zagruzka.svg'
import imgs from './img/imgs.svg'

function Main({ mode, setMode }) {
    console.log(mode);
    return (
        <div className={mode == true ? 'light__theme' : 'dark__theme'}>
            <body>
                <section className='sect'>
                    <div className="container">
                        <button onClick={() => setMode(!mode)} className='mode__btn'>
                            <img src={mode == true ? moon : sun} alt="" />
                        </button>

                        <div className="about__me">
                            <div className="about__img">
                                <img src={me} alt="" />
                            </div>

                            <div className="about__me__right">
                                <h1>Alimov Shoxruxmirzo</h1>
                                <h3>Frontend developer</h3>

                                <div className="about__me__websites">
                                    <a href="#"><img src={mode == true ? lightgithub : github} alt="" /></a>
                                    <a href="#"><img src={mode == true ? lightskype : skype} alt="" /></a>
                                    <a href="#"><img src={mode == true ? lightin : inimg} alt="" /></a>
                                    <a href="#"><img src={mode == true ? lightyoutube : youtube} alt="" /></a>
                                </div>
                            </div>
                        </div>

                        <div className="years">
                            <p>7 <br />Years of work <br /> experience</p>
                            <p>50 + <br /> Completed <br />
                                projects</p>
                            <p>20 + <br /> Satisfied <br />
                                customers</p>
                        </div>

                        <div className="btns">
                            <button className='download__btn'>Download CV
                                <img src={zagruzka} alt="" />
                            </button>
                            <button className='contact__btn'>Contact me</button>
                        </div>

                        <div className="skils">
                            <div className="portfolio"><p>Portfolio</p></div>
                            <div className="skils__div"><p>Skills</p></div>
                        </div>

                        <div className="imgs">
                            <img src={imgs} alt="" />
                        </div>

                        <p className='footer__text'>© Victor Alvarado. 2022 All rigths reserved</p>
                    </div>
                </section>
            </body>

        </div>
    )
}

export default Main