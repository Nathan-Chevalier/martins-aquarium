// Import the FishList function from the correct module
import { fishList } from "./fish/fishList.js";

const parentHTMLElement = document.querySelector("#fishOutput");

parentHTMLElement.innerHTML = fishList();
