let currentMoleTile;
let currentPlantTile;
let score=0;
let GameOver=false;

document.getElementById("score").innerHTML='0';

window.onload=function(){
    setGame();
}

let reset=document.getElementById("reset");
reset.addEventListener("click",restart)


function restart(){
GameOver=false;
score=0;
document.getElementById("score").innerHTML="0";
document.getElementById("msg").innerHTML="";
}

function setGame(){
    for(let i=0;i<9;i++)
    {
        let tile=document.createElement("div");
        tile.id=i.toString()
        document.getElementById("border").appendChild(tile);  
        tile.addEventListener("click",setTile);      
    }
    setInterval(setMole,800);
    setInterval(setPlant,900);
}
    function getRandomTile(){
        let num=Math.floor(Math.random()*9);
        return num.toString();
    }


    function setMole(){
        if(GameOver)
        {
            return;
        }

        if(currentMoleTile)
        {
            currentMoleTile.innerHTML="";
        }

        let mole=document.createElement("img");
        mole.src="/images/mole.png";



        let num=getRandomTile();
        
        if(currentPlantTile && currentPlantTile.id==num)
            {
                return;
            }

        currentMoleTile=document.getElementById(num);
        currentMoleTile.appendChild(mole);        
    }


    function setPlant()
    {
        if(GameOver)
        {
            return;
        }

        if(currentPlantTile)
        {
            currentPlantTile.innerHTML="";
        }
        
        let plant=document.createElement("img");
        plant.src="/images/plant.png";

        let num=getRandomTile();

        
        if(currentMoleTile && currentMoleTile.id==num)
            {
                return;
            }
        currentPlantTile=document.getElementById(num);
        currentPlantTile.appendChild(plant);
    }

    function setTile()
    {
        if(this==currentMoleTile)
        {
            score+=10;
            document.getElementById("score").innerText=score.toString();
            console.log(score);
        }
        else if(this==currentPlantTile)
        {
            GameOver=true;
            document.getElementById("msg").innerText="Game Over!"
        }
    }