import { data } from "./data.js";

const section = document.getElementById("directory-section");
const alphabetDiv = document.createElement("div");
data.forEach(({ alphabet, body }) => {
  const alphabetSection = document.createElement("div");
  const alphabetHeader = document.createElement("div");
  alphabetHeader.className = "styledLetter";
  alphabetHeader.innerText = alphabet;
  alphabetDiv.appendChild(alphabetHeader);
  alphabetSection.className = "card-list";

  body.forEach(({ name, dial_code, code }) => {
    const card = document.createElement("div");
    const cardHeading = document.createElement("span");
    const cardCode = document.createElement("span");
    const cardDialCode = document.createElement("span");
    card.className = "card-style";
    cardHeading.className = "card-heading";
    cardCode.className = "card-code";
    cardDialCode.className = "card-dial-code";
    cardHeading.innerText = name;
    cardDialCode.innerText = dial_code;
    cardCode.innerText = code;
    card.appendChild(cardHeading);
    card.appendChild(cardCode);
    card.appendChild(cardDialCode);
    alphabetSection.appendChild(card);
  });
  alphabetDiv.appendChild(alphabetSection);
});

section.appendChild(alphabetDiv);
