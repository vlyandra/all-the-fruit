
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
   // Returns an array of arrays: Each type of fruit gets an array with coordinates of each fruit inside.
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
   if (fruits[0]) {
      xDistanceOne = fruits[0][0][0] - me[0];
      yDistanceOne = fruits[0][0][1] - me[1];
      oneDistance = Math.abs(xDistanceOne) + Math.abs(yDistanceOne);
   }

   // CLOSEST FRUIT IS WHERE/WHAT IS IT/WHAT IS IT GOOD FOR
   /*closeDistance = null;
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
   }*/

   // Is there a cluster of fruit?
   var distances = [];
   var x, y = 0;
   var baseType, compareType, baseIndex, compareIndex;

   for (baseType = 0; baseType < fruits.length; baseType++) {
      for (baseIndex = 0; baseIndex < fruits[baseType].length; baseIndex++) {
         for (compareType = 0; compareType < fruits.length; compareType++) {
            for (compareIndex = 0; compareIndex < fruits[compareType].length; compareIndex++) {
               x = fruits[baseType][baseIndex][0] - fruits[compareType][compareIndex][0];
               y = fruits[baseType][baseIndex][1] - fruits[compareType][compareIndex][1];
               distances.push({})
            }
         }
      }
   }

   for (type = 0; type < fruits.length; type++) {
      for (fruit_index = 0; fruit_index < fruits.length; fruit_index++) {
         x = fruits[i][0] - fruits[j][0];
         y = fruits[i][1] - fruits[j][1];
         distances[i][j] = Math.abs(x) + Math.abs(y);
      }

   }

   for (i = 0; i < fruits.length; i++) {
      sort(distances[i])
   }   

   // Go toward one fruit

   // Go toward close fruit

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
