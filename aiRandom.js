//AI random unoccupied tile

let unoccupiedTiles = [1, 2, 3, 4, 5, 6, 7 ,8];//list of available tiles

function aiNextMove(){
    let nextTile = 0;//next move of AI, 0 as placeholder
let i = 0;
while (!i == 1){//loop until i is TRUE
    let randNum = Math.random();//0.0 to 0.9
    nextTile = Math.ceil(randNum*10);//move to next integer
    if(unoccupiedTiles.includes(nextTile)){
        i = 1;//if tile is valid, set i to TRUE
    }
    }
return nextTile;//out the next move
};

aiNextMove();//call

