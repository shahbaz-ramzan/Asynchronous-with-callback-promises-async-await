// console.log("hello");
// console.log("I");
// console.log("like");
// console.log("mangoes");

// console.log("I");
// setTimeout(() => {
//   console.log("mangoes");
// }, 1000);
// console.log("like");

// function one() {
//   console.log("first step completed now call two");
// }

// function two() {
//   console.log("second step");
// }

// one();
// two();

// function one() {
//     console.log("first step completed now call two");
//   }

//   function two() {
//     console.log("second step");
//   }

//   two();
//   one();

// function one() {
//   console.log("first step completed now call two");
//   two();
// }

// function two() {
//   console.log("second step");
// }

// one();

// function one(call_two) {
//   call_two();

//   console.log("first step completed now call two");
// }

// function two() {
//   console.log("second step");
// }

// one(two);

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let order = (fruit_name, call_production) => {
  //   console.log("order placed please call production");
  setTimeout(() => {
    console.log(`${stocks.Fruits[fruit_name]} was selected`);
    call_production();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log("production has started");

    setTimeout(() => {
      console.log("The fruits has been chopped");

      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);

        setTimeout(() => {
          console.log("Start the machine");

          setTimeout(() => {
            console.log(`Ice creeam placed on ${stocks.holder[1]}`);

            setTimeout(() => {
              console.log(`${stocks.toppings[0]} as toppings`);

              setTimeout(() => {
                console.log("Serve Ice cream");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
};

order(0, production);
