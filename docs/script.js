// Getting Elements
const dateEle = document.getElementById("date");
const calculateBtn = document.querySelector(".calc_btn");
const ageText = document.querySelector(".age_text");
dateEle.max = new Date().toISOString().split("T")[0];

// Creating Functions

function getDate() {
    const userInput = dateEle.value;
    let userDate = new Date(userInput);
    const currentDate = new Date();

    let d1 = userDate.getDate();
    let m1 = userDate.getMonth() +1;
    let y1 = userDate.getFullYear();

    let d2 = currentDate.getDate();
    let m2 = currentDate.getMonth()+1;
    let y2 = currentDate.getFullYear();

    let y3,m3,d3;

    y3 = y2 -y1;

    if (m2>=m1) {
        m3 = m2-m1;
    } else {
        y3--;
        m3 = 12 + m2-m1
    }

    if (d2>=d1) {
        d3 = d2-d1
    } else {
        m3--;
        d3 = getDaysInAMoth(y1,m1)+ d2-d1
    }
    if (m3 <0) {
        m3 = 11;
        y3--;
    }

    console.log("YEars, months, days", y3,m3,d3);
    

    
    ageText.innerHTML = `
        You are <span class="years text-yellow-500">${y3}</span> years, <span class="months text-yellow-500">${m3}</span> months and <span class="days text-yellow-500">${d3}</span> days old.
    `
    
    
    
}

function getDaysInAMoth(year, month) {
    return new Date(year, month, 0).getDate();
}

// Calling Functions
calculateBtn.addEventListener("click", getDate)