/*
This is the shopForBeans function. It uses a setTimeout() function to simulate a time-consuming asynchronous action. The function returns a promise with a resolved value of a string representing a type of bean. It settles on a random beanType from the beanTypes array using Math.random().
*/

const shopForBeans = () => {
  return new Promise((resolve, reject) => {
    const beanTypes = ["kidney", "fava", "pinto", "black", "garbanzo"];
    setTimeout(() => {
      let randomIndex = Math.floor(Math.random() * 5);
      let beanType = beanTypes[randomIndex];
      console.log(`2. I bought ${beanType} beans because they were on sale.`);
      resolve(beanType);
    }, 1000);
  });
};

let soakTheBeans = (beanType) => {
  return new Promise((resolve, reject) => {
    console.log("Time to soak the beans.");
    setTimeout(() => {
      console.log(`... The ${beanType} beans are softened.`);
      resolve(true);
    }, 1000);
  });
};

let cookTheBeans = (isSoftened) => {
  return new Promise((resolve, reject) => {
    console.log("Time to cook the beans.");
    setTimeout(() => {
      if (isSoftened) {
        console.log("... The beans are cooked!");
        resolve("\n\nDinner is served!");
      }
    }, 1000);
  });
};

let randomSuccess = () => {
  let num = Math.random();
  if (num < 0.5) {
    return true;
  } else {
    return false;
  }
};

//This function returns a promise that resolves half of the time and rejects half of the time
let cookBeanSouffle = () => {
  return new Promise((resolve, reject) => {
    console.log("Fingers crossed... Putting the Bean Souffle in the oven");
    setTimeout(() => {
      let success = randomSuccess();
      if (success) {
        resolve("Bean Souffle");
      } else {
        reject("Dinner is ruined!");
      }
    }, 1000);
  });
};

module.exports = { shopForBeans, soakTheBeans, cookTheBeans, cookBeanSouffle };
