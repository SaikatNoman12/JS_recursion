/* === JavScript Recursion === */

//  use recursion;
function countDown(number) {

    console.log(number);

    const newNumber = number - 1;

    if (newNumber >= 0) {

        countDown(newNumber);

    }
    
}

countDown(10);


// setInterVal use js recursion;
function timeOut(time) {

    // display time;
    console.log(time);

    const newTime = time - 1;

    let interVal = setInterval(function () {

        if (newTime >= 0) {

            timeOut(newTime);

        }

        clearInterval(interVal);

    }, 1000);

}



timeOut(12);
