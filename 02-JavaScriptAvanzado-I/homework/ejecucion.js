function printing() {
   console.log(1); //1
   setTimeout(function() { console.log(2); }, 1000); //4
   setTimeout(function() { console.log(3); }, 0); //3
   console.log(4); //2
}

printing();