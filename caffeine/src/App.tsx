import Header from "./components/Header/Header"
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
  button {
    background-color:transparent;
    border: none;
  }`;

const BackgroundPreview = styled.div`
  background-image: url(${img});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;

  .landing {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0 auto;
    padding: 5% 0;
    max-width: 1220px;

    @media (max-width:900px) {
      padding: 5%;
    }

    p {
      font-family: Playfair Display;
      font-size: 22px;
      font-weight: 500;
      color: #FFFFFF;
      max-width: 527px;
    }

    h1 {
      max-width: 527px;
      font-family: Clicker Script;
      font-size: 220px;
      font-weight: 400;
      text-align: left;
      color: #FFFFFF;
    }

    .button {
      background: #F9C06A;
      padding: 14px 27px;
      border-radius: 24px;
      color: #1E1E1E;
      max-width: 134px;
    }
  }
`;
const CoffeeDiscovery = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1180px;
  margin: auto;
  gap: 90px;

  @media (max-width:900px) {
  padding: 2%;
  gap: 50px;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 29px;

    h2 {
      font-family: Playfair Display;
      font-size: 54px;
      font-weight: 700;
      color: #603809;
    }

    p {
      font-family: Playfair Display;
      font-size: 20px;
      font-weight: 400;
      color: #707070;


    }

    .button {
      background: #F9C06A;
      padding: 14px 27px;
      border-radius: 24px;
      color: #1E1E1E;
      max-width: 134px;
    }
  }

  @media (max-width:900px) {
    .img_coffee {
      width: 50%;
      height: 50%;
    }
  }

  `
  const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 82px auto 0;
  gap: 24px;
  
  @media (max-width:900px) {
    padding: 2%;
  }

  h2 {
    font-family: Playfair Display;
    font-size: 54px;
    font-weight: 700;
    color: #603809;
    text-align: center;

    @media (max-width:900px) {
      font-size: 48px;
    }
  }

  p {
    font-family: Playfair Display;
    font-size: 20px;
    font-weight: 400;
    color: #707070;
    text-align: center;
  }

  .content {
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    gap: 20px;

    @media (max-width:1200px) {
      gap: 50px;
    }
  }
  .menu_card {
    border: 1px solid #F9C06A6B;
    max-width: 280px;
    height:364px;
    text-align: center;
    background: #FFF9F1;


    .coffeeMenu1, .coffeeMenu2, .coffeeMenu3, .coffeeMenu4 {
      width: 280px;
      height: 222px;
      background-size: contain;
      background-repeat: no-repeat;
    }
   
    h3 {
      font-family: Playfair Display;
      font-size: 22px;
      font-weight: 700;
      color: #603809;
      margin-top: 14px;
    }

    .description {
      font-family: Playfair Display;
      font-size: 16px;
      font-weight: 400;
      color: #1E1E1E;
      margin: 6px auto;
    }

    .price {
      font-family: Playfair Display;
      font-size: 18px;
      font-weight: 700;
      color: #603809;
    }
    .btn_order {
      background: #F9C06A;
      padding: 14px 27px;
      border-radius: 24px;
      color: #1E1E1E;
      max-width: 135px;
      margin: 18px auto 82px;
      font-family: Playfair Display;
      font-size: 16px;
      font-weight: 700;
    }
  }
  `

const Advantages = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 82px auto;
    gap: 20px;

  h2 {
    font-family: Playfair Display;
    font-size: 54px;
    font-weight: 700;
    color: #603809;
  }

  p {
    font-family: Playfair Display;
    font-size: 20px;
    font-weight: 400;
    color: #707070;
  }

  .advantages_content {
    display: flex;
    flex-wrap:wrap;
    gap: 20px;
    justify-content: center;

    .advantages_card {
      border: 1px solid #F9C06A6B;
      max-width: 280px;
      height: 284px;
      text-align: center;
      background: #FFF9F1;
      padding: 36px 43px;
    
      .coffee_beans, .badge, .coffee_cup, .best_price {
        width: 88px;
        height: 88px;
        background-size: contain;
        background-repeat: no-repeat;
      }
        
      h3 {
        font-family: Playfair Display;
        font-size: 22px;
        font-weight: 700;
        color: #603809;
        margin: 25px auto 8px;
      }
  
    }
  }
  .important {
    font-family: Playfair Display;
    font-size: 20px;
    font-weight: 700;
    color: #603809;
  }
  .button {
    background: #F9C06A;
    padding: 14px 27px;
    border-radius: 24px;
    color: #1E1E1E;
    max-width: 135px;
    margin: 18px auto 82px;
    font-family: Playfair Display;
    font-size: 16px;
    font-weight: 700;
    }
  
  `

