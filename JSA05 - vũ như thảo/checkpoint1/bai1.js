document.getElementById('cIn').addEventListener('submit', function(event) {
    event.preventDefault();
    var numB = document.getElementById('number').value;
    let k = 1
    for( let i=1; i <= numB; i++){
         k =  k * i;
       }
       console.log("giai thừa của " + numB + " là: " + k);
});
