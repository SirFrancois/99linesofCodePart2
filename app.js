document.getElementById('StartButton').addEventListener("click", singSong);

function singSong() {

const friends = ['maliek', 'Chris', 'Eric', 'Dj', 'Ant' ];


for (let j = 0; j < friends.length; j++){
    console.log(friends[j] + ":")


  for (let i = 99; i > 0; i--){



   if(i > 2){
 //   console.log(i + "lines of code on the wall" + i + "Lines of code" + friends[j] +  "strikes one down, clears it all out" + (i-1) + "lines of code on the wall")
  //  }else if(
        i == 2  ){
 //           console.log(i + "lines of code on the wall" + i + "Lines of code" + friends[j] +  "strikes one down, clears it all out" + (i-1) + "line of code on the wall")
  //      }
    
  //  else{ 
  //  console.log(i + "lines of code on the wall" + i + "lines of code" + friends[j] + "strikes one down, clears it all out, no more lines of code in the file")

    
}
}
}
}
document.addEventListener("DOMcontentLoaded", function(){

let div = document.createElement('div');
    div.className = 'friend';


    let h3 = document.createElement('h3'); 
    h3.className = 'Maliek';  
    div.appendChild(h3)
 

    let h3 = document.createElement('h3'); 
    h3.className = 'Chris';  
    div.appendChild(h3)

    let h3 = document.createElement('h3'); 
    h3.className = 'Eric';  
    div.appendChild(h3)

    let h3 = document.createElement('h3'); 
    h3.className = 'Dj';  
    div.appendChild(h3)

    let h3 = document.createElement('h3'); 
    h3.className = 'Ant';  
    div.appendChild(h3)

        let p = document.createElement('p');
        p.className = 'p' ;
        let p = document.createElement('p2');
        p.className = 'p2';
        let p = document.createElement('p3');
        p.className = 'p3';


        let text = document.createTextNode(i + "lines of code on the wall" + i + "Lines of code" + friends[j] +  "strikes one down, clears it all out" + (i-1) + "lines of code on the wall" )
            p.appendChild(text)

        let text = document.createTextNode(i + "lines of code on the wall" + i + "Lines of code" + friends[j] +  "strikes one down, clears it all out" + (i-1) + "line of code on the wall")
            p2.appendChild(text)

        let text = document.createTextNode(i + "lines of code on the wall" + i + "lines of code" + friends[j] + "strikes one down, clears it all out, no more lines of code in the file" )
            p.appendChild(text)


             document.body.appendChild(p)
             document.body.appendChild(p2)
             document.body.appendChild(p3)
        
        

})

    
}
