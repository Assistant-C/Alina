import { useState, useEffect, useRef } from 'react';

import './App.css';
import WOW from 'wowjs';
import 'animate.css';
import work1 from './assets/work1.png';
import work2 from './assets/work2.png';
import work3 from './assets/work3.PNG';
import work4 from './assets/work4.png';
import work5 from './assets/work5.png';
import photo from './assets/photo.jpg';

function App() {
  const skillsRef = useRef(null);
const [skillsVisible, setSkillsVisible] = useState(false);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [circlePos, setCirclePos] = useState({ x: 0, y: 0 });
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
    if (!skillsRef.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSkillsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.3 });
  
    observer.observe(skillsRef.current);
  
    return () => observer.disconnect();
  }, []);
  const translations = {
    en: {
      start: "Start",
      resume: "My resume",
      about: "About me",
      skills: "My skills",
      work: "My work",
      contacts: "Contacts",
      greeting:
        "Hello! I'm Alina Lapina. This is my portfolio where I share my skills, experience, knowledge and work. I hope you enjoy getting to know me better!",
      aboutText:
        "Hi! My name is Alina, and I’m from Kryvyi Rih. I’m just starting my journey in web development and really passionate about creating digital products. I’ve learned the basics of React, JavaScript, HTML, and CSS, and I’m eager to keep exploring new technologies and tools. I speak Russian, Ukrainian, and English, and I’m working on improving my communication skills to enjoy collaborating with others. My main strengths are a strong desire to learn, attention to detail, and persistence. In my free time, I enjoy reading, staying active with sports, and finding inspiration in the little things around me. I’m excited about new projects and opportunities that will help me grow as a professional and create useful, beautiful things!",
      mySkills: "My skills",
      hardSkills: "Hard Skills",
      softSkills: "Soft Skills",
      Teamwork:"Teamwork",
      Communication:"Communication",
      Problem_Solving:"Problem Solving",
      Adaptability:"Adaptability",
      Creativity:"Creativity",
      Critical_Thinking:"Critical Thinking",
      myWorks: "My works",
      lastProjects: "There you can see my last projects:",
      work1:"Work 1",
      work2:"Work 2",
      work3:"Work 3",
      work4:"Work 4",
      work5:"Work 5",
      contactsTitle: "Contacts",
      contactMe: "You can contact me",
      yourName: "Your name:",
      yourEmail: "Your email:",
      phoneNumber: "Phone number:",
      message: "Message:",
      send: "Send",
      emailLabel: "Email: lapkalav@gmail.com",
      phoneLabel: "Phone: +380 (095) 460 57 61",
      findMe: "Find me on:",
      github: "Github",
      telegram: "Telegram"
    },
    ua: {
      start: "Початок",
      resume: "Моє резюме",
      about: "Про мене",
      skills: "Мої навички",
      work: "Мої роботи",
      contacts: "Контакти",
      greeting:
        "Привіт! Я Аліна Лапіна. Це моє портфоліо, де я ділюся своїми навичками, досвідом, знаннями та проєктами. Сподіваюся, вам сподобається!",
      aboutMe: "Про мене",
      aboutText:
        "Привіт! Мене звати Аліна, я з Кривого Рогу. Я лише починаю свій шлях у веброзробці та дуже захоплена створенням цифрових продуктів. Я вивчила основи React, JavaScript, HTML і CSS та прагну продовжувати освоювати нові технології. Володію українською, російською та англійською мовами. Моєю сильною стороною є бажання навчатися, уважність до деталей та наполегливість. У вільний час читаю, займаюся спортом та надихаюсь дрібницями навколо. Чекаю на нові проєкти, щоб зростати професійно та створювати корисні й красиві речі!",
      mySkills: "Мої навички",
      hardSkills: "Технічні навички",
      softSkills: "Особисті якості",
      Teamwork:"Командна робота",
      Communication:"Комунікація",
      Problem_Solving:"Вирішення проблем",
      Adaptability:"Адаптивність",
      Creativity:"Творчість",
      Critical_Thinking:"Критичне мислення",
      myWorks: "Мої роботи",
      lastProjects: "Ось мої останні проєкти:",
      work1:"Робота 1",
      work2:"Робота 2",
      work3:"Робота 3",
      work4:"Робота 4",
      work5:"Робота 5",
      contactsTitle: "Контакти",
      contactMe: "Напишіть мені",
      yourName: "Ваше ім’я:",
      yourEmail: "Ваша пошта:",
      phoneNumber: "Телефон:",
      message: "Повідомлення:",
      send: "Надіслати",
      emailLabel: "Пошта: lapkalav@gmail.com",
      phoneLabel: "Телефон: +380 (095) 460 57 61",
      findMe: "Я в мережі:",
      github: "Гітхаб",
      telegram: "Телеграм"
    }
  };
  const t = translations[language];
  
  useEffect(() => {
    new window.WOW().init();
  }, []);
