// implemente aqui as funções de teste
function testeReverseString1() {
    let result = reverseString("Kenzie Academy");
    let expected = "ymedacA eizneK";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function reverseString (str) {
    let strArray = new Array
    let reverseStr = new Array
    strArray = str.split(' ')

    for (let i = 0; i < strArray.length; i++) {
        let txt = strArray[i].split('')

        console.log("txt : ", txt)

        reverseStr.push(txt)
    }

    return reverseStr
}