
function new_game() {
}

function make_move() {
   var board = get_board();

   fruit_number = get_number_of_item_types();

   fruits = Array(fruit_number);
   closest = Array(fruit_number);

   for (i = 0; i < fruit_number; i++) {
      fruits[i] = [];
      closest[i] = [];
   }

   // WHERE IS THE FRUIT
   for (x = 0; x < board.length; x++) {
      for (y = 0; y < board[x].length; y++) {
         field = board[x][y];
         if (field > 0) {
            fruits[field-1].push([x, y]);
         }         
      }
   }
   
   // WHERE THE HELL AM I
   me = [get_my_x(), get_my_y()];

   // Where is the one fruit to rule them all?
   xDistanceOne = fruits[0][0][0] - me[0];
   yDistanceOne = fruits[0][0][1] - me[1];

   // CLOSEST FRUIT IS WHERE/WHAT IS IT/WHAT IS IT GOOD FOR
   closeDistance = null;
   for (i = 0; i < fruits.length; i++) {
      for (j = 0; j < fruits[i].length; j++) {
         current = fruits[i][j];
         x = current[0] - me[0];
         y = current[1] - me[1];
         totalDistance = Math.abs(x) + Math.abs(y);
         if (closeDistance == null)
         {
            closeDistance = totalDistance;
            closest[i].push([x,y]);
         }
         else if (totalDistance < closeDistance) {
            for (k = 0; k < closest.length; k++) {
               closest[k] = [];
            }
            closest[i].push([x,y]);
            closeDistance = totalDistance;
         }
         else if (totalDistance == closeDistance) {
            closest[i].push([x, y]);
         }
      }
   }

   // we found an item! take it!
   if (board[get_my_x()][get_my_y()] > 0) {
       return TAKE;
   }

   return PASS;
}



// Optionally include this function if you'd like to always reset to a 
// certain board number/layout. This is useful for repeatedly testing your
// bot(s) against known positions.
//
// function default_board_number() {
//    return 657675;
// }
