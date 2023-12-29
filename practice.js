// document.addEventListener('DOMContentLoaded', () => {
//     const timeZoneUrl = "http://worldtimeapi.org/api/timezone";
//     async function fetchData() {
//         let data = await fetch(timeZoneUrl);
//         let dataJson = await data.json();
//         console.log(dataJson)
//         let createDropDownEl = document.createElement('select');
//         const body = document.body;
//         dataJson.forEach(element => {
//             let createOptEl = document.createElement('option');
//             createOptEl.value = element;
//             createOptEl.innerText = element;
//             createDropDownEl.append(createOptEl);

//         });
//         body.append(createDropDownEl);
//     }
//     fetchData();
// });
