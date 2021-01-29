// Definte global variables 
// Create DOM elements 
// Create functions
// Attach eventListeners

window.alert("WARNING: This video may potentially trigger seizures for people with photosensitive epilepsy. Viewer discretion is advised.A very small percentage of people may experience a seizure when exposed to certain visual images, including flashing lights or visual patterns. Even people who have no history of seizures or epilepsy may have an undiagnosed condition that can cause these 'photosensitive epileptic seizures' while watching video games. These seizures may have a variety of symptoms, including lightheadedness, altered vision, eye or face twitching, jerking or shaking of arms or legs, disorientation, confusion, or momentary loss of awareness. Seizures may also cause loss of consciousness or convulsions that can lead to injury from falling down or striking nearby objects. Immediately stop viewing and consult a doctor if you experience any of these symptoms. Parents should watch for or ask their children about the above symptoms. Children and teenagers are more likely than adults to experience these seizures. The risk of photosensitive epileptic seizures may be reduced by taking the following precautions: View in a well-lit room. Do not view if you are drowsy or fatigued. View with some distance from the image so that it fills less of one's field of vision. If you or any of your relatives have a history of seizures or epilepsy, it is recommended that you consult a doctor before viewing.")

let heartbeat1;
let heartbeat2;
let heartbeat3;
let heartbeat4;
let backMusic = new Audio("./sounds/bgmusic.mp3")
let soundOne;
let soundTwo;
let soundThree;

let userHp = 100
let userAtk = 5
let userDef = 3

let monsterOneHp = 25
let monsterOneAtk = 5
let monsterTwoHp = 50
let monsterTwoAtk = 10
let monsterThreeHp = 100
let monsterThreeAtk = 20

let userAtkImg = document.getElementById('userAtk')
let userDefImg = document.getElementById('userDef')
let monsterAtkImg = document.getElementById('monsterAtk')
let monsterOne = document.getElementById('monsterOne')
let monsterTwo = document.getElementById('monsterTwo')
let monsterThree = document.getElementById('monsterThree')
let atkButton = document.querySelectorAll('button')[0]
let defButton = document.querySelectorAll('button')[1]
let chooseAtk = document.getElementById('chooseAtk')
let chooseHp = document.getElementById('chooseHp')
let fighterBox = document.getElementsByClassName('fighterModel')
let monsterBox = document.getElementsByClassName('monsterModel')

backMusic.play()
healthDisplay = () =>{
    clearInterval(heartbeat1)
    clearInterval(heartbeat2)
    clearInterval(heartbeat3)
    clearInterval(heartbeat4) 
    if (userHp > 75){
    heartbeat1 = setInterval(heartbeat1 = () => {
        setTimeout(rate = () =>{
            document.body.style.backgroundColor = "red";
        }, 50)
        setTimeout(rest = () =>{
            document.body.style.backgroundColor = "darkgrey";
        }, 350)
    }, 2500);
    } else if (userHp <=75 && userHp > 50){
    heartbeat2 = setInterval(heartbeat2 = () =>{
        setTimeout(rate = () =>{
            document.body.style.backgroundColor = "red";
        }, 50)
        setTimeout(rest = () =>{
            document.body.style.backgroundColor = "darkgrey";
        }, 350)
    }, 1500);
    } else if (userHp <= 50 && userHp > 25){
    heartbeat3 = setInterval(heartbeat3 = () => {
        setTimeout(rate = () =>{
            document.body.style.backgroundColor = "red";
        }, 50)
        setTimeout(rest = () =>{
            document.body.style.backgroundColor = "darkgrey";
        }, 350)
    }, 1000);
    } else if (userHp <= 25){
    heartbeat4 = setInterval(heartbeat4 = () => {
        setTimeout(rate = () =>{
            document.body.style.backgroundColor = "red";
        }, 50)
        setTimeout(rest = () =>{
            document.body.style.backgroundColor = "darkgrey";
        }, 250)
    }, 500);
    }   
}
healthDisplay()

