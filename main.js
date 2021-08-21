let headCont=document.querySelectorAll('h2');
let delay=document.querySelector('.delay');
let mainEle=document.querySelector('main');
let you=document.querySelector('.you'), yourScore=0;
let comp=document.querySelector('.comp'), compScore=0, flag=0;
let rock=document.querySelector('.rock');
let paper=document.querySelector('.paper');
let scissor=document.querySelector('.scissor');
let message=document.querySelector('#mes');
let btn=document.querySelector('button');



// For score checking
function checkScore(){
    if(yourScore==5){
        yourScore=0, compScore=0;
        mainEle.style.display='none';
        message.style.display='block';
        btn.style.display='block';
        delay.style.display='none';
        message.innerHTML='You Win this Battle';
    }
    else if(compScore==5){
        compScore=0,  yourScore=0;
        mainEle.style.display='none';
        message.style.display='block';
        btn.style.display='block';
        delay.style.display='none';
        message.innerHTML='Machine Win this Battle';
    }
}


// To check the point
rock.addEventListener('click', ()=>{
    let random=parseInt(Math.random()*10);
    if(random%2!=0) yourScore++;
    else compScore++;
    you.innerHTML=yourScore, comp.innerHTML=compScore;
    checkScore();
});

paper.addEventListener('click', ()=>{
    let random=parseInt(Math.random()*10);
    if(random%2!=0) yourScore++;
    else compScore++;
    you.innerHTML=yourScore, comp.innerHTML=compScore;
    checkScore();
});

scissor.addEventListener('click', ()=>{
    let random=parseInt(Math.random()*10);
    if(random%2!=0) yourScore++;
    else compScore++;
    you.innerHTML=yourScore, comp.innerHTML=compScore;
    checkScore();
});


// For Try Again Screen
btn.addEventListener('click', ()=>{
    btn.style.display='none';
    mainEle.style.display='flex';
    message.style.display='none';
    delay.style.display='block';
    you.innerHTML=yourScore, comp.innerHTML=compScore;
});



//For Animations
let time=setInterval(slideChanger, 5000), i=0;
let time1=setTimeout(delayCont, 24000);
let time2=setTimeout(delayMain, 26000);

function slideChanger(){
    if(i==3){
        clearInterval(time); return;
    }
    if(i>0) headCont[i-1].style.display='none';
    headCont[i].style.display='block', i++;
    console.log(i);
}
function delayCont(){
    delay.style.display='block';
}
function delayMain(){
    mainEle.style.display='flex';
}
