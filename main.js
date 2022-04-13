
const randomizer = arr => arr[(Math.floor(Math.random() * arr.length))]

// define API endpoints
const prodRootAPI = 'https://random-words-api.vercel.app/word'
// const prodFuncAPI = 'https://itsthisforthat.com/api.php?json'
const prodFuncAPI = '/.netlify/functions/node-fetch/thisforthat'
const prodUseAPI = 'https://corporatebs-generator.sameerkumar.website/'


const prodSuffix = ['.ai','.io','o','a','i','Coin','NFT','NFTprojekt','Krypto','Crypto','r','.eth','Stream','Hero','Cash','Kash'];

document.querySelector('button').addEventListener('click', generateConvoAPI)


function generateConvoAPI() {
    // let prodRoot
     const broLeft = document.getElementById('broLeft')
     const broRight = document.getElementById('broRight')
     const api1 = document.getElementById('api1')
     const api2 = document.getElementById('api2')
     const api3 = document.getElementById('api3')

    fetch(prodRootAPI)
        .then(res => res.json())
        .then(data => { 
            //  console.table(data[0].word)
            //  api1.innerText = `${data[0].word}${randomizer(prodSuffix)}`
             broLeft.innerText = `Bro! ${data[0].word}${randomizer(prodSuffix)} sounds SICK... but what does it, like, do?`
            }
        )
        .catch(err => console.log(`Error: ${err}`))
        
    fetch(prodFuncAPI)
        .then(res => res.json())
        .then(data => {
            // console.table([data.this, data.that])
            // api2.innerText = `${data.this}, but for ${data.that.toLowerCase()}`
            broRight.innerText = `Okay, so hear me out. It's like ${data.this}, but for ${data.that.toLowerCase()}!`
            }
        )
        .catch(err => console.log(`Error: ${err}`))
    
    // fetch(prodUseAPI)
    //     .then(res => res.json())
    //     .then(data => {
    //         // console.table(data.phrase)
    //         // api3.innerText = `${data.phrase.toLowerCase()}`
    //         broRight.innerText = broRight.innerText + `and it's gonna ${data.phrase.toLowerCase()}!`
    //     })
    //     .catch(err => console.log(`Error: ${err}`))

    // const result1 = api1.innerText
    // const result2 = api2.innerText
    // const result3 = api3.innerText
    // // const finalAPI = [api1.innerText, api2.innerText, api3.innerText]
    // const finalAPI = [result1, result2, result3]
    // return finalAPI

        
}
generateConvoAPI()
// let textvar = generateConvoAPI()
