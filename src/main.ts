import exampleIconUrl from "./noun-paperclip-7598668-00449F.png";
import "./style.css";

document.body.innerHTML = `
  <p>Example image asset: <img src="${exampleIconUrl}" class="icon" /></p>
`;

//Work starts here
const myButton = document.createElement("button");
document.body.appendChild(myButton);

myButton.textContent = "🔴";

//Step 2

let redBallClicks: number = 0;

//Text element to show number of clicks
const myText = document.createElement("p");
myText.textContent = `Red balls: ${redBallClicks}`;
document.body.appendChild(myText);

//Button click event
myButton.onclick = () => {
  redBallClicks++;
  myText.textContent = `Red balls: ${redBallClicks}`;
};
