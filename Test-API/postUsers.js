// export const registerUser = async (firstname, lastname, email,  password, profilepic, address, role) => {


document.getElementById("userForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // const profilepic = document.getElementById("profilepic").value;
    const address = document.getElementById("address").value;
    const role = document.getElementById("role").value;

    const userData = {
        data: {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            // profilepic: profilepic,
            address: address,
            role: role,
        }
    }

    try {
        const response = await fetch("http://localhost:1337/api/utilisateurs", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (response.ok) {
            const result = await response.json()
            alert('Account subscribed successfully !')
            console.log(result)
        }else{
            const error = await response.json()
            alert('Failed to subscribe the new account')
            console.log(error)
            //throw new Error('Failed to subscribe the new account');
        }

        //console.log('Subscription done successfully');
    } catch (error) {
        console.error('Error creating the new user:', error);
        throw error;
    }
})
