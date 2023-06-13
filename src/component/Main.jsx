import React, { useEffect, useState } from 'react'

function Links({ alphabet }) {
  useEffect(() => {
    const interval = setInterval(() => {
      const boxes = document.getElementsByClassName('alpha-box');
      Array.from(boxes).forEach((box) => {
        box.style.backgroundColor = randomColor();
      });
    }, 1500);

    return () => {
      /* Clearing the interval with clearInterval() in the return statement of the useEffect() hook is a best practice to clean up any ongoing processes when the component unmounts or when the dependencies of the useEffect() hook change. It helps prevent memory leaks and ensures that the interval is properly cleared when the component is no longer in use.*/
      clearInterval(interval);
    };
  }, []);

  function randomColor() {
    const hexadecimal = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexadecimal[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div>
      <a href={`https://example.com/${alphabet}`}>
        <div className="alpha-box">{alphabet}</div>
      </a>
    </div>
  );
}


function Main() {

  
  // Create letter array for alphabets
  var alphabets = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  /*
  // Define an array of colors
  window.onload = function() {
    const heading = document.querySelector('.colorized-heading');
    if (heading) {
      const text = heading.textContent;
      const coloredText = Array.from(text).map(letter => {
        const randomColor = getRandomColor();
        return `<span style="color: ${randomColor}">${letter}</span>`;
      }).join('');
  
      heading.innerHTML = coloredText;
    }
  };

  function getRandomColor() {
    const hexadecimal = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexadecimal[Math.floor(Math.random() * 16)];
    }
    return color;
  }
*/
  return (
    <div>
      <h1 className="colorized-heading">Alphabet Blocks</h1>
      <div className="alpha-container">
        <div className="row-1">
          {alphabets.map((alphabet, index) => {
            if(index < 13) {
              return <Links key={alphabet} alphabet={alphabet} index={index} />
            }
            return null;
          })}
        </div>
        <div className="row-2">
          {alphabets.map((alphabet, index) => {
            if(index >= 13) {
              return <Links key={alphabet} alphabet={alphabet} index={index} />
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default Main;

  /*
  // Get the body element
  var body = document.getElementsByTagName('body')[0];
  // Loop through the alphabets array
  alphabets.forEach(function(alphabet, index) {
    // Create a new div element
    var div = document.createElement('div');
    div.className = 'ltrbracket';

    // Assign a color from the colors array
    div.style.backgroundColor = colors[index % colors.length];

    var link  = document.createElement('A');
    link.href = 'https"//example.com/' + alphabet;
    link.textcontent = alphabet;

    // Set the inner text as the current alphabet
    div.innerText = alphabet;

    // Append the div to the body element
    body.appendChild(div);
  });
  */

  /*
  In this updated code, a new getRandomColor() function is added. This function generates a random color code by randomly selecting characters from the set of hexadecimal values (0-9, A-F) and concatenating them to form a valid color code in the format "#RRGGBB".

Within the map() function, each letter is assigned a random color by calling the getRandomColor() function, and the HTML structure with the colored letters is formed.

By using this updated code, the colors of the letters in the <h1> element will be randomized on every page load.

Please make sure to include this updated JavaScript code in your project and ensure that the HTML content includes an element with the class name "colorized-heading".
  */


/*
function Links({ alphabet, index }) {
  var colors = ['red', 'green', 'blue', 'yellow', 'pink', 'teal', 'brown', 'orange', 'lightblue', 'lightgreen', 'violet'];
  return (
    <div>
      <a href={`https://example.com/${alphabet}`}>
      <div 
        className="alpha-box" 
        style={{ backgroundColor: colors[index % colors.length] }}>
          {alphabet}
      </div>
      </a>
    </div>
  );
}
// var colors = ['red', 'green', 'blue', 'yellow', 'pink', 'teal', 'brown', 'orange', 'lightblue', 'lightgreen', 'violet'];
*/