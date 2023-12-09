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

waitThere('Conexão com o BD',rand(1,3)) // Um espera o outra executar 
    .then(response => {
        console.log(response);
        return waitThere('Buscando dados da BASE', rand(1,3));
    })
    .then(response => {
        console.log(response);
        return waitThere('Tratando os dados', rand(1,3));
    })
    .then(response => {
        console.log(response);
        return waitThere(2222, rand(1,3));
    })
    .catch();