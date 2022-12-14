const p1button = document.querySelector('#p1button');
const p2button = document.querySelector('#p2button');
const p2display = document.querySelector('#p2display');
const p1display = document.querySelector('#p1display');

const resetbutton=document.querySelector('#reset');
const winingScoreSelect=document.querySelector('#playto');


let p1score = 0;
let p2score=0;
let winingscore = 0;

let isGameOver=false;



p1button.addEventListener('click', function () {


    if(!isGameOver){
        p1score += 1;
        if(p1score===winingscore){
            isGameOver=true;
            p1display.classList.add('winner');
            p2display.classList.add('loser');
            p1button.disabled=true;
            p2button.disabled=true;

        } 
        p1display.textContent = p1score;

    }
   
})

p2button.addEventListener('click', function () {


    if(!isGameOver){
        p2score += 1;
        if(p2score===winingscore){
            isGameOver=true;
            p2display.classList.add('has-text-success');
            p1display.classList.add('has-text-danger');
            p1button.disabled=true;
            p2button.disabled=true;


        }
        p2display.textContent = p2score;

    }
   
})

winingScoreSelect.addEventListener('click',function(){
   winingscore=parseInt(this.value);
   reset();
})

resetbutton.addEventListener('click',reset)

function reset(){
    isGameOver=false;
    p1score=0;
    p2score=0;
    p1display.textContent=0;
    p2display.textContent=0;
    p1display.classList.remove('has-text-success','has-text-danger');
    p2display.classList.remove('has-text-success','has-text-danger');
    p1button.disabled=false;
    p2button.disabled=false;


}
