// function booking(){
//     return new Promise((resolve, reject) => {
//         let status = false;
//         if(status) {
//             resolve();
//         }else{
//             reject();
//         }
//     });
// }

// booking().then( () => {
//     console.log("Booking is successful");
// }).catch( () => {console.log("Booking is Pending")});

// function reached1(){
//     return new Promise((resolve, reject) => {
//         let status = false;
//         if(status){
//             setTimeout(() => resolve("Ela Reached"), 1000);
//         }else{
//             reject("Ela Not Reached");
//         }
//     });
// }

// function reached2(){
//     return new Promise((resolve, reject) => {
//         let status = false;
//         if(status){
//             setTimeout(() => resolve("Bharathi Reached"), 8000);
//         }else{
//             reject("Bharathi Not Reached");
//         }
//     });
// }

// // Promise.all([reached1(), reached2()]).then((msg) => {
// //     console.log(msg);
// // }).catch((err) => {
// //     console.log(err);
// // });


// async function reached(){
//     try{
//         let status1 = await reached2();
//         console.log(status1);
//     }catch(err){
//         console.log(err);
//     }
   
// }

// reached()

// fetch('https://official-joke-api.appspot.com/jokes/programming/random')
// .then((msg) =>msg.json())
// .then((msg) => console.log(msg[0].setup))

let currency = document.querySelectorAll('.currency');

fetch('https://api.frankfurter.app/latest')
  .then(response => response.json())
  .then(data =>  updatedCurrencyInSelect(Object.entries(data)[3]));

  function updatedCurrencyInSelect(data){
    
    for(let [key, value] of Object.entries(data[1])){
        let option = `<option value="${key}">${key}</option>`
        currency[0].innerHTML+= option;
        currency[1].innerHTML+= option;
    }
}
function updateCurrency(){
    let currencySlect1 = currency[0].value,currencySlect2 = currency[1].value;
    let inputValue = document.getElementById('input').value;

    if(currency[0].value == currency[1].value){
        alert('Please select different currencies');
    }else{
        const host = 'api.frankfurter.app';
        fetch(`https://${host}/latest?amount=${inputValue}&from=${currencySlect1}&to=${currencySlect2}`)
        .then(resp => resp.json())
        .then((data) => {
            document.getElementById('result').value = Object.values(data.rates)[0]
        });
    }
}

document.getElementById('btn').addEventListener('click', updateCurrency)



