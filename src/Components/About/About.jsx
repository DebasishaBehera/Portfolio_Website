import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile1.jpg'



const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am a passionate and dedicated aspiring full stack developer with a strong foundation in the MERN stack (MongoDB, Express.js, React.js, and Node.js). I have built several personal and academic projects that showcase my ability to develop responsive web applications and implement RESTful APIs, with a focus on clean, maintainable code.</p>
                <p>Although I am a fresher, I am highly motivated to learn and grow in a professional environment. I enjoy solving problems, collaborating with teams, and continuously improving my skills to stay updated with the latest trends in web development.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>MongoDB</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>SQL</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>Node JS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"80%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>400+</h1>
            <p>HOURS OF CODING</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>TECHNOLOGIES LEARNED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>100%</h1>
            <p>DEDICATION TO LEARNING</p>
        </div>
      </div>
    </div>
  )
}

export default About
