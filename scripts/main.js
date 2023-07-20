// Import the FishList function from the correct module
import { fishList } from "./fish/fishList.js";

const holyFishHTML = document.querySelector("#holyOutput");

holyFishHTML.innerHTML = fishList();