const Feedback = styled.div`
  padding: 82px 153px;
  margin: auto;
  max-width: 1366px;

  @media (max-width:1000px) {
    padding: 82px 70px;
  }

  h2 {
    font-family: Playfair Display;
    font-size: 54px;
    font-weight: 700;
    color: #603809;
    margin-bottom: 16px;
    text-align: center;
  }

  p {
    font-family: Playfair Display;
    font-size: 20px;
    font-weight: 400;
    color: #707070;
    text-align: center;
  }

  .arrow_left, .arrow_right {
    background: #F9C06A;
    border-radius: 16px;
    padding: 29px;
    width: 82px;
    top: 220px;
    /* left: 0; */
    position: absolute;
  }

  .arrow_left {
    left: -50px;
  }

  .arrow_right {
    right: -50px;
  }
  .slider {
    border: 1px solid #F9C06A6B;
    background-color: #FFF9F1;
    position: relative;
    margin-top: 45px;
    .quotes {
      position: absolute;
      top: 50px;
      left: 30px;
    }
    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 129px 100px 101px;
      gap: 30px;

      h3 {
        font-family: Playfair Display;
        font-size: 32px;
        font-weight: 700;
       color: #603809;
      }

      p {
        font-family: Playfair Display;
        font-size: 18px;
        font-weight: 600;
        color: #707070;
        line-height: 36px;
      }

      .avatar {
      position: absolute;
      bottom: -80px;
      }

    }
  }
`

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
          It is best to start your day with a cup of coffee. Discover the best flavours coffee you will ever have. We provide the best for our
          customers.
        </p>
        <button className="button">Order Now</button>
      </div>
    </BackgroundPreview>

    <CoffeeDiscovery>
      <div className="content">
        <h2>Discover the best coffee</h2>
        <p>
          Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a
          cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you
          have ever tasted.
        </p>
        <button className="button">Learn More</button>
      </div>
      <img className="img_coffee" src={} alt="coffee" width={500} height={484} />
    </CoffeeDiscovery>

    <MenuList>
      <h2>Enjoy a new blend of coffee style</h2>
      <p>Explore all flavours of coffee with us. There is always a new cup worth experiencing.</p>
      <div className="content">
      </div>
    </MenuList>
    <Advantages>
      <h2>Why are we different?</h2>
      <p>We don’t just make your coffee, we make your day!</p>
      <div className="advantages_content">

      </div>
      <p>Great ideas start with great coffee, Lets help you achieve that</p>
      <p className="important">Get started today.</p>
      <button className="button">Join Us</button>
    </Advantages>


    <Feedback>
      <h2>Our coffee perfection feedback</h2>
      <p>Our customers has amazing things to say about us</p>

      <div className="slider">
        <div className="arrow_left"><img src={} alt="" /></div>
        <img className="quotes" src={} alt="" />
        <div className="text">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....</p>
          <h3>Jonny Thomas</h3>
          <p className="profession">Project Manager</p>
          <img className='avatar' src={} alt="" />
        </div>
        <div className="arrow_right"><img src={r} alt="" /></div>
      </div>
    </Feedback>

  </>
  );
};
export default App;
