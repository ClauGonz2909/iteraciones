// const votante = "Pedrito"
// const edad = 60

// if(edad >= 18){
//     console.log("si puede votar")
// }
//  else if(edad === 60){
//     console.log("no necesita votar")
//  }

// else{
//     console.log("no puede votar")
// }


const votingAge = 18

switch(true){
    case votingAge >= 60:
        console.log("no necesita votar");
        break;
    case votingAge >= 18:
        console.log("puede votar");
        break;

    default:
        console.log("no puede votar");
        break;

}


