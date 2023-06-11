import React from 'react'

function Links({ alphabet, index }) {
  var colors = ['red', 'green', 'blue', 'yellow', 'pink', 'teal', 'brown', 'white', 'orange', 'lightblue', 'lightgreen', 'violet'];
  return (
    <div className="alpha-box" style={{ backgroundColor: colors[index % colors.length] }}>
      <a href={`https://example.com/${alphabet}`}>{alphabet}</a>
    </div>
  );
}

function Main() {

  // Define an array of colors

  // Create letter array for alphabets
  var alphabets = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

  return (
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