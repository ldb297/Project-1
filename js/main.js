// Definte global variables 
// Create DOM elements 
// Create functions
// Attach eventListeners

window.alert("WARNING: This game may potentially trigger seizures for people with photosensitive epilepsy. ***Viewer discretion is advised*** A very small percentage of people may experience a seizure when exposed to certain visual images, including flashing lights or visual patterns. Even people who have no history of seizures or epilepsy may have an undiagnosed condition that can cause these 'photosensitive epileptic seizures' while watching/playing certain video games. These seizures may have a variety of symptoms, including lightheadedness, altered vision, eye or face twitching, jerking or shaking of arms or legs, disorientation, confusion, or momentary loss of awareness. Seizures may also cause loss of consciousness or convulsions that can lead to injury from falling down or striking nearby objects. Immediately stop viewing and consult a doctor if you experience any of these symptoms. Parents should watch for or ask their children about the above symptoms. Children and teenagers are more likely than adults to experience these seizures. The risk of photosensitive epileptic seizures may be reduced by taking the following precautions: View in a well-lit room. Do not view if you are drowsy or fatigued. View with some distance from the image so that it fills less of one's field of vision. If you or any of your relatives have a history of seizures or epilepsy, it is recommended that you consult a doctor before viewing.")

let heartbeat1;
let heartbeat2;
let heartbeat3;
let heartbeat4;

let userHp = 100
let userAtk = 5
let userDef = 3

let monsterHp = 50
let monsterOneAtk = 10

let userAtkImg = document.getElementById('userAtk')
let userDefImg = document.getElementById('userDef')
let monsterAtkImg = document.getElementById('monsterAtk')
let atkButton = document.querySelectorAll('button')[0]
let defButton = document.querySelectorAll('button')[1]

healthDisplay = () =>{
    clearInterval(heartbeat1)
    clearInterval(heartbeat2)
    clearInterval(heartbeat3)
    clearInterval(heartbeat4)
    if (userHp > 75){
    heartbeat1 = setInterval(heartbeat1 = () => {
        setTimeout(rate = () =>{
            document.body.style.backgroundColor = "red";
        }, 250)
        setTimeout(rest = () =>{
            document.body.style.backgroundColor = "darkgrey";
        }, 550)
    }, 2500);
    } else if (userHp <=75 && userHp > 50){
    heartbeat2 = setInterval(heartbeat2 = () =>{
        setTimeout(rate = () =>{
            document.body.style.backgroundColor = "red";
        }, 250)
        setTimeout(rest = () =>{
            document.body.style.backgroundColor = "darkgrey";
        }, 550)
    }, 1500);
    } else if (userHp <= 50 && userHp > 25){
    heartbeat3 = setInterval(heartbeat3 = () => {
        setTimeout(rate = () =>{
            document.body.style.backgroundColor = "red";
        }, 250)
        setTimeout(rest = () =>{
            document.body.style.backgroundColor = "darkgrey";
        }, 550)
    }, 1000);
    } else if (userHp <= 25){
    heartbeat4 = setInterval(heartbeat4 = () => {
        setTimeout(rate = () =>{
            document.body.style.backgroundColor = "red";
        }, 250)
        setTimeout(rest = () =>{
            document.body.style.backgroundColor = "darkgrey";
        }, 550)
    }, 250);
    }   
}
healthDisplay()

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
reload = () =>{
    location.reload()
}
userDeath = () =>{
    window.alert("You dead son")
    setTimeout(reload, 250)
}
monsterDeath = () =>{
    window.alert("He dead son")
}

atkButton.addEventListener('click', attack = () =>{
    setTimeout(hideButtons, 50)
    setTimeout(showUserAtk, 160)
    setTimeout(hideUserAtk, 1615)
    monsterHp = monsterHp - (Math.floor(Math.random() * 6) + userAtk)
    setTimeout(showMonsterAtk,1615)
    setTimeout(hideMonsterAtk, 2890)
    userHp = userHp - (Math.floor(Math.random() * 6) + monsterOneAtk)
    healthDisplay()
    console.log(`userHp = ${userHp}`)
    console.log(`monsterHp = ${monsterHp}`)
    setTimeout(showButtons, 3000)
    if (userHp <= 0){
        setTimeout(userDeath, 2000)
    } else if (monsterHp <= 0){
        monsterDeath()
        setTimeout(nextMonster, 1500)
    }
})

defButton.addEventListener('click', defend = () =>{
    setTimeout(hideButtons, 50)
    setTimeout(showMonsterAtk, 160)
    setTimeout(hideMonsterAtk, 1615)
    userHp = userHp - ((Math.floor(Math.random() * 6) + monsterOneAtk) - (Math.floor(Math.random() * 6) + userDef))
    monsterHp = monsterHp - (Math.floor(Math.random() * 3))
    healthDisplay()
    setTimeout(showUserDef, 1615)
    setTimeout(hideUserDef, 2890)
    console.log(`userHp = ${userHp}`)
    console.log(`monsterHp = ${monsterHp}`)
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

// setInterval(heartbeat2 = () =>{
//     if(userHp <=75 && userHp > 50){
//         setTimeout(rate = () =>{
//             document.body.style.backgroundColor = "red";
//         }, 250)
//         setTimeout(rest = () =>{
//             document.body.style.backgroundColor = "darkgrey";
//         }, 550)
//     }
// }, 1500);

// setInterval(heartbeat3 = () =>{
//     if(userHp >= 50 && userHp > 25 ){
//         setTimeout(rate = () =>{
//             document.body.style.backgroundColor = "red";
//         }, 250)
//         setTimeout(rest = () =>{
//             document.body.style.backgroundColor = "darkgrey";
//         }, 550)
//     }
// }, 1000);

// setInterval(heartbeat4 = () =>{
//     if(userHp <= 25 ){
//         setTimeout(rate = () =>{
//             document.body.style.backgroundColor = "red";
//         }, 250)
//         setTimeout(rest = () =>{
//             document.body.style.backgroundColor = "darkgrey";
//         }, 550)
//     }
// }, 250);

// setInterval(heartbeat1 = () =>{
//     if(userHp > 75){
//         setTimeout(rate = () =>{
//             document.body.style.backgroundColor = "red";
//         }, 250)
//         setTimeout(rest = () =>{
//             document.body.style.backgroundColor = "darkgrey";
//         }, 550)
//     } else if (userHp <= 75 && userHp > 50){
//         setTimeout(rate = () =>{
//             document.body.style.backgroundColor = "red";
//         }, 250)
//         setTimeout(rest = () =>{
//             document.body.style.backgroundColor = "darkgrey";
//         }, 550)
//     } else if (userHp <= 50 && userHp > 25){
//         setTimeout(rate = () =>{
//             document.body.style.backgroundColor = "red";
//         }, 250)
//         setTimeout(rest = () =>{
//             document.body.style.backgroundColor = "darkgrey";
//         }, 550)
//     } else if (userHp <= 25){
//         setTimeout(rate = () =>{
//             document.body.style.backgroundColor = "red";
//         }, 250)
//         setTimeout(rest = () =>{
//             document.body.style.backgroundColor = "darkgrey";
//         }, 550)
//     }
// }, 2500);