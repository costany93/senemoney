var tabNumeros = [
	"781659833",
	"772652236",
	"783642234",
	"704289933",
	"765963158"
]

var tabSoldes = [
	"15000",
	"27000",
	"35000",
	"43000",
	"55000"
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
	if(rep == 1){
		//fonction afficheSolde
		afficherSolde(numCourant);

		//fonction étape suivante
		etapeSuivante();
	}
}


// la fonction qui nous permet d'afficher le solde de l'utilisateur on lui demandant son code de sécurité
function afficherSolde(numero){
	// je récupère l'indice du numéro courant 
	for(var i = 0; i < nbreNum; i++){
		if(numero == tabNumeros[i]){
			var indice = i;
		}
	}

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
