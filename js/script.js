var cycle1 = function() {
    for (var i = 2; i <= 10; i++){
        if  (i % 2 == 0){
            alert(i)
        }
    }
},
cycle2 = function(){
    var i = 0;
    while (i<3){
        alert( "номер" + i + "!" )
        i++;
    }
},
cycle3 = function() {
    var num = 0;
    while( num <100 ){
      num = prompt ('Input num > 100', '')
      if (num == null) break;
    } 
},
cycle4 = function() {
    for ( var i = 2; i< 10; i++){
        for (var j = 2; j < i; j++){
            if ( i % j ==0){
                break
            } 
            alert(i);
            break;
        }   
    }
}
// END OF CYCLES BRANCH