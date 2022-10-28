// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

function startPlay() {

    
    
    const griglia = document.getElementById("griglia"); //Collego il mio div dall'html
    console.log(griglia);

    function creatingSquare(){ //Creo la funzione per creare un div all'interno del mio div contenitore

        const div = document.createElement("div"); //Creato il tag div
        div.classList.add("square"); //Aggiunta la classe square al div appena creato
        return div;
    }
        console.log( creatingSquare() );
    

    for ( let i = 0; i < 100; i++ ) {

        let elementCurrent = creatingSquare();
        console.log(elementCurrent);

        elementCurrent.addEventListener('click', function(){
            console.log(this);
            this.classList.toggle('active');
            
        })

        griglia.append ( creatingSquare() );
        
    }

   

}

