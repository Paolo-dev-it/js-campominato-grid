// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

function startPlay() {

    
    
    const griglia = document.getElementById("griglia"); //Collego il mio div dall'html
    console.log(griglia);

    function creatingSquare(){ //Creo la funzione per creare un div all'interno del mio div contenitore

        const item = document.createElement("div"); //Creato il tag div
        item.classList.add("square"); //Aggiunta la classe square al div appena creato
        return item;
    }
        console.log( creatingSquare() );
    

    for ( let i = 0; i < 100; i++ ) { //Inizializzo ciclo

        let elementCurrent = creatingSquare(); //Richiamo la funzione e gli do un nome
        // console.log(elementCurrent);

        elementCurrent.addEventListener('click', function(){ //Evento al click che mi permette di aggiungere una classe e grazie al "this" seleziono solo un elemento
            console.log(this);
            this.classList.toggle('active');
            
        })

        griglia.append ( elementCurrent ); //Aggiungo al div griglia la funzione con l'evento al click
        
    }

   

}

