const product = {
  name: "iPhone X",
  price: 300,
  description: "Bestseller 2021!",
  article: "12412",
  techSpec: {
    processor: "M1",
    memory: "8",
  },
  reviews: [
    {
      name: "Alexandra",
      date: "12-03-2021",
      text: "Exellent!",
    },
    {
      name: "Bogdan",
      date: "03-04-2021",
      text: "Good",
    },
  ],
};

const getProductBasicInfo = ({name, description, price})=> { // var {name, description, price} = argument
    return {
        name,
        description,
        price,
    }
}
const showReviews = ({reviews}) => {
    for(const {name: author, date, text} of reviews) {
        console.log(`Author: ${author}. Date: ${date}. Text: ${text}`)
    }
}

const productBasicInfo = getProductBasicInfo(product);
// console.log(productBasicInfo)
// showReviews(product);

const user = {
    name: "Тайвин",
    lastName: "Ланнистер",
    status: "глава дома Ланнистеров",
    castle: "Утес Кастерли",
    words: "Услышь мой рев!",
    sword: "Светлый рев",
    vasalls: ["Ланнистеры из Ланниспорта"],
    children: {
        son: "Джейме",
        dauther: "Серсея"
    }
};

const spliceUserInfo = user => {
    const {name, lastName, status, ...additionalInfo} = user;
    const mainInfo = {
        name,
        lastName,
        status
    };
    return {
        mainInfo,
        additionalInfo
    }
};

const {additionalInfo} = spliceUserInfo(user);
console.log(additionalInfo);