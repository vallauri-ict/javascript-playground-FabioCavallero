Data una matrice di 10 x 10 quadratini, in cui ogni quadratino è realizzato mediante un tag DIV appeso ad un wrapper ed implementa la 
classe cella, realizziamo un'applicazione in cui la cornice, partendo dai bordi esterni, si restringe di un livello ogni 1/2 sec.
Arrivata al livello 5 (con i quattro quadratini centrali ricolorati di rosso) dopo ½ secondo l’animazione ricomincia dal livello più esterno.
Al cambio di livello, per il resettare le celle rosse e riportarle a grigie, utilizziamo una procedura reset() che riazzeri l’intera matrice.
