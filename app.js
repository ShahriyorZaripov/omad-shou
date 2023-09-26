
alert("Omadingizni sinab koring 3 ta imkoniyatingiz bor")



const text = document.querySelector('.h1')
const btn = document.querySelector('.spin')
const b = document.querySelector('.bb')

let box = document.querySelector('.box')
let counter = 1


function myfunction() {
    let y = 989
    let x = 9159
    
    
    let deg = Math.floor(Math.random() * (x-y) +x);
    console.log(deg);
     
    text.innerHTML = counter++
    box.style.transform = `rotate(${deg}deg)`
    if(counter > 3){

        b.classList.add("add")
          btn.classList.add("display")
    }
}   









// btn.addEventListener("click" , function () {
//         console.log(counter++); 
//         if (counter <= 4) {
//             let win = Math.floor(Math.random() * users.length);
//             user.innerHTML = users[win].name;
//             }else{
//             user.innerHTML = "Imkoniyatingiz tugadi"
//         }
//     }
// )



