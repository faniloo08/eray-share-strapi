document.getElementById("userForm").addEventListener("submit", function(event){
    event.preventDefault();

    const usernameOrEmailemail = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("Email saisi : ", usernameOrEmailemail);
    console.log("Mot de passe saisi: ", password)

    authHandler(usernameOrEmailemail, password) 
})

const authHandler = async (usernameOrEmail, password) => {
    try {
        const response = await fetch(`http://localhost:1337/api/utilisateurs?populate=*&filters[email][$eq]=${usernameOrEmail}`);
        if (response.ok) {
            const userData = await response.json();
            console.log(userData)
            if (userData) {
                const user = userData.data[0].attributes;
                console.log(user.password)
                if (user.password === password) {
                    alert("Connexion réussie !");
                    return true;
                } else {
                    alert('Veuillez vérifier le mot de passe.');
                    return false;
                }
            } else {
                alert("Nom d'utilisateur ou mot de passe incorrect.");
                return false;
            }
        } else {
            alert("Une erreur s'est produite lors de l'appel à l'API.");
            return false;
        }
    } catch (error) {
        console.error("Error logging in:", error);
        return false;
    }
};

