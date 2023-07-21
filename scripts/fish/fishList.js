// Import the function that returns a copy of the fish array
import { getFish } from "./database.js";

// Filters 'holy' fish based on being divisible by 3
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

// Filters "soldiers" based on being divisible by 5
const soldierFish = () => {
  let soldier = [];
  let fishes = getFish();

  for (const fish of fishes) {
    if (fish.length % 5 === 0) {
      soldier.push(fish);
    }
  }
  return soldier;
};

// Filters "unworthy" fish who are divisible neither by 3 or 5
const unworthyFish = () => {
  let unworthy = [];
  let fishes = getFish();

  for (const fish of fishes) {
    if (fish.length % 5 !== 0 && fish.length % 3 !== 0) {
      unworthy.push(fish);
    }
  }
  return unworthy;
};

export const holyFishList = () => {
  const fishes = mostHolyFish();

  let htmlString =
    '<article class="fishList"><header class="header__flexbox">PRAISE THE HOLIEST OF FISH</header>';

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

export const soldierFishList = () => {
  const fishes = soldierFish();

  let htmlString =
    '<article class="fishList"><header class="header__flexbox">PRAISE BE THE SOLDIERS</header>';

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

export const unworthyFishList = () => {
  const fishes = unworthyFish();

  let htmlString =
    '<article class="fishList"><header class="header__flexbox">CAST OUT YE WHO IS NOT CHOSEN</header>';

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

// export const nonHolyFish = () => {
//   // Any fish not a multiple of 3 or 5
//   return regularFish;
// };
