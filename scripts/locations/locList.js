import { getLoc } from "../fish/database.js";

export const locList = () => {
  const locations = getLoc();
  let htmlString = `<article class ="locList">`;
  for (const location of locations) {
    htmlString += `<div class="locList__loc">-${location.location}<br>-${location.airport}</div>`;
  }
  htmlString += `</article>`;
  return htmlString;
};
