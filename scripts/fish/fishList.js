// Import the function that returns a copy of the fish array
import { getFish } from "./database.js";

const mostHolyFish = () => {
  // 3, 6, 9, 12, etc... fish
  let holyFish = [];
  let fishes = getFish();

  for (const fish of fishes) {
    if (fish.length % 3 === 0) {
      holyFish.push(fish);
    }
  }

  return holyFish;
};

export const fishList = () => {
  const fishes = mostHolyFish();

  let htmlString = '<article class="fishList">';

  for (const fish of fishes) {
    htmlString += `<section class="fishCard">
            <div><img class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <hr>
            <div class="fish__species fish--font"><b>Species: </b>${fish.species}</div>
            <div class="fish__length fish--font"><b>Length: </b>${fish.length}cm</div>
            <div class="fish__location fish--font"><b>Location: </b>${fish.location}</div>
            <div class="fish__diet fish--font"><b>Food: </b>${fish.food}</div>
        </section>
`;
  }
  htmlString += `</article>`;

  return htmlString;
};

// export const soldierFish = () => {
//   // 5, 10, 15, 20, 25, etc... fish
//   return soldiers;
// };

// export const nonHolyFish = () => {
//   // Any fish not a multiple of 3 or 5
//   return regularFish;
// };
