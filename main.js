const clock=document.querySelector(".clock");
let info=document.querySelector("#info");
let sec=0,min=0,hr=0,intervalId;
let cc=0;// defined to avoid multiple click on start button

const startwatch=()=>{
    if(cc==1){
        console.log("Clock already started.");
        info.textContent="Timer Already Started"
    return;
    }
    cc=1;
    info.textContent="Timer Started";
    intervalId=setInterval(() => {
        if(sec<59){
            sec++;
        }
       else if(min>=59){
            hr++;
            min=0;
        }
        else{
            sec=0;
            min++;
        }
        const seconds=String(sec).padStart(2,"0"); // padStart here ensures that though the values are of single digit they will start with 0 making all values double digits.
        const minutes=String(min).padStart(2,"0");
        const hours  =String(hr).padStart(2,"0");
        clock.textContent=`${hours}:${minutes}:${seconds}`;
    }, 1000);

}

const stopwatch=()=>{
    cc=0;
    info.textContent="Timer Stopped";
    clearInterval(intervalId);// the interval will restart from beginning but the text shown on screen will still be remaining from where it was stopped. The seconds,minutes,hours will have the same value from where they were stopped.
}

const restartWatch=()=>{
    cc=0;
    info.textContent="Timer Set To Default";
    clearInterval(intervalId);
    sec=0;
    min=0;
    hr=0;
    const seconds=String(sec).padStart(2,"0"); 
    const minutes=String(min).padStart(2,"0");
    const hours  =String(hr).padStart(2,"0");
    clock.textContent=`${hours}:${minutes}:${seconds}`;
}