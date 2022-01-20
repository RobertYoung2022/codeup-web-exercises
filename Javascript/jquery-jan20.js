var letter = 'bJI*ENsd4fRAIR5VIrsRFA-ijgRar';
var i = 0;
var character='';
while (i <= letter.length - 1){
    character = letter.charAt(i);
    if (!isNaN(character * 1)){
        console.log('is not a character');
    }else{
        if (character == character.toUpperCase()) {
            console.log(this.letter + character + ' is uppercase');
        }
        if (character == character.toLowerCase()){
            console.log('is lowercase');
        }
    }
    i++;
}