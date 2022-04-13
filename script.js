
const nomeDosCompetidores = 
["Daniel", 
"Rafael", 
"Manoel",
];

function positions(firstPlace, secondPlace, lastPlace){
    let lugarPodio = [
        firstPlace,
        secondPlace,
        lastPlace,
    ];

    if (secondPlace=="Daniel" && firstPlace=="Rafael"){
        lugarPodio[0]="Daniel";
        lugarPodio[1]="Rafael";
        lugarPodio[2]="Manoel";
        return `1ª - Colocado ${lugarPodio[0]}`
    } 

    if (secondPlace=="Daniel" && firstPlace=="Manoel"){
        lugarPodio[0]="Daniel";
        lugarPodio[1]="Manoel";
        lugarPodio[2]="Rafael";
        return `1ª - Colocado ${lugarPodio[0]}`
    } 

    if (lastPlace=="Daniel" && secondPlace=="Manoel"){
        lugarPodio[0]="Rafael";
        lugarPodio[1]="Daniel";
        lugarPodio[2]="Manoel";
        return `1ª - Colocado ${lugarPodio[0]}`
    } 

    if (lastPlace=="Daniel" && secondPlace=="Rafael"){
        lugarPodio[0]="Manoel";
        lugarPodio[1]="Daniel";
        lugarPodio[2]="Rafael";
        return `1ª - Colocado ${lugarPodio[0]}`
    }
}

console.log(positions("Rafael","Daniel","Manoel"))