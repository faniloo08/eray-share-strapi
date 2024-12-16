var url;
url = "http://localhost:1337/api/courses?populate=*"
// const urlLocal: string = `${url}&local=${locale}`;
async function getData() {
    try {
        const resp = await fetch(url, {
            method: 'GET',
            // mode: 'no-cors', //Définition du mode de requête sur 'no-cors'
        });
        const result = await resp.json();
        if (resp.status === 200) {
            console.log('Success :', result);
        }
        return result;
    } catch (error) {
        console.log(`ERROR: ${error}`);
        return error;
    }
}

async function DataToTable(){
    const elements= await getData();
    const Courses= [];
    const tableauDeDonnees= [];
    const tousLesTitres= [];
    const toutesLesDescriptions= [];
    const toutesLesDates= [];
    const toutesLesDurées= [];
    const tousLesvideos= [];
    const tousLesFormateurs= [];

    if (typeof elements === 'object' && elements !== null && elements.data) {
        elements.data.forEach((item) => {
            const objet = item.attributes;
            const ligne = [];
            for (const propriete in objet) {
                ligne.push(objet[propriete]);
            }
            const existingIndex = tableauDeDonnees.findIndex(existingLigne => {
                return JSON.stringify(existingLigne) === JSON.stringify(ligne);
            });
            if (existingIndex === -1) {
                tableauDeDonnees.push(ligne);
            }
        });

        console.log('Le tableau contenant les Courses donne: ', tableauDeDonnees);

        for (let i = 0; i < tableauDeDonnees.length; i++) {
            const titre = tableauDeDonnees[i][0];
            tousLesTitres.push(titre);
        }

        for (let i = 0; i < tableauDeDonnees.length; i++) {
            const desc = tableauDeDonnees[i][3];
            toutesLesDescriptions.push(desc);
        }

        for (let i = 0; i < tableauDeDonnees.length; i++) {
            const duration = tableauDeDonnees[i][4];
            toutesLesDurées.push(duration);
        }

        for (let i = 0; i < tableauDeDonnees.length; i++) {
            const date = tableauDeDonnees[i][1];
            toutesLesDates.push(date);
        }

        for (let i = 0; i < tableauDeDonnees.length; i++) {
            const formateur = tableauDeDonnees[i][14].data[0].attributes.Username;
            // console.log(image);
            tousLesFormateurs.push(formateur);
        }

        for (let i = 0; i < tableauDeDonnees.length; i++) {
            const videoUrl = tableauDeDonnees[i][10].data[0].attributes.url;
            const src = "http://localhost:1337" + videoUrl;
            tousLesvideos.push(src);
        }

        for (let i = 0; i < tableauDeDonnees.length; i++) {
            const Coursescontent = {
                titre: tousLesTitres[i],
                description: toutesLesDescriptions[i],
                date: toutesLesDates[i],
                duration: toutesLesDurées[i],
                video: tousLesvideos[i],
                formateur: tousLesFormateurs[i],
            };
            Courses.push(Coursescontent);
        }

        console.log("Tous les Courses formatés donnent : ", Courses);
        console.log(typeof Courses);
        console.log(Courses.length);

        // Afficher le résultat dans la page
        document.getElementById('response').innerHTML = `
        <h3>Réponse de l'API pour les cours:</h3>
        ${JSON.stringify(Courses)}
        <p>Pour avoir le titre du 1er cours par exemple, le format adapté c'est : <strong>Courses[0].titre</strong></p>
        ${JSON.stringify(Courses[0].titre)}
        <p>Pour avoir le lien de la video du 1er cours par exemple, le format adapté c'est : <strong>Courses[0].video</strong></p>
        ${JSON.stringify(Courses[0].video)}`
        return Courses;
    } else {
        console.error("Les données retournées ne sont pas un objet ou ne contiennent pas de données.");
        return [];
    }

}

DataToTable()
