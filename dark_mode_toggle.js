
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
 document.querySelector(".main").classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        btn.textContent = "Light Mode"; // When dark mode is on
    } else {
        btn.textContent = "Dark Mode";  // When dark mode is off
    }
});

// const btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//  document.body.classList.toggle('dark-mode');
    
//     if (document.body.classList.contains('dark-mode')) {
//         btn.textContent = "Light Mode"; // When dark mode is on
//     } else {
//         btn.textContent = "Dark Mode";  // When dark mode is off
//     }
// });d