import React from 'react';
import { IonIcon } from '@ionic/react';
import { mailOutline, lockClosedOutline } from 'ionicons/icons';
// import '@ionic/core/css/ionic.bundle.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

const Card1 = () => {
  return (
    <div style={styles.body}>
      <div style={styles.box}>
        <form>
          <h2 style={styles.h2}>Login Here</h2>

          <div style={styles.inputbox}>
            {/* <label style={styles.label}>Email:</label> */}
            <IonIcon icon={mailOutline} style={styles.icon} />
            <input type="email" placeholder='Email' required style={styles.input} />
          </div>

          <div style={styles.inputbox}>
            <IonIcon icon={lockClosedOutline} style={styles.icon} />
            <input type="password" placeholder='Password' required style={styles.input} />
            {/* <label style={styles.label}>Password:</label> */}
          </div>

          <div style={styles.forget}>
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <label>Forget Password</label>
          </div>
          <button style={styles.button}>Log In</button>

          <div style={styles.register}>
            <p>
              Don't have an account ? <a href="#" style={styles.link}>register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  body: {
    margin: 0,
    padding: 0,
    fontFamily: '"Poppins", sans-serif',
    backgroundColor: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'url("https://images.pexels.com/photos/3232784/pexels-photo-3232784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") no-repeat center center',
    backgroundSize: 'cover',
    width: '100%',
  },
  box: {
    width: '400px',
    height: '450px',
    border: '2px solid #625d5d',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '20px',
    backdropFilter: 'blur(15px)',
    background: 'transparent',
  },
  h2: {
    fontSize: '2em',
    color: '#fff',
    textAlign: 'center',
  },
  inputbox: {
    position: 'relative',
    margin: '30px 0',
    width: '300px',
    borderBottom: '2px solid #fff',
  },
  label: {
    position: 'absolute',
    top: '50%',
    left: '5px',
    transform: 'translateY(-50%)',
    color: '#fff',
    fontSize: '1em',
    pointerEvents: 'none',
    transition: '0.5s',
  },
  input: {
    width: '100%',
    height: '50px',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    fontSize: '1em',
    padding: '0 35px 0 5px',
    color: '#000',
  },
  icon: {
    position: 'absolute',
    right: '8px',
    color: '#fff',
    fontSize: '1.2em',
    top: '20px',
  },
  button: {
    width: '100%',
    height: '40px',
    borderRadius: '40px',
    backgroundColor: '#e6e2e2',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    fontSize: '1.3em',
    fontWeight: 700,
  },
  forget: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0 15px',
    fontSize: '0.9em',
    color: '#fff',
  },
  register: {
    fontSize: '0.9em',
    color: '#fff',
    textAlign: 'center',
    margin: '20px 0 15px',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 800,
  },
  metaLink: {
    alignItems: 'center',
    backdropFilter: 'blur(3px)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '6px',
    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    display: 'inline-flex',
    gap: '5px',
    left: '10px',
    padding: '10px 20px',
    position: 'fixed',
    textDecoration: 'none',
    transition: 'background-color 600ms, border-color 600ms',
    zIndex: 10000,
  },
  metaLinkSpan: {
    color: 'white',
    fontFamily: '"Rubik", sans-serif',
    transition: 'color 600ms',
  },
};

export default Card1;
