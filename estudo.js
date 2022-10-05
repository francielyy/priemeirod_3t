let nome  = "Francini";
let numero = 07;
let turma = "D";
let serie = "1";
let tabuada = 2;

function escreva(){

    document.write(tabuada+" x 1 = "+(tabuada*1)+"<br>");
    document.write(tabuada+" x 2 = "+(tabuada*2)+"<br>");
    document.write(tabuada+" x 3 = "+(tabuada*3)+"<br>");
    document.write(tabuada+" x 4 = "+(tabuada*4)+"<br>");
    document.write(tabuada+" x 5 = "+(tabuada*5)+"<br>");
    document.write(tabuada+" x 6 = "+(tabuada*6)+"<br>");
    document.write(tabuada+" x 7 = "+(tabuada*7)+"<br>");
    document.write(tabuada+" x 8 = "+(tabuada*8)+"<br>");
    document.write(tabuada+" x 9 = "+(tabuada*9)+"<br>");
    document.write(tabuada+" x 10 = "+(tabuada*10)+"<br>");
} 
function repete (){
    for (let i = 1; i <= 10; i++){
        document.write("Tabuada do " + i + "<br>")
        for(let j =  1; j <= 10; j++){
            document. write (i + " x " + i + " = "+(j*i)+ "<br>")
        }
       document.write("<br>");
}
}

let lista = [ "Banana", "Lixia", "Abacate", "Fruta do conde", "Romã", "Pitaya", "Blubery" ];
function MinhaLsita  (){
    document.write(lista[0])
    document.write(lista[1])
    document.write(lista[2])
    document.write(lista[3])
    document.write(lista[4])
    document.write(lista[5])
    document.write(lista[6])
}
