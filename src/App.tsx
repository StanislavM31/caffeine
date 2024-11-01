import minko from './assets/rounded_photo.png';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import coffee from './assets/coffeeBeans.png';
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
import avatar from './assets/avatar.svg';
import left from './assets/arrowLeft.svg';
import right from './assets/arrowRight.svg';
import { useCallback, useEffect, useState } from 'react';
import { Global, BackgroundPreview, CoffeeDiscovery, MenuList, Advantages, VisitCard, Feedback } from './style';
import { motion } from 'framer-motion';

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

const App = () => {
  const [count, setCount] = useState(0);
  const nextSlide = useCallback(() => {
    setCount(prevCount => (prevCount === sliderObj.length - 1 ? 0 : prevCount + 1));
  }, []);
  /* const nextSlide = () => (count === sliderObj.length - 1 ? setCount(0) : setCount(count + 1)); */
  const lastSlide = () => (count === 0 ? setCount(sliderObj.length - 1) : setCount(count - 1));

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <>
      <Global />
      <BackgroundPreview>
        <Header />
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          viewport={{ once: true }}
          className="landing"
        >
          <p>We’ve got your morning covered with</p>
          <motion.h1 initial={{ scale: 0.7 }} animate={{ scale: 1 }} transition={{ duration: 3 }}>
            Coffee
          </motion.h1>
          <p>
            It is best to start your day with a cup of coffee. Discover the best flavours coffee you will ever have. We provide the best for our
            customers.
          </p>
          <motion.button whileTap={{ scale: 1.3 }} className="button">
            Order Now
          </motion.button>
        </motion.div>
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
        <section id="menu">
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
        </section>
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
            <motion.img src={cup} alt="cup" initial={{ x: 100 }} whileInView={{ x: 0 }} transition={{ duration: 1 }} />
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
      <Footer />
    </>
  );
};
export default App;
