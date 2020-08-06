
const partyHeader = document.getElementById('party');

// input string will be converted into a <p> tag and then 
// appended to the input HTML Element
export const htmlGenerator = (string, htmlElement) => {
    const newElement = document.createElement("p");
    newElement.textContent = string;

    htmlElement.appendChild(newElement);
};
console.log("hello world!");
htmlGenerator('Party Time.', partyHeader);