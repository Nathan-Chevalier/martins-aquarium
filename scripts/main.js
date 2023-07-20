// Import the FishList function from the correct module
import {
  holyFishList,
  soldierFishList,
  unworthyFishList,
} from "./fish/fishList.js";

const holyFishHTML = document.querySelector("#holyOutput");
const soldierFishHTML = document.querySelector("#soldierOutput");
const unworthyFishHTML = document.querySelector("#unworthyOutput");

holyFishHTML.innerHTML = holyFishList();
soldierFishHTML.innerHTML = soldierFishList();
unworthyFishHTML.innerHTML = unworthyFishList();
