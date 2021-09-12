const convertSecondToTime=(second)=>{
    let s=second%60;
    let m=Math.floor(second/60);
    if(s<10){
        s="0"+s;
    }
    if(m<10){
        m="0"+m;
    }
    return m+":"+s;
}

const SWList=[];

const stopWatchApp=document.getElementById("mysw");

const buttonAdd=document.getElementById("btnAddsw");
buttonAdd.addEventListener("click",()=>{
    const newStopWatch=new myStopWatch();
    stopWatchApp.appendChild(newStopWatch.$container);
    SWList.push(newStopWatch)
});



const buttonStopAll=document.getElementById("btnStopAll");
buttonStopAll.addEventListener("click",()=>{
    SWList.forEach((a)=>{
        a.handleStop();
    })
})

class myStopWatch{
    count=0;
    interval=0;
    $container;
    $textTimer;
    $buttonStart;
    $buttonPause;
    $buttonStop;

    constructor(){
        this.$container=document.createElement("div");

        this.$textTimer=document.createElement("span");
        this.$textTimer.innerHTML="00:00";

        this.$buttonStart=document.createElement("button");
        this.$buttonStart.innerHTML="Start";
        this.$buttonStart.addEventListener("click",this.handleStart)
        

        this.$buttonPause=document.createElement("button");
        this.$buttonPause.innerHTML="Pause";
        this.$buttonPause.addEventListener("click",this.handlePause)

        this.$buttonStop=document.createElement("button");
        this.$buttonStop.innerHTML="Stop";
        this.$buttonStop.addEventListener("click",this.handleStop)

        this.$container.appendChild(this.$textTimer);
        this.$container.appendChild(this.$buttonStart);
        this.$container.appendChild(this.$buttonPause);
        this.$container.appendChild(this.$buttonStop);

    }

    handleStart=()=>{
        this.interval=setInterval(()=>{
            this.count++;
            this.$textTimer.innerHTML=convertSecondToTime(this.count);
        },1000)
    }

    handlePause=()=>{
        clearInterval(this.interval);
    }

    handleStop=()=>{
        clearInterval(this.interval);
        this.$textTimer.innerHTML="00:00";
        this.count=0
    }
}
