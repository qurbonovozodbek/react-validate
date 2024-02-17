import { useState, useRef} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import image from "./assets/profile.png";
import facebook from "./assets/facebook.svg";
import github from "./assets/github.svg";
import instagram from "./assets/instagram.svg";
import telegram from "./assets/telegram.svg";
import vector from "./assets/Vector.svg";

function App() {
  const nameRef = useRef('')
  const emailRef = useRef('')
  const phoneRef = useRef('')
  const davlatRef = useRef('')
  const [error1, setError1] = useState('')
  const [error2, setError2] = useState('')
  const [error3, setError3] = useState('')
  const [error4, setError4] = useState('')


  function validate(nameRef, emailRef, phoneRef, davlatRef) {

    if (!nameRef.current.value) {
      nameRef.current.style.outlineColor = 'red';
      nameRef.current.style.backgroundColor ='rgb(255, 168, 168)';
      nameRef.current.focus()
      setError1('kompaniya nomini kiritishingiz shart')
      return false
    } else {
      nameRef.current.style.outlineColor = 'gray';
      nameRef.current.style.backgroundColor = 'rgb(255, 255, 255)';
      setError1("")
    }

    if (nameRef.current.value.trim().length <= 3) {
      nameRef.current.style.outlineColor = 'red';
      nameRef.current.style.backgroundColor ='rgb(255, 168, 168)';
      nameRef.current.focus();
      return false
    } else {
      nameRef.current.style.outlineColor = 'gray';
      nameRef.current.style.backgroundColor = 'rgb(255, 255, 255)';
    }

    if (!emailRef.current.value) {
      emailRef.current.style.outlineColor = 'red';
      emailRef.current.style.backgroundColor = 'rgb(255, 168, 168)';
      emailRef.current.focus();
      setError2("Emailni kiritishingiz shart")
      return false
    } else {
      emailRef.current.style.outlineColor = 'gray';
      emailRef.current.style.backgroundColor = 'rgb(255, 255, 255)';
      setError2("")
    }

    if (!Number(phoneRef.current.value)) {
      phoneRef.current.style.outlineColor ='red';
      phoneRef.current.style.backgroundColor = 'rgb(255, 168, 168)';
      phoneRef.current.focus();
      setError3("Tel raqam kiritishingiz shart")
      return false
    } else {
      phoneRef.current.style.outlineColor = 'gray';
      phoneRef.current.style.backgroundColor = 'rgb(255, 255, 255)';
      setError3("")
    }

    if (!davlatRef.current.value) {
      davlatRef.current.focus();
      davlatRef.current.style.outlineColor = 'red';
      davlatRef.current.style.backgroundColor ='rgb(255, 168, 168)';
      setError4("Davlatni kiritishingiz shart")
      return false
    } else {
      setError4("")
      davlatRef.current.style.outlineColor = 'gray';
      davlatRef.current.style.backgroundColor = 'rgb(255, 255, 255)';
    }
    
    return true
  }

  function handleClick(e) {
    e.preventDefault()

    if (validate(nameRef, emailRef, phoneRef, davlatRef)) {
      alert("Muvoffaqiyatli o'tildi")
    }
  }


  return (
    <>
      <div className="container">
        <h1>Kompaniya ma’lumotlari</h1>
        <p className="info-t">Kompaniya haqidagi ma’lumotlarni kiriting</p>
        <div className="profil">
          <img src={image} alt="" />
          <h3>Yuklash</h3>
        </div>

        <form>

          <div className="box">
            <label htmlFor="kompaniya">{" "}Kompaniya nomi <span>*</span>{" "}</label>
            <input type="text" id="kompaniya" placeholder="Kompaniya nomi" ref={nameRef}/>
            {error1 && <p style={{ color: 'red' }}>{error1}</p>}
          </div>

          <div className="box">
            <label htmlFor="email">{" "}Email <span>*</span>{" "}</label>
            <input type="email" id="email" placeholder="Email" ref={emailRef}/>
            {error2 && <p style={{ color: 'red' }}>{error2}</p>}
          </div>

          <div className="box">
            <label htmlFor="telefon">{" "} Telefon raqami <span>*</span>{" "}</label>
            <input type="number" id="telefon" placeholder="UZ +9989" ref={phoneRef}/>
            {error3 && <p style={{ color: 'red' }}>{error3}</p>}
          </div>

          <div className="box">
            <label htmlFor="davlat">{" "}Davlat <span>*</span>{" "}</label>
            <input type="text" id="davlat" placeholder="Davlat" ref={davlatRef}/>
          </div>
          {error4 && <p style={{ color: 'red' }}>{error4}</p>}
        </form>

        <div className="links">

          <p>Linklar <span>*</span></p>

          <div className="cards">

            <div className="card">
              <a href="https://www.vector.com/int/en/">
                <img src={vector} alt="vectorLogo" />
              </a>
            </div>

            <div className="card">
              <a href="https://www.instagram.com/">
                <img src={instagram} alt="instagramLogo" />
              </a>
            </div>

            <div className="card">
              <a href="https://telegram.org/">
                <img src={telegram} alt="telegramLogo" />
              </a>
            </div>

            <div className="card">
              <a href="https://www.facebook.com/">
                <img src={facebook} alt="facebookLogo" />
              </a>
            </div>

            <div className="card">
              <a href="https://github.com/">
                <img src={github} alt="githubLogo" />
              </a>
            </div>

          </div>
        </div>
        <div className="btns">
          <button className="orqaga">Orqaga</button>
          <button onClick={handleClick} className="keyingisi">Keyingisi</button>
        </div>

      </div>
    </>
  );
}

export default App;
