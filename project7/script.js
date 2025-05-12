let heading = document.querySelector(".heading")
// console.log(heading)
// console.log(heading.dataset.text)
// console.log(heading.dataset.speed)
let count = 0;
let coun
let put
let test = '';
let again

function typeJs() {

    again = heading.innerHTML += heading.dataset.text.charAt(count)
    count++;
    if (count == heading.dataset.text.length + 1) {
        //clearInterval(stop);
        //heading.innerHTML="";
        //count=0;
        put = again.split("")
        test = put.join("")
        //console.log(test)

        coun = test.length + 2
        //heading.innerHTML+= test.charAt(coun)
        heading.innerHTML = ""
        againcount()
        //console.log(coun)
        heading.innerHTML = ""

    }

}
//typeJs()
//typeJs()
let stop = setInterval(() => {
    typeJs()
}, heading.dataset.speed)



function againcount() {
    coun--
    heading.innerHTML += test.charAt(coun)
    if (coun == -1) {
        //clearInterval(end);
        heading.innerHTML = ""
        count = 0
    }
}



let end = setInterval(() => {
    againcount()
}, 500)































