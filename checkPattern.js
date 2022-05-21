//checks if a list of numbers, representing tile id's, contain any of the combinations
//returns true or false
//todo
	//[x] patterns array
	//[x] loop form
	//[x]array includes this array checker

//VAR
let tictactoePatterns = [
    [7,5,3],
    [1,5,9],
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9]
    ]; //declare array containing array of patterns for tictactoe victory; tiles start from L-R from 1 to 9 - DONE
let ticArrayPlayer1 = [];//declare array for testing
     
//MODULE 
//Single Pattern Checker - DONE
//Remarks
///array with 1-9 works as it returns 1
///array with 1-9 with no 5 works as it returns 0
function checkSubPattern(ticArray, patterns){
    let A = 0;
    let B = 1;
    let C = 2;//ABC are sub test results holders
    if(ticArray.includes(patterns[0])){
        A = 1;
    } else {
        A = 0;
    };
    if(ticArray.includes(patterns[1])){
        B = 1;
    } else {
        B = 0;
    }; 
    if(ticArray.includes(patterns[2])){
        C = 1;
    } else {
        C = 0;
    }; 
    let D = A && B && C; //if all are TRUE, D is TRUE, else FALSE
    return D;//returns one if pattern is present, zero if not
};
//Single Pattern Checker

//MODULE 
//All Pattern Checker - DONE
//Remarks
//array with pattern#2 works, returns 1
//array with pattern#8 works, returns 1
//array with no pattern works, returns 0
//array with empty pattern works, returns 0
//for all the element-patterns in the tictactoe pattern, test it against a player's tiles
function checkAllPAtterns(inputTiles, tictactoePattern){//input id of tiles held by player and the pattern for TTT victory
    let E = 0;//declare here for access
    outer: for (let elem in tictactoePattern) {//test all patterns
        let subPat =  tictactoePattern[elem]; //store sub-pattern in a temp variable for neatness
        E = checkSubPattern(inputTiles, subPat);//call checker function, store the TRUE or FALSE result in a variable
        if (E == 1) break outer;//once any subpattern is present, immediately stop the loop
    };
    return E;
};
//All Pattern Checker - DONE


checkAllPAtterns(ticArrayPlayer1, tictactoePatterns);//caller

     