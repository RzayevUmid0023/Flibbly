import React, { useRef } from 'react';
import './Login.css';
import { FaGoogle, FaFacebook ,FaTwitter } from 'react-icons/fa';
import { BiExit} from 'react-icons/bi';
import Logo from '../../photo/Logo.svg'


function LoginPage({ showLogin, toggleShowLogin }) {
  const container = useRef(null);
  const registerBtn = useRef(null);
  const loginBtn = useRef(null);

  const handleRegister = () => {
    container.current.classList.add("active");
  };

  const handleLogin = () => {
    container.current.classList.remove("active");
  };

  return (
    <React.Fragment>
        <div className='Login_section'>
           
            <div className="container" ref={container}>

                <div className="form-container sign-up">
            <div className='exit_button'><button onClick={toggleShowLogin}><BiExit className='exit-icon'/></button></div>

                <form>
                    <h1>Hesap Oluştur</h1>
                    <div className="social-icons">
                     
                    <a href="#" className="icon"><FaGoogle /></a>
                    <a href="#" className="icon"><FaFacebook /></a>
                    <a href="#" className="icon"><FaTwitter /> </a>
                    </div>
                    <span>Veya kayıt için E-posta adresinizi kullanın</span>
                    <input type="text" placeholder="İsim" />
                    <input type="email" placeholder="E-Posta" />
                    <input type="password" placeholder="Şifre" />
                    <button>Kaydol</button>
                </form>
                </div>
                <div className="form-container sign-in">
            <div className='exit_button'><button onClick={toggleShowLogin}><BiExit className='exit-icon'/></button></div>

                <form>
                    <img src={Logo }/>
                    <div className="social-icons">
                    {/* <i> etiketlerini <ICON_NAME /> komponentleriyle değiştir */}
                    <a href="#" className="icon"><FaGoogle /></a>
                    <a href="#" className="icon"><FaFacebook /></a>
                    <a href="#" className="icon"><FaTwitter/> </a>
                    </div>
                    <span>Veya E-postanız ile giriş yapın</span>
                    <input type="email" placeholder="E-Posta" />
                    <input type="password" placeholder="Şifre" />
                    <a href="#">Şifremi Unuttum</a>
                    <button>Giriş Yap</button>
                </form>
                </div>
                <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                    <h1>Tekrar Hoş Geldiniz!</h1>
                    <p>Kişisel bilgilerinizi girin</p>
                    <button className="hidden" ref={loginBtn} onClick={handleLogin}>Giriş Yapın</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                    <h1>Merhaba</h1>
                    <p>Kişisel bilgileriniz ile kaydolun</p>
                    <button className="hidden" ref={registerBtn} onClick={handleRegister}>Kaydol</button>
                    </div>
                </div>
                </div>
            </div>
      </div>

    </React.Fragment>

  );
}

export default LoginPage;
