function perfectSquare(num) {
    let squared = Math.sqrt(num) + 1

    if (Math.sqrt(num) % 1 === 0) {
        while (squared % 1 !== 0) {
            squared += 1
        }
        console.log(squared * squared)
    } else {
        console.log(-1)
    }
}

perfectSquare(9) // should return 16 (3x3=9, 4x4=16)

perfectSquare(289) // should return 324 (17x17=289 18x18=324)

perfectSquare(3000) // should return -1 (sq root of 3000 is 54.77)

perfectSquare(16)