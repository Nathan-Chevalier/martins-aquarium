import { getTips } from "../fish/database.js";

export const tipsList = () => {
  const tips = getTips();
  let htmlString = `<article class ="tipsList">`;
  for (const tip of tips) {
    htmlString += `<div class="tipsList__tip">${tip}</div>`;
  }
  htmlString += `</article>`;
  return htmlString;
};
