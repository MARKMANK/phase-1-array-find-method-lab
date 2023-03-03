// function superbowlWin(myArray){
//     for(let element of myArray){
//         if(element.result === "W")
//             return element.year;
//         }
//     }


function superbowlWin(myArray){
    const isWinner = myArray.find((element) => {
        return element.result === 'W'
    })
    return isWinner ? isWinner.year : undefined
}