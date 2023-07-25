// console.log("Hello");

// async function kitchen() {
//   try {
//     await abc;
//   } catch (error) {
//     console.log("abc does not exist", error);
//   } finally {
//     console.log("Runs code anyways");
//   }
// }

// kitchen();

// function toppings_choice() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("which topping would you love?"));
//     }, 3000);
//   });
// }

// // toppings_choice();

// async function kitchen() {
//   console.log("A");
//   console.log("B");
//   console.log("C");
//   await toppings_choice();
//   console.log("D");
//   console.log("E");
// }

// kitchen();

// console.log("doing the dishes");
// console.log("cleaning the tables");
// console.log("taking orders");

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

function time(ms) {
  return new Promise((reasolve, reject) => {
    if (is_shop_open) {
      setTimeout(reasolve, ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    // instruction here
    await time(2000);
    console.log(`${stocks.Fruits[0]} was selected`);

    await time(0);
    console.log("Production has started");

    await time(2000);
    console.log("fruits has been chopped");

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);

    await time(1000);
    console.log("start the machine");

    await time(2000);
    console.log(`ice cream placed on ${stocks.holder[0]}`);

    await time(3000);

    console.log(`${stocks.toppings[0]} as toppings`);

    await time(2000);

    console.log("Serve ice cream ");
  } catch (error) {
    //  error management here
    console.log("customer left");
  } finally {
    console.log("Day ended ,shop closed");
  }
}

kitchen();
