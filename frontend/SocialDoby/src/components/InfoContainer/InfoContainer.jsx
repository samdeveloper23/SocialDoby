import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';

const InfoContainer = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='register-card'>
            <div className='logo-container'>
                <Logo />
            </div>
            <div>
                <h2 className='info-title'>Bienvenido a SocialDoby</h2>
                <div className='info-text'>
                    <p>Registra a tu compañero de vida y dazle voz</p>
                </div>
                <div className='buttonsInfoContainer'>
                    <div onClick={handleSubmit}>
                        <NavLink className='login-button' to='/register'>
                            Registro
                        </NavLink>
                    </div>
                    <div onClick={handleSubmit}>
                        <NavLink className='login-button' to='/login'>
                            Login
                        </NavLink>
                    </div>
                </div>
                <div>
                    <NavLink className='guest-button' to='/home'>
                        Conocenos antes de registrarte
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default InfoContainer;
