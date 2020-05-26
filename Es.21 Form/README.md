form con i seguenti campi: 
-cognome e nome (casella di testo editabile lunga 50 caratteri) 
-sesso (selezionabile tramite due bottoni radio) 
-ateneo (da scegliere da un menu che riporta le 3 università romane) 
-CAP (casella di testo editabile lunga 5 caratteri) 
-studente lavoratore (selezionabile tramite checkbox) 
-descrizione del lavoro svolto (casella di testo editabile lunga 80 caratteri) 
-bottone di invio 
-bottone di reset 
Aggiungiamo le funzionalità JavaScript che eseguono i seguenti controlli.
mentre l’utente edita i campi della form: 
subito dopo che l’utente ha editato il campo “cognome e nome”, dobbiamo verificare che tale campo non sia un numero; 
subito dopo che l’utente ha editato il campo “CAP”, verifichiamo che tale campo sia un numero di 5 cifre;
la casella di testo per descrivere il lavoro svolto deve essere abilitata solo se è selezionata la checkbox “studente lavoratore”;
al momento dell’invio del messaggio: 
verifichiamo che “cognome e nome” non sia un numero e non sia vuoto; 
verifichiamo che il sesso sia stato selezionato; 
verifichiamo che sia stato selezionato un ateneo; 
se l’utente ha dichiarato di essere uno studente lavoratore, la descrizione del lavoro svolto non può essere vuota.
La condizione anomala va segnalata con una linea rossa sotto il campo non valido.
Alla pressione del bottone di invio, se sono presenti anomalie, esse vanno segnalate, oltre che con una linea rossa sotto il campo non valido,
anche con una alert riepilogativa.
