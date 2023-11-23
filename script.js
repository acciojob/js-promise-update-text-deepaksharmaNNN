//your JS code here. If required.
function updateTextWithPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello, world!');
    }, 1000);
  });
}

function updateElementText() {
  const outputElement = document.getElementById('output');

  updateTextWithPromise()
    .then(result => {
      outputElement.innerText = result;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Call the function to update the element text after the promise resolves
updateElementText();