showFightButtons = () =>{
    atkButton.style.display = "flex";
    defButton.style.display = "flex";
}
hideFightButtons = () =>{
    atkButton.style.display = "none";
    defButton.style.display = "none";
}
showBuffButtons = () =>{
    chooseAtk.style.display = "flex";
    chooseHp.style.display = "flex";
}
hideBuffButtons = () =>{
    chooseAtk.style.display = "none";
    chooseHp.style.display = "none";
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
hideMonsterOne = () =>{
    monsterOne.style.display = "none";    
}
showMonsterTwo = () =>{
    monsterTwo.style.display = "flex";    
}
hideMonsterTwo = () =>{
    monsterTwo.style.display = "none";
}
showMonsterThree = () =>{
    monsterThree.style.display ="flex";
}
reload = () =>{
    location.reload()
}
userDeath = () =>{
    hideFightButtons()
    soundOne = new Audio("./sounds/learn.mp3")
    soundOne.play()
    setTimeout(window.alert("You dead son"), 2500)
    setTimeout(reload, 6250)
}

monsterDeath = () =>{
    hideFightButtons()
    setTimeout(showBuffButtons, 100)
    chooseAtk.addEventListener('click', atkBoost = () =>{
        userAtk = userAtk + 5
        console.log(userAtk)
    })
    chooseHp.addEventListener('click', hpBoost = () =>{
        userHp = userHp + 50
        console.log(userHp)
    })
    setTimeout(hideBuffButtons, 2100)
    setTimeout(showFightButtons, 2150)
    setTimeout(nextMonster, 2200)
}

nextMonster = () =>{ 
    if (monsterOneAtk <= 5){
        soundOne = new Audio("./sounds/damage1.mp3")
        soundOne.play()
        hideMonsterOne()
        showMonsterTwo()
        monsterOne = monsterTwo
        monsterOneAtk = monsterTwoAtk
        monsterOneHp = monsterTwoHp
        console.log(monsterOneAtk)
    } else if (monsterOneAtk > 5 && monsterOneAtk < 20){
        soundOne = new Audio("./sounds/damage2.mp3")
        soundOne.play()
        hideMonsterTwo()
        showMonsterThree()
        monsterOne = monsterThree
        monsterOneAtk = monsterThreeAtk
        monsterOneHp = monsterThreeHp
        console.log(monsterOneAtk)
    } else {
        window.alert("wait, you killed jeff...what the heff dude chill")
        setTimeout(reload, 250)
    }
}

atkButton.addEventListener('click', attack = () =>{
    soundOne = new Audio("./sounds/oof.mp3")
    soundTwo = new Audio("./sounds/re-hit.mp3")
    healthDisplay()
    monsterOneHp = monsterOneHp - (Math.floor(Math.random() * 5) + userAtk)
    if (monsterOneHp > 0){
        setTimeout(hideFightButtons, 50)
        setTimeout(showUserAtk, 150)
        setTimeout(soundOne.play(), 300)
        setTimeout(hideUserAtk, 650)
        setTimeout(showMonsterAtk,650)
        setTimeout(soundTwo.play(), 800)
        setTimeout(hideMonsterAtk, 1250)
        userHp = userHp - (Math.floor(Math.random() * 3) + monsterOneAtk)
    }
    console.log(`userHp = ${userHp}`)
    console.log(`monsterOneHp = ${monsterOneHp}`)
    setTimeout(showFightButtons, 1500)
    if (userHp <= 0){
        setTimeout(userDeath, 1500)
    } else if (monsterOneHp <= 0){
        window.alert("He dead son")
        monsterDeath()
    }
})

defButton.addEventListener('click', defend = () =>{
    healthDisplay()
    soundOne = new Audio("./sounds/tryit.mp3")
    soundOne.play()
    setTimeout(hideFightButtons, 50)
    setTimeout(showMonsterAtk, 150)
    setTimeout(hideMonsterAtk, 650)
    userHp = userHp - ((Math.floor(Math.random() * 6) + monsterOneAtk) - (Math.floor(Math.random() * 6) + userDef))
    monsterOneHp = monsterOneHp - (Math.floor(Math.random() * 3))
    setTimeout(showUserDef, 650)
    setTimeout(hideUserDef, 1250)
    console.log(`userHp = ${userHp}`)
    console.log(`monsterOneHp = ${monsterOneHp}`)
    setTimeout(showFightButtons, 1500)
    if (userHp <= 0){
        setTimeout(userDeath, 1500)
    } else if (monsterOneHp <= 0){
        window.alert("He dead son")
        monsterDeath()
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