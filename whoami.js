var input = "";

function start() {
  input = confirm("Do you fly?")
    ? confirm("Are u wild?")
      ? console.log("Eagle")
      : console.log("Parrot")
    : confirm("Do u live under the sea?")
    ? confirm("Are u wild?")
      ? console.log("Shark")
      : console.log("Dolphine")
    : confirm("Are u wild?")
    ? console.log("Lion")
    : console.log("Cat");
}

start();

// function whoAMI() {
//   var input;
//   input = prompt("Do you fly?");
//   if (input === "yes") {
//     input = prompt("Are u wild?");
//     if (input === "no") {
//       console.log("Eagle");
//     } else if (input === "no") {
//       console.log("Parrot");
//     }
//   } else if (input === "no") {
//     input = prompt("Do u live under the sea?");
//     if (input === "yes") {
//       input = prompt("Are u wild?");
//       if (input === "yes") {
//         console.log("Shark");
//       } else if (input === null) {
//         console.log("Dolphine");
//       }
//     } else if (input === "no") {
//       input = prompt("Are u wild?");
//       if (input === "yes") {
//         console.log("Lion");
//       } else if (input === "no") {
//         console.log("Cat");
//       }
//     }
//   }
// }

// whoAMI();
