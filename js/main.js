// Definte global variables 
// Create DOM elements 
// Create functions
// Attach eventListeners

let userHp = 100
let userAtk = 5
let userDef = 3

let monsterHp = 50
let monsterOneAtk = 5

let userAtkImg = document.getElementById('userAtk')
let userDefImg = document.getElementById('userDef')
let monsterAtkImg = document.getElementById('monsterAtk')
let atkButton = document.querySelectorAll('button')[0]
let defButton = document.querySelectorAll('button')[1]

// document.body.style.backgroundColor = "red"


showButtons = () =>{
    atkButton.style.display = "flex";
    defButton.style.display = "flex";
}
hideButtons = () =>{
    atkButton.style.display = "none";
    defButton.style.display = "none";
}
showUserAtk = () =>{
    userAtkImg.style.display = "flex";
}
hideUserAtk = () =>{
    userAtkImg.style.display = "none";
}
showMonsterAtk = () =>{
    monsterAtkImg.style.display = "flex";
}
hideMonsterAtk = () =>{
    monsterAtkImg.style.display = "none";
}
showUserDef = () =>{
    userDefImg.style.display = "flex";
}
hideUserDef = () =>{
    userDefImg.style.display = "none";
}

userDeath = () =>{
    window.alert("You dead son")
}

monsterDeath = () =>{
    window.alert("He dead son")
}

atkButton.addEventListener('click', attack = () =>{
    setTimeout(hideButtons, 350)
    setTimeout(showUserAtk, 360)
    setTimeout(hideUserAtk, 1615)
    monsterHp = monsterHp - userAtk
    setTimeout(showMonsterAtk,1615)
    setTimeout(hideMonsterAtk, 2890)
    userHp = userHp - monsterOneAtk
    console.log(userHp)
    console.log(monsterHp)
    setTimeout(showButtons, 3000)
    if (userHp <= 0){
        setTimeout(userDeath, 2000)
    } else if (monsterHp <= 0){
        monsterDeath()
        setTimeout(nextMonster, 1500)
    }
})

defButton.addEventListener('click', defend = () =>{
    setTimeout(hideButtons, 350)
    setTimeout(showMonsterAtk, 360)
    setTimeout(hideMonsterAtk, 1615)
    let finalLoss = monsterOneAtk - userDef
    userHp = userHp - finalLoss
    setTimeout(showUserDef, 1615)
    setTimeout(hideUserDef, 2890)
    console.log(userHp)
    console.log(monsterHp)
    setTimeout(showButtons, 3000)
    if (userHp <= 0){
        setTimeout(userDeath, 2000)
    }
})




// BULK CODE USED FOR TESTING REMOVED DURING REFORMATTING
// attack = () =>{
//     userHp = userHp - monsterOneAtk
//     console.log(userHp)
// }

// defend = () =>{
//     finalLoss = monsterOneAtk - userDef
//     console.log(finalLoss)
//     userHp = userHp - finalLoss
//     console.log(userHp)
// }

// userAtk = () =>{
//     monsterOneHp = monsterOneHp - userAtk
// }

// userDef = () =>{
//     let finalLoss = monsterOneAtk - userDef
//     userHp = userHp - finalLoss
// }

// monsterAtk = () =>{
//     userHp = userHp - monsterOneAtk
// }

// atkButton.addEventListener('click', hide = () =>{
//     atkButton.style.display = 'none';
// })


// const hpDisplay = () =>{
//     document.body.style.backgroundColor = "darkgrey"
//     const timer = setInterval(() =>{
//         time = userHp;
//         if (userHp <= 75){
//             this.time = 750
//         }

//     }, 1000)
// }
// resting heart rate is 60bpm/1 beat per 1000ms
// full grey, switch to red for 80ms
// heartbeat function that determines how long it stays red with timeout function. 
// if else or switch stament within function to change timeout parameters 