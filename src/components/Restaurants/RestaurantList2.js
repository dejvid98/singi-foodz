import sushi1 from "../../Assets/SushiLogos/5.jpg";
import sushi2 from "../../Assets/SushiLogos/6.png";
import sushi3 from "../../Assets/SushiLogos/7.png";
import sushi4 from "../../Assets/SushiLogos/8.jpg";
import sandwich1 from "../../Assets/SandwichLogos/5.png";
import sandwich2 from "../../Assets/SandwichLogos/6.png";
import sandwich3 from "../../Assets/SandwichLogos/7.jpg";
import sandwich4 from "../../Assets/SandwichLogos/8.jpg";
import pasta1 from "../../Assets/PastaLogos/5.jpg";
import pasta2 from "../../Assets/PastaLogos/6.png";
import pasta3 from "../../Assets/PastaLogos/7.jpg";
import pasta4 from "../../Assets/PastaLogos/8.png";
import indian1 from "../../Assets/IndianLogos/5.jpg";
import indian2 from "../../Assets/IndianLogos/6.png";
import indian3 from "../../Assets/IndianLogos/7.jpg";
import indian4 from "../../Assets/IndianLogos/8.png";
import bbq1 from "../../Assets/BbqLogos/5.jpg";
import bbq2 from "../../Assets/BbqLogos/6.png";
import bbq3 from "../../Assets/BbqLogos/7.jpg";
import bbq4 from "../../Assets/BbqLogos/4.jpg";
import pizza1 from "../../Assets/PizzaLogos/5.jpg";
import pizza2 from "../../Assets/PizzaLogos/6.png";
import pizza3 from "../../Assets/PizzaLogos/7.jpg";
import pizza4 from "../../Assets/PizzaLogos/8.jpg";
import pizza5 from "../../Assets/PizzaLogos/5.jpg";


let list = [
  {
    name: "China Town",
    raiting: 4.5,
    location: "Belička 31",
    price: 1,
    deliveryTime: 65,
    photo: sushi1,
    food: "sushi",
    isOpen: true
  },
  {
    name: "Sushi Masters",
    raiting: 4.5,
    location: "Nemanjina 4",
    price: 1,
    deliveryTime: 25,
    photo: sushi2,
    food: "sushi",
    isOpen: true
  },
  {
    name: "Tokyo Sushi",
    raiting: 4.5,
    location: "Deligradksa 27",
    price: 2,
    deliveryTime: 35,
    photo: sushi3,
    food: "sushi",
    isOpen: true
  },
  {
    name: "Moon Sushi Bar",
    raiting: 4.5,
    location: "Juzni Bulevar 33",
    price: 3,
    deliveryTime: 55,
    photo: sushi4,
    food: "sushi",
    isOpen: true
  },
  {
    name: "California Pizza",
    raiting: 4.5,
    location: "Baltička 12",
    price: 1,
    deliveryTime: 35,
    photo: pizza1,
    food: "pizza",
    isOpen: true
  },
  {
    name: "Dominos",
    raiting: 4.5,
    location: "Darosavačka 35",
    price: 1,
    deliveryTime: 45,
    photo: pizza2,
    food: "pizza",
    isOpen: true
  },
  {
    name: "Pizza Hut",
    raiting: 4.5,
    location: "Gandijeva 19",
    price: 2,
    deliveryTime: 55,
    photo: pizza3,
    food: "pizza",
    isOpen: true
  },
  {
    name: "Papa John's Pizza",
    raiting: 4.5,
    location: "Kalnička 90",
    price: 3,
    deliveryTime: 75,
    photo: pizza4,
    food: "pizza",
    isOpen: true
  },
  {
    name: "Belgrade Pizza",
    raiting: 4.5,
    location: "Skadarska 48",
    price: 1,
    deliveryTime: 45,
    photo: pizza5,
    food: "pizza",
    isOpen: false
  },
  {
    name: "McDonalds Singidunum",
    raiting: 4.5,
    location: "Kestenova 111",
    price: 1,
    deliveryTime: 45,
    photo: sandwich1,
    food: "sandwich",
    isOpen: true
  },
  {
    name: "Intergalactic Diner",
    raiting: 4.5,
    location: "Nemanjina 4",
    price: 1,
    deliveryTime: 55,
    photo: sandwich2,
    food: "sandwich",
    isOpen: true
  },
  {
    name: "Gastro Pub",
    raiting: 4.5,
    location: "Deligradksa 27",
    price: 2,
    deliveryTime: 25,
    photo: sandwich3,
    food: "sandwich",
    isOpen: true
  },
  {
    name: "Submarine Burger",
    raiting: 4.5,
    location: "Juzni Bulevar 33",
    price: 3,
    deliveryTime: 75,
    photo: sandwich4,
    food: "sandwich",
    isOpen: true
  },
  {
    name: "Street Pasta Bar",
    raiting: 4.5,
    location: "Bulevar kralja Aleksandra 126",
    price: 1,
    deliveryTime: 25,
    photo: pasta1,
    food: "pasta",
    isOpen: true
  },
  {
    name: "Monument",
    raiting: 4.5,
    location: "Nemanjina 4",
    price: 1,
    deliveryTime: 45,
    photo: pasta2,
    food: "pasta",
    isOpen: true
  },
  {
    name: "Blind Pig    ",
    raiting: 4.5,
    location: "Deligradksa 27",
    price: 2,
    deliveryTime: 35,
    photo: pasta3,
    food: "pasta",
    isOpen: true
  },
  {
    name: "Fast & Friendly    ",
    raiting: 4.5,
    location: "Juzni Bulevar 33",
    price: 3,
    deliveryTime: 65,
    photo: pasta4,
    food: "pasta",
    isOpen: true
  },
  {
    name: "Quick Bite    ",
    raiting: 4.5,
    location: "Bulevar kralja Aleksandra 126",
    price: 1,
    deliveryTime: 35,
    photo: indian1,
    food: "indian",
    isOpen: true
  },
  {
    name: "Soups & Snack    ",
    raiting: 4.5,
    location: "Nemanjina 4",
    price: 1,
    deliveryTime: 55,
    photo: indian2,
    food: "indian",
    isOpen: true
  },
  {
    name: "Golden Palace ",
    raiting: 4.5,
    location: "Deligradksa 27",
    price: 2,
    deliveryTime: 30,
    photo: indian3,
    food: "indian",
    isOpen: true
  },
  {
    name: "Miamiam",
    raiting: 4.5,
    location: "Juzni Bulevar 33",
    price: 3,
    deliveryTime: 60,
    photo: indian4,
    food: "indian",
    isOpen: true
  },
  {
    name: "Fare & Feed",
    raiting: 4.5,
    location: "Bulevar kralja Aleksandra 126",
    price: 1,
    deliveryTime: 25,
    photo: bbq1,
    food: "barbeque",
    isOpen: true
  },
  {
    name: "Macro Bites",
    raiting: 4.5,
    location: "Nemanjina 4",
    price: 1,
    deliveryTime: 45,
    photo: bbq2,
    food: "barbeque",
    isOpen: true
  },
  {
    name: "Melting Pot",
    raiting: 4.5,
    location: "Deligradksa 27",
    price: 2,
    deliveryTime: 35,
    photo: bbq3,
    food: "barbeque",
    isOpen: true
  },
  {
    name: "Cheerful Rhino",
    raiting: 4.5,
    location: "Juzni Bulevar 33",
    price: 3,
    deliveryTime: 40,
    photo: bbq4,
    food: "barbeque",
    isOpen: true
  }
];

export default list;
