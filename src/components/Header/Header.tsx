import styled from 'styled-components';
import { motion } from 'framer-motion';
const Wrapper = styled.div`
  max-width: 1220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2% 0;
  margin: auto;

  h1 {
    font-family: Clicker Script;
    font-size: 35px;
    font-weight: 400;
    color: #ffffff;
  }

  button {
    display: block;
    color: #ffffff;
    border-radius: 24px;
    border: 1px solid transparent;
    &:hover {
      box-sizing: border-box;
      border: 1px solid #ffff;
      transform: scale(1.1);
      transition: transform 0.2s linear;
    }
  }

  .btn_active {
    background: #f9c06a;
    padding: 14px 27px;
    color: #1e1e1e;
    &:hover {
      color: #ffffff;
      border: 1px solid transparent;
      transition: transform 0.2s linear;
    }
  }

  .container {
    display: flex;
    gap: 35px;
  }

  .navigation {
    display: flex;
    gap: 60px;

    a {
      text-decoration: none;
      color: #ffffff;
      transition:
        text-decoration 0.3s,
        text-decoration-thickness 0.3s;
      position: relative;
      &:hover {
        cursor: pointer;
      }
      &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        height: 2px;
        background: #ffffff;
        transform: scaleX(0);
        transition: transform 0.3s;
      }

      &:hover::after {
        transform: scaleX(1);
      }
    }
  }
`;
const Header = () => {
  const nav = ['Home', 'Menu', 'About Us', 'Contact Us'];

  return (
    <Wrapper>
      <h1>Caffeine</h1>
      <div className="navigation">
        {nav.map((el, i) => (
          <a key={i} href={`#${el.replace(/\s+/g, '').toLowerCase()}`}>
            {el}
          </a>
        ))}
      </div>

      <div className="container">
        <button>Sign In</button>
        <motion.button whileTap={{ scale: 1.4 }} className="btn_active">
          Sign Up
        </motion.button>
      </div>
    </Wrapper>
  );
};
export default Header;
