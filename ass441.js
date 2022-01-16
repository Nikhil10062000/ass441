const matrixOne = [ [4, 3, 2, 4], [9, 1, 5, 6], [2, 7, 9, 8], [8, 5, 2, 0], ];

 var addDiagonal=sum(matrixOne);
 function sum(){
 var addDiagonal=0;                      
for(i=0;i<matrixOne.length;i++){
    for(j=0;j<matrixOne.length;j++){
       if(i==j){
        addDiagonal=addDiagonal+matrixOne[i][j];
               }
                                   }
                               }
  return addDiagonal;
               }               
 document.write(addDiagonal);
