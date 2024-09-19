import Header from "./components/Header/Header";
import styled, { createGlobalStyle } from "styled-components";
import img from "./assets/coffee_image.png";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-style:normal;
    color:#707070;
    font-family: Playfair Display;
    font-size: 14px;
    font-weight: 500;
  }

  body {
    background-color: 'fff';
    border: none;
  }
`;
const BackgroundPreview = styled.div`
  background-image: url(${img});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  .landing{
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0 auto;
    padding: 5% 0;
    max-width:1220px;
  }
  p{
    font-family: Playfair Display;
    font-size: 22px;
    font-weight: 500;
    color: #FFFF;
    max-width: 527px;
  }
`;

const App = () => {
  return (
    <>
      <Global />
      <BackgroundPreview>
        <Header />
        <div className="landing">
          <p>We’ve got your morning covered with</p>
          <h1>Coffee</h1>
          <p>
            It is best to start your day with a cup of coffee. Discover the best
            flavours coffee you will ever have. We provide the best for our
            customers.
          </p>
          <button className="button">Order Now</button>
        </div>
      </BackgroundPreview>
    </>
  );
};
export default App;