//мышка
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  useEffect(() => {
    const lerp = (start, end, t) => start + (end - start) * t;
    let animationFrameId;
    const animate = () => {
      setCirclePos(pos => ({
        x: lerp(pos.x, mousePos.x, 0.15),
        y: lerp(pos.y, mousePos.y, 0.15),
      }));
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePos]);


  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t.send + '!');
  };
  //тема
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };
  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'ua' : 'en'));
  };


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true);
      },
      { threshold: 0.3 }
    );
  
    const skillsEl = document.getElementById("skills");
    if (skillsEl) observer.observe(skillsEl);
  
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <div className="box">
        <nav className="wow animate__animated animate__fadeInDown" >
          <div className="nav_blo1">
            <button className="theme" onClick={toggleTheme}>
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button className='language' onClick={toggleLanguage}> {language === 'en' ? (
    <>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Flag_of_Ukraine.png/640px-Flag_of_Ukraine.png" alt="UA" width="40" height="35" style={{ marginRight: '5px' }} />
 
    </>
  ) : (
    <>
      <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_the_United_States.png" alt="EN" width="40" height="35" style={{ marginRight: '5px' }} />
      
    </>
  )}
</button>
            <a href="#header"><h1 className="rotating-text">{t.start}</h1></a>
          </div>
          <div className="nav_blo">
            <a href="#about"><h1 className="rotating-text">{t.about}</h1></a>
            <a href="#skills"><h1 className="rotating-text">{t.skills}</h1></a>
            <a href="#work"><h1 className="rotating-text">{t.work}</h1></a>
            <a href="#contacts"><h1 className="rotating-text">{t.contacts}</h1></a>
          </div>
        </nav>

        <header>
          {/* <div className="work_block wow animate__animated animate__animate__zoomIn" > */}
          <div id="header" className="header_brown">
            <div className="header_text">
              <h1 className="header_h1">{t.resume}</h1>
              <p className="header_p  wow animate__animated animate__lightSpeedInLeft">{t.greeting}</p>
            </div>
            <div className="header_text2">
              <img
                className="header_img"
                src="https://cdn-icons-png.flaticon.com/512/9594/9594132.png"
                alt="My photo"
              />
            </div>
          </div>
        </header>

        <main>
          <div id="about" className="aboutme">
            <h1 className="about_h1">{t.aboutMe}</h1>
            <img className="about_img wow animate__animated animate__fadeInLeft" src={photo}/>
            <div className="wwwww wow animate__animated animate__fadeInRight"
              data-wow-duration="1s"
              data-wow-delay="0.5s">
              <p className="about_p">{t.aboutText}</p>
            </div>
          </div>

          <div className="myskills wwwww wow animate__animated animate__backInUp" id="skills" ref={skillsRef}>
            <h1 className="about_h1">{t.mySkills}</h1>
            <div className="skills-container">
              <h2 className="soft-title">{t.hardSkills}</h2>
              <div className="skill-item">
                <h3>HTML</h3>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '98%' }}></div>
                </div>
                <span>98%</span>
              </div>
              <div className="skill-item">
                <h3>CSS</h3>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '96%' }}></div>
                </div>
                <span>96%</span>
              </div>
              <div className="skill-item">
                <h3>JavaScript</h3>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '87%' }}></div>
                </div>
                <span>87%</span>
              </div>
              <div className="skill-item">
                <h3>React</h3>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '95%' }}></div>
                </div>
                <span>95%</span>
              </div>
              <div className="skill-item">
                <h3>jQuery</h3>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '90%' }}></div>
                </div>
                <span>90%</span>
              </div>
            </div>

            <h2 className="soft-title">{t.softSkills}</h2>
            <div className="soft-skills-container">
              <div className="soft-skill">
                <p>{t.Teamwork}</p>
              </div>
              <div className="soft-skill">
                <p>{t.Communication}</p>
              </div>
              <div className="soft-skill">
                <p>{t.Problem_Solving}</p>
              </div>
              <div className="soft-skill">
                <p>{t.Adaptability}</p>
              </div>
              <div className="soft-skill">
                <p>{t.Creativity}</p>
              </div>
              <div className="soft-skill">
                <p>{t.Critical_Thinking}</p>
              </div>
            </div>
          </div>

          {/* <div className="work_block wow animate__animated animate__animate__zoomIn" > */}
          <div className="myworks" id="work">
            <h1 className="about_h1">{t.myWorks}</h1>
            <h1 className="mywork_h1">{t.lastProjects}</h1>
            <div className="works">
            <div className="work_block  wow animate__animated animate__fadeInDown">
              <a href="https://alina1234567891011.github.io/work2/" target="_blank" rel="noopener noreferrer">
              <img className="workimg" src={work1} alt="Work 1" />
              </a>
              <p>{t.work1}</p>
            </div>
            <div className="work_block1 wow animate__animated animate__fadeInRight">
              <a href="https://alina1234567891011.github.io/Ukraine/" target="_blank" rel="noopener noreferrer">
              <img className="workimg" src={work4} alt="Work 4" />  
              <p>{t.work4}</p>
            </a>
            </div>
              <div className="work_block2 wow animate__animated animate__fadeInUp">
              <a href="https://github.com/Alina1234567891011" target="_blank" rel="noopener noreferrer">
              <img className="workimg" src={work2} alt="Work 2" />  
              <p>{t.work2}</p>
              </a>
              </div>
              <div className="work_block3 wow animate__animated animate__fadeInRight">
              <a href="https://github.com/Alina1234567891011" target="_blank" rel="noopener noreferrer">
              <img className="workimg" src={work3} alt="Work 4" />  
              <p>{t.work3}</p>
              </a>
              </div>
              <div className="work_block4 wow animate__animated animate__fadeInLeft">
              <a href="https://github.com/Alina1234567891011" target="_blank" rel="noopener noreferrer">
              <img className="workimg" src={work5} alt="Work 5" />  
              <p>{t.work5}</p>
              </a>
              </div>
            </div>
          </div>

          <div className="contact" id="contacts">
            <h1 className="contact_h1">{t.contactsTitle}</h1>
            <div className="contact_brown"></div>
            <div className="contact_block1">
              <h1 className="contact_h2">{t.contactMe}</h1>
              <form onSubmit={handleSubmit} noValidate>
                <label className="forms" htmlFor="name">{t.yourName}</label><br />
                <input className="input" type="text" id="name" name="name"
                  required
                  autoComplete="name"
                  aria-required="true"
                  placeholder={t.yourName}
                /><br />
                <label className="forms" htmlFor="email">{t.yourEmail}</label><br />
                <input className="input" type="email" id="email" name="email"
                  required
                  autoComplete="email"
                  aria-required="true"
                  placeholder={t.yourEmail}
                /><br />
                <label className="forms" htmlFor="phone">{t.phoneNumber}</label><br />
                <input className="input" type="tel" id="phone" name="phone"
                  required
                  autoComplete="tel"
                  aria-required="true"
                  placeholder="+XXXXXXXXX"
                  pattern="^\+?[0-9\s\-()]{7,}$"
                  title="Please enter a valid phone number"
                /><br />
                <label className="forms" htmlFor="message">{t.message}</label><br />
                <textarea className="biginput" id="message" name="message"
                  required
                  aria-required="true"
                  placeholder={t.message}
                  rows="6"
                ></textarea><br />
                <button type="submit" className="contact_button">
                  <p className="forms">{t.send}</p>
                </button>
              </form>
            </div>

            <div className="contact_block2">
              <h1 className="forms">{t.emailLabel}</h1>
              <h1 className="forms">{t.phoneLabel}</h1>
              <h1 className="contact_h3">{t.findMe}</h1>
              <div className="block_container">
                <div className="git">
  <img className="block" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub"/>
                  <a className="forms1" href="https://github.com/Alina1234567891011">
                    {t.github}
                  </a>
                </div>
                <div className="tel">
  <img className="block" src="https://cdn-icons-png.flaticon.com/512/87/87413.png" alt="Telegram"/>
                  <a className="forms1" href="https://t.me/LapkaAlina">
                    {t.telegram}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="cursor-dot"
        style={{
          left: mousePos.x,
          top: mousePos.y,
        }}
      />
      <div className="cursor-circle"
        style={{
          left: circlePos.x,
          top: circlePos.y,
        }}
      />
    </>
  );
}

export default App;