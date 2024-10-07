import Header from './components/Header/Header';
import coffee from './assets/coffeeBeans.png';
import bg_coffee from './assets/BackgroundCoffe.png';
import coffeeMenu1 from './assets/Cappuccino.svg';
import coffeeMenu2 from './assets/ChaiLatte.svg';
import coffeeMenu3 from './assets/Macchiato.svg';
import coffeeMenu4 from './assets/Expresso.svg';
import coffee_beans from './assets/coffeeBeans.svg';
import badge from './assets/badge.svg';
import coffee_cup from './assets/coffeeCup.svg';
import best_price from './assets/bestPrice.svg';
import cup from './assets/cup.png';
import quotes from './assets/quotes.svg';
import minko from './assets/rounded_photo.png';
import avatar from './assets/avatar.svg';
import left from './assets/arrowLeft.svg';
import right from './assets/arrowRight.svg';

import styled, { createGlobalStyle } from 'styled-components';
import img from './assets/coffee_image.png';
import { useEffect, useState } from 'react';

const coffies = [
  {
    id: 1,
    title: 'Cappuccino',
    description: 'Coffee 50% | Milk 50%',
    price: '$8.50',
    img: coffeeMenu1,
  },
  {
    id: 2,
    title: 'Chai Latte',
    description: 'Coffee 50% | Milk 50%',
    price: '$8.50',
    img: coffeeMenu2,
  },
  {
    id: 3,
    title: 'Macchiato',
    description: 'Coffee 50% | Milk 50%',
    price: '$8.50',
    img: coffeeMenu3,
  },
  {
    id: 4,
    title: 'Expresso',
    description: 'Coffee 50% | Milk 50%',
    price: '$8.50',
    img: coffeeMenu4,
  },
];
const advantages = [
  {
    id: 1,
    title: 'Supreme Beans',
    description: 'Beans that provides great taste',
    icon: coffee_beans,
  },
  {
    id: 2,
    title: 'High Quality',
    description: 'We provide the highest quality',
    icon: badge,
  },
  {
    id: 3,
    title: 'Extraordinary',
    description: 'Coffee like you have never tasted',
    icon: coffee_cup,
  },
  {
    id: 4,
    title: 'Affordable Price',
    description: 'Our Coffee prices are easy to afford',
    icon: best_price,
  },
];
const sliderObj = [
  {
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....`,
    name: `Jonny Thomas`,
    profession: `Project Manager`,
  },
  {
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis enim doloremque perspiciatis nostrum inventore consequuntur dicta exercitationem! Optio debitis maxime explicabo ab ad, fugiat voluptas?`,
    name: `Jon Smith`,
    profession: `Front`,
  },
  {
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis soluta nam quia minima, fugiat totam ratione distinctio voluptatum iure consequatur quisquam dicta alias reiciendis placeat harum architecto neque cum pariatur.`,
    name: `Stanislav Minko`,
    profession: `Dev`,
  },
  {
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam dolorem officia veniam dolor nobis voluptates necessitatibus vero, porro nulla labore.`,
    name: `Jonny Thomas`,
    profession: `HR`,
  },
  {
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci harum, tempora perferendis amet delectus?`,
    name: `Thomas`,
    profession: `Project Manager`,
  },
];

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-style:normal;
    color:#707070;
    font-family: "Playfair Display";
    font-size: 14px;
    font-weight: 500;
  }

  body {
    background-color: 'fff';
    border: none;
    display: flex;
    justify-content: center;

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

    @media (max-width: 900px) {
      padding: 5%;
    }

    p {
      font-family: Playfair Display;
      font-size: 22px;
      font-weight: 500;
      color: #ffffff;
      max-width: 527px;
    }

    h1 {
      max-width: 527px;
      font-family: 'Clicker Script';
      font-size: 220px;
      font-weight: 400;
      text-align: left;
      color: #ffffff;
    }

    .button {
      background: #f9c06a;
      padding: 14px 27px;
      border-radius: 24px;
      color: #1e1e1e;
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

  @media (max-width: 900px) {
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
      font-family: 'Playfair Display';
      font-size: 20px;
      font-weight: 400;
      color: #707070;
    }

    h1 {
      max-width: 527px;
      font-family: 'Clicker Script';
      font-size: 220px;
      font-weight: 400;
      text-align: left;
      color: #ffffff;
    }

    .button {
      background: #f9c06a;
      padding: 14px 27px;
      border-radius: 24px;
      color: #1e1e1e;
      max-width: 134px;
    }
  }

  @media (max-width: 900px) {
    .img_coffee {
      width: 50%;
      height: 50%;
    }
  }
`;
const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 82px auto 0;
  gap: 24px;

  @media (max-width: 900px) {
    padding: 2%;
  }

  h2 {
    font-family: Playfair Display;
    font-size: 54px;
    font-weight: 700;
    color: #603809;
    text-align: center;

    @media (max-width: 900px) {
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
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;

    @media (max-width: 1200px) {
      gap: 50px;
    }
  }
  .menu_card {
    border: 1px solid #f9c06a6b;
    max-width: 280px;
    height: 364px;
    text-align: center;
    background: #fff9f1;
    &:hover {
      transform: scale(1.1);
      transition: transform 0.8s linear;
      cursor: pointer;
      .btn_order {
        background: #b87716;
        color: #fff;
        transition:
          background 0.9s ease,
          color 0.5s ease;
      }
    }

    .coffeeMenu1,
    .coffeeMenu2,
    .coffeeMenu3,
    .coffeeMenu4 {
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
      color: #1e1e1e;
      margin: 6px auto;
    }

    .price {
      font-family: Playfair Display;
      font-size: 18px;
      font-weight: 700;
      color: #603809;
    }
    .btn_order {
      background: #f9c06a;
      padding: 14px 27px;
      border-radius: 24px;
      color: #1e1e1e;
      max-width: 135px;
      margin: 18px auto 82px;
      font-family: Playfair Display;
      font-size: 16px;
      font-weight: 700;
    }
  }
`;

const Advantages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 82px auto;
  gap: 20px;

  h2 {
    font-family: 'Playfair Display';
    font-size: 54px;
    font-weight: 700;
    color: #603809;
  }

  p {
    font-family: 'Playfair Display';
    font-size: 20px;
    font-weight: 400;
    color: #707070;
  }

  .advantages_content {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;

    .advantages_card {
      border: 1px solid #f9c06a6b;
      max-width: 280px;
      height: 284px;
      text-align: center;
      background: #fff9f1;
      padding: 36px 43px;
      transition: transform 0.3 ease;
      &:hover {
        background-color: #ffeed8;
        transform: scale(1.1);
        transition: transform 0.5s linear;
        cursor: pointer;
      }

      .coffee_beans,
      .badge,
      .coffee_cup,
      .best_price {
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
    font-family: 'Playfair Display';
    font-size: 20px;
    font-weight: 700;
    color: #603809;
  }
  .button {
    background: #f9c06a;
    padding: 14px 27px;
    border-radius: 24px;
    color: #1e1e1e;
    max-width: 135px;
    margin: 18px auto 82px;
    font-family: Playfair Display;
    font-size: 16px;
    font-weight: 700;
  }
`;
const VisitCard = styled.div`
  background-image: url(${bg_coffee});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;

  .wrapper_visit_card {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 5% 93px;
    max-width: 1366px;

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 22px;
      max-width: 575px;

      h2 {
        font-family: 'Playfair Display';
        font-size: 54px;
        font-weight: 700;
        color: #ffffff;
      }

      p {
        font-family: Playfair Display;
        font-size: 22px;
        font-weight: 500;
        color: #ffffff;
      }

      .button {
        background: #f9c06a;
        padding: 14px 27px;
        border-radius: 24px;
        color: #1e1e1e;
        max-width: 134px;
      }
    }
  }
`;

const Feedback = styled.div`
  padding: 82px 153px;
  margin: auto;
  max-width: 1366px;

  @media (max-width: 1000px) {
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

  .arrow_left,
  .arrow_right {
    background: #f9c06a;
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
    border: 1px solid #f9c06a6b;
    background-color: #fff9f1;
    max-width: 80%;
    height: 524px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    .quotes {
      position: absolute;
      top: 50px;
      left: 30px;
    }
    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 129px 70px 80px;
      gap: 20px;

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
`;

const App = () => {
  const [count, setCount] = useState(0);

  const nextSlide = () => (count === sliderObj.length - 1 ? setCount(0) : setCount(count + 1));
  const lastSlide = () => (count === 0 ? setCount(sliderObj.length - 1) : setCount(count - 1));

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [count]);

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
        <img className="img_coffee" src={coffee} alt="coffee_image" width={500} height={484} />
      </CoffeeDiscovery>

      <MenuList>
        <h2>Enjoy a new blend of coffee style</h2>
        <p>Explore all flavours of coffee with us. There is always a new cup worth experiencing.</p>
        <div className="content">
          {coffies.map(el => (
            <div className="menu_card" key={el.id}>
              <img src={el.img} alt="" />
              <h3>{el.title}</h3>
              <p className="description">{el.description}</p>
              <p className="price">{el.price}</p>
              <button className="btn_order">Order Now</button>
            </div>
          ))}
        </div>
      </MenuList>
      <Advantages>
        <h2>Why are we different?</h2>
        <p>We don’t just make your coffee, we make your day!</p>
        <div className="advantages_content">
          {advantages.map(el => (
            <div className="advantages_card" key={el.id}>
              <img src={el.icon} alt="" />
              <h3>{el.title}</h3>
              <p>{el.description}</p>
            </div>
          ))}
        </div>
        <p>Great ideas start with great coffee, Lets help you achieve that</p>
        <p className="important">Get started today.</p>
        <button className="button">Join Us</button>
      </Advantages>
      <VisitCard>
        <div className="wrapper_visit_card">
          <div className="info">
            <h2>Get a chance to have an Amazing morning</h2>
            <p>We are giving you are one time opportunity to experience a better life with coffee.</p>
            <button className="button">Order Now</button>
          </div>
          <div className="wrapper_img">
            {/* <img src={beans} alt="" /> */}
            <img src={cup} alt="" />
          </div>
        </div>
      </VisitCard>

      <Feedback>
        <h2>Our coffee perfection feedback</h2>
        <p>Our customers has amazing things to say about us</p>

        <div className="slider">
          <div className="arrow_left">
            <img src={left} alt="" onClick={() => nextSlide()} />
          </div>
          <img className="quotes" src={quotes} alt="" />
          <div className="text">
            <p>{sliderObj[count].description}</p>
            <h3>{sliderObj[count].name}</h3>
            <p className="profession">{sliderObj[count].profession}</p>
            <img className="avatar" src={sliderObj[count].profession === 'Dev' ? minko : avatar} alt="" />
          </div>
          <div className="arrow_right">
            <img src={right} alt="" onClick={() => lastSlide()} />
          </div>
        </div>
      </Feedback>
    </>
  );
};
export default App;
