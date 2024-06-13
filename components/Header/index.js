// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const divElement = document.createElement('div');
    divElement.classList.add('header');
    const dateElement = document.createElement('span');
    dateElement.classList.add('date')
    dateElement.textContent = "SMARCH 28, 2019";
    const h1Element = document.createElement('h1');
    h1Element.textContent = "Lambda Times";
    const tempElement = document.createElement('span');
    tempElement.classList.add('temp');
    tempElement.textContent = "98°";

    divElement.append(dateElement);
    divElement.append(h1Element);
    divElement.append(tempElement);

    return divElement;
    }
    
const headerElement = document.querySelector('.header-container');
headerElement.append(Header())