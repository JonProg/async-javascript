function rand(min,max){
    min*=1000;
    max*=1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function waitThere(msg,time){
    return new Promise((resolve,reject) =>{
        if (typeof msg !== "string") reject(new Error('type error'));

        setTimeout(()=>{
            resolve(msg); 
        },time);
    });
}

async function execute(){
    try{
        const stage1 = await waitThere('Stage 1',2000);
        console.log(stage1);

        const stage2 = await waitThere('Stage 2',1000);
        console.log(stage2);

        const stage3 = await waitThere('Stage 3',3000);
        console.log(stage3);
    }catch(e){
        console.log(e);
    }
}

execute();

