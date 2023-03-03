
 // Miner
 // 5.9999999999976h
 var bal = document.querySelector(".bal");
 var rew = document.querySelector(".rew");
 bal.innerHTML = (localStorage.x0 == undefined) ? "0.000000" : localStorage.x0
let giveaway = {
    name:"Mai Anguwa Chain",
    reward(){
        return 0.001666666666666
    },
    start(){
        if(!localStorage.x0){
            localStorage.setItem("x0","0.0000000000")
            this.mining();
        }
        else if(localStorage.x0){
            this.mining();
        }
    },
    mining(){
        //+localStorage.x0++;
        let bln = +localStorage.x0 + this.reward()
        localStorage.setItem("x0",bln)
        bal.innerHTML = localStorage.x0
        rew.innerText = this.reward()
    }
}

setInterval(function (){
giveaway.start();
},1000);