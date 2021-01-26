// Definte global variables 
// Create DOM elements 
// Create functions
// Attach eventListeners

let userHp = 100
let userAtk = 5
let userDef = 3

let monsterHp = 20
let monsterOneAtk = 5

let atkButton = document.querySelectorAll('button')[0]
let defButton = document.querySelectorAll('button')[1]

userDeath = () =>{
    window.alert("You dead son")
}

monsterDeath = () =>{
    window.alert("He dead son")
}

atkButton.addEventListener('click', attack = () =>{
    monsterHp = monsterHp - userAtk
    userHp = userHp - monsterOneAtk
    console.log(userHp)
    console.log(monsterHp)
    if (userHp <= 0){
        userDeath()
    } else if (monsterHp <= 0){
        monsterDeath()
    }
})

defButton.addEventListener('click', defend = () =>{
    let finalLoss = monsterOneAtk - userDef
    userHp = userHp - finalLoss
    console.log(userHp)
    console.log(monsterHp)
    if (userHp <= 0){
        userDeath()
    } else if (monsterHp <= 0){
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