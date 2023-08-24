function printAsync() {
    console.log("Teste");
 };

 function printAsync2() {
    setTimeout((printAsync) => {
        console.log("Texto teste")
    }, 2000);
 };

 printAsync();