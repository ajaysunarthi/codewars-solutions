// sol 1

function isSolved(board) {


	if(board[0][0] !== 0 ){
  //checkH & checkV
  	if(board[0][0] === board[0][1] && board[0][0] === board[0][2]){
    	return board[0][0];
    }
    if(board[0][0] === board[1][0] && board[0][0] === board[2][0]){
    	return board[0][0];
    }
  }
  
  
  if(board[1][1] !== 0){
  
 
  if( (board[1][1] === board[0][0] && board[1][1] === board[2][2]) || (board[1][1] === board[0][2] && board[1][1] === board[2][0]) || (board[1][1] === board[1][0] && board[1][1] === board[1][2]) || (board[1][1] === board[0][1] && board[1][1] === board[2][1]) )
  {
    	return board[1][1];
    }
  }


  if(board[2][2] !== 0){
  //checkH n chV
  	if(board[2][2] === board[2][1] && board[2][2] === board[2][0]){
    	return board[2][2];
    }
    if(board[2][2] === board[0][1] && board[2][2] === board[0][2]){
    	return board[2][2];
    }
  }
  
  for(var i=0;i<3;i++){
  	for(var j=0;j<3;j++){
    if(board[i][j] ===0){
    	return -1;
    }
    }
  }
  
  return 0;
    
}


//sol 2
function isSolved(board) {
   board = board.join('-').replace(/,/g,'');
   if(/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
   if(/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
   if(/0/.test(board)) return -1;
   return 0;
}