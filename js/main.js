// Definte global variables 
// Create DOM elements 
// Create functions
// Attach eventListeners

window.alert("WARNING: This video may potentially trigger seizures for people with photosensitive epilepsy. Viewer discretion is advised.A very small percentage of people may experience a seizure when exposed to certain visual images, including flashing lights or visual patterns. Even people who have no history of seizures or epilepsy may have an undiagnosed condition that can cause these 'photosensitive epileptic seizures' while watching video games. These seizures may have a variety of symptoms, including lightheadedness, altered vision, eye or face twitching, jerking or shaking of arms or legs, disorientation, confusion, or momentary loss of awareness. Seizures may also cause loss of consciousness or convulsions that can lead to injury from falling down or striking nearby objects. Immediately stop viewing and consult a doctor if you experience any of these symptoms. Parents should watch for or ask their children about the above symptoms. Children and teenagers are more likely than adults to experience these seizures. The risk of photosensitive epileptic seizures may be reduced by taking the following precautions: View in a well-lit room. Do not view if you are drowsy or fatigued. View with some distance from the image so that it fills less of one's field of vision. If you or any of your relatives have a history of seizures or epilepsy, it is recommended that you consult a doctor before viewing.")

let heartbeat1;
let heartbeat2;
let heartbeat3;
let heartbeat4;

let userHp = 100
let userAtk = 5
let userDef = 3

let monsterOneHp = 50
let monsterOneAtk = 5
let monsterTwoHp = 75
let monsterTwoAtk = 10
let monsterThreeHp = 100
let monsterThreeAtk = 25

let userAtkImg = document.getElementById('userAtk')
let userDefImg = document.getElementById('userDef')
let monsterAtkImg = document.getElementById('monsterAtk')
let atkButton = document.querySelectorAll('button')[0]
let defButton = document.querySelectorAll('button')[1]
let buffAtk = document.getElementById('chooseAtk')
let buffHp = document.getElementById('chooseHp')
let monsterOne = document.getElementById('monsterOne')
let monsterTwo = document.getElementById('monsterTwo')
let monsterThree = document.getElementById('monsterThree')

healthDisplay = () =>{
    if (userHp > 75){
    heartbeat1 = setInterval(heartbeat1 = () => {
        setTimeout(rate = () =>{
            document.body.style.backgroundColor = "#8c4d49";
        }, 250)
        setTimeout(rest = () =>{
            document.body.style.backgroundColor = "darkgrey";
        }, 550)
    }, 2500);
    } else if (userHp <=75 && userHp > 50){
    heartbeat2 = setInterval(heartbeat2 = () =>{
        setTimeout(rate = () =>{
            document.body.style.backgroundColor = "#91423d";
        }, 250)
        setTimeout(rest = () =>{
            document.body.style.backgroundColor = "darkgrey";
        }, 550)
    }, 1500);
    } else if (userHp <= 50 && userHp > 25){
    heartbeat3 = setInterval(heartbeat3 = () => {
        setTimeout(rate = () =>{
            document.body.style.backgroundColor = "#7a2a25";
        }, 250)
        setTimeout(rest = () =>{
            document.body.style.backgroundColor = "darkgrey";
        }, 550)
    }, 1000);
    } else if (userHp <= 25){
    heartbeat4 = setInterval(heartbeat4 = () => {
        setTimeout(rate = () =>{
            document.body.style.backgroundColor = "#80140d";
        }, 250)
        setTimeout(rest = () =>{
            document.body.style.backgroundColor = "darkgrey";
        }, 550)
    }, 550);
    }   
    clearInterval(heartbeat1)
    clearInterval(heartbeat2)
    clearInterval(heartbeat3)
    clearInterval(heartbeat4)
}
healthDisplay()

hideMonsterOne = () =>{
    monsterOne.style.display = "none";
}
showMonsterOne = () =>{
    monsterOne.style.display = "flex";
}
hideMonsterTwo = () =>{
    monsterTwo.style.display = "none";
}
showMonsterTwo = () =>{
    monsterTwo.style.display = "flex";
}
hideMonsterThree = () =>{
    monsterThree.style.display = "none";
}
showMonsterThree = () =>{
    monsterThree.style.display = "none";
}
showFightButtons = () =>{
    atkButton.style.display = "flex";
    defButton.style.display = "flex";
}
hideFightButtons = () =>{
    atkButton.style.display = "none";
    defButton.style.display = "none";
}
showBuffButtons = () =>{
    buffAtk.style.display = "flex";
    buffHp.style.display = "flex";
}
hideBuffButtons = () =>{
    buffAtk.style.display = "none";
    buffHp.style.display = "none";
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
    hideFightButtons()
    setTimeout(showBuffButtons(), 50)
    setTimeout(hideBuffButtons(), 1000)
    setTimeout(showFightButtons(), 1000)
    setTimeout(nextMonster(), 1250)
    setTimeout(window.alert("He dead son"), 1000)
}

nextMonster = () =>{ 
    if (monsterOne === monsterOne){
    hideMonsterOne()
    showMonsterTwo()
    monsterOne = monsterTwo
    monsterOneAtk = monsterTwoAtk
    monsterOneHp = monsterTwoHp
    } else if (monsterTwo === monsterTwo ){
        hideMonsterTwo()
        showMonsterThree()
        monsterTwo = monsterThree
        monsterTwoAtk = monsterThreeAtk
        monsterTwoHp = monsterThreeHp
    } else {
        window.alert("wait, you killed jeff what the heff dude chill")
    }
}

atkButton.addEventListener('click', attack = () =>{
    healthDisplay()
    setTimeout(hideFightButtons, 50)
    setTimeout(showUserAtk, 160)
    setTimeout(hideUserAtk, 1615)
    monsterOneHp = monsterOneHp - (Math.floor(Math.random() * 5) + userAtk)
    setTimeout(showMonsterAtk,1615)
    setTimeout(hideMonsterAtk, 2890)
    userHp = userHp - (Math.floor(Math.random() * 3) + monsterOneAtk)
    console.log(`userHp = ${userHp}`)
    console.log(`monsterOneHp = ${monsterOneHp}`)
    setTimeout(showFightButtons, 3000)
    if (userHp <= 0){
        setTimeout(userDeath, 2000)
    } else if (monsterOneHp <= 0){
        hideFightButtons()
        hideMonsterAtk()
        hideUserAtk()
        monsterDeath()
    }
})

defButton.addEventListener('click', defend = () =>{
    healthDisplay()
    setTimeout(hideFightButtons, 50)
    setTimeout(showMonsterAtk, 160)
    setTimeout(hideMonsterAtk, 1615)
    userHp = userHp - ((Math.floor(Math.random() * 6) + monsterOneAtk) - (Math.floor(Math.random() * 6) + userDef))
    monsterOneHp = monsterOneHp - (Math.floor(Math.random() * 3))
    setTimeout(showUserDef, 1615)
    setTimeout(hideUserDef, 2890)
    console.log(`userHp = ${userHp}`)
    console.log(`monsterOneHp = ${monsterOneHp}`)
    setTimeout(showFightButtons, 3000)
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