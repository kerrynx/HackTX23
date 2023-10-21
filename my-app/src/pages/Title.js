import './Title.css';
import logo from '../assets/penguin_logo.png';


function Title() {
    return (
        <div className="Title">
          <header className="Title-header">
            <h1>
              Welcome to
            </h1>
            <h1>
              Wedbud
            </h1>
            <img src={logo} className="Penguin-logo" alt="logo" />
            <p>
              Get Started
            </p>
          </header>
        </div>
      );
}

export default Title;