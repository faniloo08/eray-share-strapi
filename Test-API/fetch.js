async function Data() {
    const resp = await fetch("https://eray-share-strapi.onrender.com/api/categories/");
    const ret = await resp.json();  // Attendre la résolution de la promesse retournée par `json()`
    //Test de récuperation de la description de la 1ère catégorie
    const cat1 = ret.data[0].attributes.description;

    // Afficher le résultat dans la page
    document.getElementById('response').innerHTML = `
        <h3>Réponse de l'API :</h3>
        ${cat1}`;
}

// Appel de la fonction Data dès le chargement de la page
Data();

