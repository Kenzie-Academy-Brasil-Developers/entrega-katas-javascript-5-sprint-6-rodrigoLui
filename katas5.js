// implemente aqui as funções de teste


// KATA 01
function testeReverseString1() {
    let result = reverseString("Kenzie Academy");
    let expected = "ymedacA eizneK";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testeReverseString2() {
    let result = reverseString(`Kenzie${2} ${4}Academy`);
    let expected = "ymedacA4 2eizneK";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function reverseString (str) {
    let strArray = str.split(' ')
    let reverseStr = new Array

    for (let i = 0; i < strArray.length; i++) {
        str = strArray[i].split('')
        str.reverse()
        let takeOutSpace = str.join(' ').replace(/\s/g, '')
        reverseStr.push(takeOutSpace)
    }
    reverseStr.reverse()
    return reverseStr.join(' ')
} 
testeReverseString1()
testeReverseString2()

// KATA 02
const testReverseSentence1 = () => {
    let result = reverseSentence("bob likes dogs")
    let expected = "dogs likes bob"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
const testReverseSentence2 = () => {
    let result = reverseSentence(`bob - likes ${2} dogs #`)
    let expected =  "# dogs 2 likes - bob"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const reverseSentence = (str) => {
    let strArray = str.split(' ')
    strArray.reverse()
    return strArray.join(' ')
}
testReverseSentence1 ()
testReverseSentence2 ()

// KATA 03
const testMinimumValue1 = (num) => {
    let result = minimumValue([4,1,2,8,4,3])
    let expected =  1
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
const testMinimumValue2 = (num) => {
    let result = minimumValue([45,20,"h",8,40,33])
    let expected =  8
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const minimumValue = num => {
    let minValue = num[0]
    for (let i = 0; i < num.length; i++) {
        if (minValue > num[i]) {
            minValue = num[i]
        }
    }
    return minValue
}

testMinimumValue1()
testMinimumValue2()

// KATA 04
const testMaximumValue1 = () => {
    let result = maximumValue([90,67,50,130,324,9,1,73])
    let expected = 324
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
const testMaximumValue2 = () => {
    let result = maximumValue([90,67,50,130,'T',324,9,1,73])
    let expected = 324
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const maximumValue = num => {
    let maxValue = num[0]
    for (let i = 0; i < num.length; i++) {
        if (maxValue < num[i]) {
            maxValue = num[i]
        }        
    }
    return maxValue
}
testMaximumValue1()
testMaximumValue2()

// KATA 05
const testCalculateRemainder1 = () => {
    let result = calculateRemainder(8, 2)
    let expected = 0
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
const testCalculateRemainder2 = () => {
    let result = calculateRemainder(3, 2)
    let expected = 1
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const calculateRemainder = (numberDivided, numberDivider) => { 
    return numberDivided % numberDivider 
}
testCalculateRemainder1()
testCalculateRemainder2()

// KATA 06

const testDistinctValues1 = () => {
    let result = distinctValues([2,2,1,4,1,3,8,8,3]).toString()
    let expected = [1,2,3,4,8]
    console.assert(result === expected.toString(), `esperado: ${expected}, obtido: ${result}`)
}
const testDistinctValues2 = () => {
    let result = distinctValues([3,4,2,-6,1,7,3,2,5,1,4,1,3]).toString()
    let expected = [-6,1,2,3,4,5,7]
    console.assert(result === expected.toString(), `esperado: ${expected}, obtido: ${result}`)
}

const distinctValues = numbers => {
    let arrayDistinct = new Array
    
    for (let i = 0; i < numbers.length; i++) {
        let position = arrayDistinct.indexOf(numbers[i])
        if (position === -1) {
            arrayDistinct.push(numbers[i])
        }
    }
    return arrayDistinct.sort((a, b) => a - b)
} 
testDistinctValues1 ()
testDistinctValues2 ()

// KATA 07

const testCountValues1 = () => {
    let result = countValues("1 3 5 3 7 3 1 1 5")
    let expected = "1(3) 3(3) 5(2) 7(1)"
    console.assert(result.toString === expected.toString, `esperado: ${expected}, obtido: ${result}`)
}
const testCountValues2 = () => {
    let result = countValues('1 2 1 1 2 2')
    let expected = '1(3) 2(3)'
    console.assert(result.toString === expected.toString, `esperado: ${expected}, obtido: ${result}`)
}

const countValues = value => {
    let arrayStr = new Array
    let arrayCaractere = value.split(' ')

    const objCaractere = {};
    for (let i = 0; i < arrayCaractere.length; i++) {
        let pegaCaractere = arrayCaractere[i];
        if (objCaractere[pegaCaractere ] === undefined) {
            objCaractere[pegaCaractere ] = 1; 
        } else { 
            objCaractere[pegaCaractere ]++; 
        }
    }
    
    for (let caracter in objCaractere) { 
        arrayStr.push(`${caracter}(${objCaractere[caracter]}) `)
    }

    return arrayStr.join(' ')
}
testCountValues1()
testCountValues2()

//KATA 08

const testEvaluateExpression1 = () => {
    let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
    let expected = -3
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
const testEvaluateExpression2 = () => {
    let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
    let expected = -3
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const  evaluateExpression = (valueStr, obj) => {
    let result = 0
    let chunkStr = valueStr.split(' ')

    for (let i = 0; i < chunkStr.length; i++) {
        let aux = Object.keys(obj)[i]

        if (chunkStr[i] === aux) {
            aux = obj[aux]
            chunkStr[i] = aux
        }
    }

    return result
}

testEvaluateExpression1()
testEvaluateExpression2()