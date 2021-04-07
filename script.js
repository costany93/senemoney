var tabNumeros = [
	"781659833",
	"772652236",
	"783642234",
	"704289933",
	"765963158"
]

var tabSoldes = [
	15000,
	27000,
	35000,
	43000,
	55000
]

var tabCodes = [
	"1111",
	"2222",
	"3333",
	"4444",
	"5555"
]

var nbreNum = tabNumeros.length;

var numCourant = "";


//cette fonction affiche un message demandant à l'utilisateur s'il veux continuer ou quitter la plateforme
function etapeSuivante(){
	//on pose la question à l'utilisateur si veux continuer ou quittez la plateforme
	var reponse = prompt("Voulez vous retourner au menu principal oui=o non=n");

	if(reponse == 'o'){
		//si oui on l'affiche à nouveau le menu
		main();
	}else{
		//sinon on lui dit au revoir et il quitte la plateforme
		alert("Au revoir");
	}
}


//cette fonction permet d'afficher le menu principal
function menu(numero){
	// on affiche le menu
	var choix = prompt("----Menu Sen Money----\n------- "+numero+" --------\nTapez le numéro du service choisi\n1- Solde de mon compte\n2-Transfert d'argent\n3-Paiement de facture\n4-Options");
	
	//on retourne l'indice du service que l'utilisateur a choisi
	return choix;
}


//c'est la fonction principale de notre application celle qui est déclenchée au clic sur le bouton #221#
function main(){

	//on récupère la valeur du numéro en cours d'utilisation
	var select = document.getElementById('num');
	var numero = select.value;

	//on affecte ce numéro au numéro courant
	numCourant = numero;

	//on appelle notre menu et on sauvegarde l'indice du service choisi dans une variable
	var rep = menu(numCourant);
	//si l'indice est égal 1 ce qui correspond à afficher le solde de l'utilisateur, on appelle la fonction afficheSolde
	switch(rep){
		case "1":
			afficherSolde(numCourant);
			etapeSuivante();
			break;
		case "2":
			transfert(numCourant);
			etapeSuivante();
			break;
		default:
			alert("le service n'est pas disponible");
			break;
	}
}


// la fonction qui nous permet d'afficher le solde de l'utilisateur on lui demandant son code de sécurité
function afficherSolde(numero){
	// je récupère l'indice du numéro courant 
	var indice = tabNumeros.indexOf(numero);

	//saisi du code de sécurité

	var code = prompt("Veuillez entrez le code de sécurité du numéro "+numero);


	if(code == tabCodes[indice]){
		//si le code est bon on affiche son solde
		alert('Le solde de votre compte est de '+tabSoldes[indice]);
	}else{
		//sinon on lui renvoie un message d'erreur
		alert("Le code de sécurité entrez est incorrect");
	}
}

function transfert(numero){
	
	//on demande le numéro du destinataire
	var numeroTransfert = window.prompt("Entrez le numero du destinataire");


	//on parcours tout les numéros de notre tableau pour vérifier si ce numéro y figure bien
	for (var i = 0; i<nbreNum; i++) {
		//si le numéro existe dans notre tableau
		if (numeroTransfert == tabNumeros[i]) {	
			//on récupère l'indice du numéro		
				var indice = tabNumeros.indexOf(numero);

				//on demande à le montant à transferer
				var montantString = window.prompt("Donnez le montant à transferer");
				var montant = parseInt(montantString);

				//si le montant est inferieur ou égal à notre solde on effectue le transfert
				if (montant <= tabSoldes[indice]) {
					// on demande le code de sécurité
					var code = window.prompt("Donnez votre code secret");

					//si le code est bon 
					if (code == tabCodes[indice]) {						
						alert("Vous avez transferer "+montant+" au "+numeroTransfert);
						var reste = tabSoldes[indice] - montant;

						//on met à jour le nouveau solde du compte
						tabSoldes[indice] = reste;
						alert("Le nouveau solde de votre compte est de "+reste);

						//on affecte le montant transferer au destinataire
						tabSoldes[i] = tabSoldes[i] + montant;
					}else{
						//le code de sécurité est incorrect
						alert("Le code entré est incorrect");
					}					
				}else{
					//le montant est supérieur à notre solde
					alert("Transfert impossible votre solde est de "+tabSoldes[indice]);
				}
		} 
	}
}
