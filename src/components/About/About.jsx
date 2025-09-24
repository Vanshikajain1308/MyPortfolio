import React from 'react';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 gap-x-12 mr-10">
          {/* Typing Animation with "Hi, I am" fixed */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Hi, I am
             </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Vanshika Jain
           </h2>
<h3 style={{ 
    fontSize: "2em", 
    display: "inline-block", 
    fontWeight: "bold", 
    fontFamily: "'Poppins', sans-serif"   // you can change to any font
  }}>
  <span style={{ color: "white" }}>I am </span>
  <TypeAnimation
    sequence={[
      'Frontend Developer', 2000,
      'Web Developer', 2000,
      'UI/UX Designer', 2000,
      'Coder', 2000,
    ]}
    wrapper="span"
    speed={50}
    style={{ color: '#8245ec' }}
    repeat={Infinity}
  />
</h3>
          

          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I'm a passionate Frontend Developer skilled in React, HTML, CSS, and JavaScript, with additional expertise in Python and SQL. I enjoy crafting responsive, user-friendly web experiences and constantly strive to learn, grow, and innovate in everything I build.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1EQtUIHZKIT6ZXCM2tdBzUn_6AJoYxqjJ/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

       {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end ">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            
            
            <img
              src={profileImage}
              alt="Vanshika Jain"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
              
            />
            
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
