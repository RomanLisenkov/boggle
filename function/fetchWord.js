let urlWord = 'https://api.dictionaryapi.dev/api/v2/entries/en/hello'

function check (word) {
    let x = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
const xhr = new XMLHttpRequest()
let c
xhr.open('GET', x)

xhr.responseType = 'json'

xhr.onload = () => {
    
    return console.log(xhr.response[0]?.word)
}

xhr.send()
}

check('eeeeeeeeeeeeeeeee')






// function sendRequest (method, url, body = null) {
//     return fetch(url).then(response => {
//         console.log(response.status)
//         return response.json()
//         // return console.log(response.json()[0].word)
//     }).then(data => {
//         return data[0]?.word})
// }

// let checkedWord

//  sendRequest('GET', urlWord)
//     .then(data => {
//         let checkedWord = data[0].word
//         console.log(checkedWord)
//     })
//     .catch()





