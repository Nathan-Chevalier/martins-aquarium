// Import the FishList function from the correct module
import { fishList } from "./fishList.js";

const parentHTMLElement = document.querySelector("#fishOutput");

parentHTMLElement.innerHTML = fishList();
