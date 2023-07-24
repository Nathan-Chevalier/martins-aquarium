// Import the FishList function from the correct module
import {
  holyFishList,
  soldierFishList,
  unworthyFishList,
} from "./fish/fishList.js";

import { tipsList } from "./tips/tipsList.js";

import { locList } from "./locations/locList.js";

const holyFishHTML = document.querySelector("#holyOutput");
const soldierFishHTML = document.querySelector("#soldierOutput");
const unworthyFishHTML = document.querySelector("#unworthyOutput");
const tipsHTML = document.querySelector("#tipsOutput");
const locHTML = document.querySelector("#locOutput");

holyFishHTML.innerHTML = holyFishList();
soldierFishHTML.innerHTML = soldierFishList();
unworthyFishHTML.innerHTML = unworthyFishList();
tipsHTML.innerHTML = tipsList();
locHTML.innerHTML = locList();
