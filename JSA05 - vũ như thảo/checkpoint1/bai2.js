document.getElementById('cIn').addEventListener('submit', function(event) {
    event.preventDefault();
    var numB = document.getElementById('number').value;
  
    for (let i = 1; i <= numB; ++i) {
        for (let j = 1; j <= i; ++j) {
          console.log("* ");
        }
      }

});