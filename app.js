const boxes=document.querySelectorAll(".box");
const msgcontainer=document.querySelector(".msg-container");
const msg=document.querySelector("#msg");
const new_btn=document.querySelector("#new-btn")
const reset_btn=document.querySelector('#reset')
const main=document.querySelector(".main");


const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];


  
let sign=true;
const resetbtn=()=>{
    sign=false;
    enableBoxes();
    msgcontainer.classList.add("hide")
    main.classList.remove("hide-main")
}
boxes.forEach((box)=>{
    box.addEventListener("click",function(){
        // console.log(boxes)
        // box.innerHTML="o"

        if(sign){
            box.innerHTML="O";
            
            sign=false;
        }else{
            box.innerHTML='X'
            sign=true;
        }
        box.disabled=true;

        cheakwinnwer();

    })
})
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congrats,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    main.classList.add("hide-main")
    disableBoxes();
  };
  

const cheakwinnwer=()=>{
    for (let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerHTML,boxes[pattern[1]].innerHTML,boxes[pattern[2]].innerHTML);

        let pos1=boxes[pattern[0]].innerHTML;
        let pos2=boxes[pattern[1]].innerHTML;
        let pos3=boxes[pattern[2]].innerHTML;
        if(pos1!="" &&  pos2!="" &&  pos3!=""){
           if(pos1===pos2 && pos2===pos3){

            showWinner(pos1);
           } 
        }
    }
}
new_btn.addEventListener("click",resetbtn);
reset_btn.addEventListener("click",resetbtn)