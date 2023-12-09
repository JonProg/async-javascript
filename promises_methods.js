function rand(min,max){
    min*=1000;
    max*=1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function waitThere(msg,time){
    return new Promise((resolve,reject) =>{
        if (typeof msg !== "string") reject(new Error('type error')) // chama o catch()

        setTimeout(()=>{
            resolve(msg); // chama o then() retornando a msg
        },time);
    });
}

const promises = [
    waitThere('promise 1', 5000),
    waitThere('promise 2', 3000),
    waitThere('promise 3', 1000),
];

Promise.all(promises)
    .then(response => console.log(response))
    .catch()

Promise.race(promises)
    .then(response => console.log(response))
    .catch()

function downloadPage(){
    const inCache = true;
    if (inCache){
        return Promise.resolve('Página em cache'); //Promise.reject para rejeitar a promessa
    }
    return waitThere('Baixa a pagiína',3000);

}

downloadPage()
    .then(response => {
        console.log('response')
    })
    .catch();