const login = async (email, password) => {
    console.log(email, password);
    try {
        const res = await axios({
            method: 'POST',
            url: 'http://localhost:3000/api/v1/workout/users/login',
            data: {email, password}
        });
        console.log(res);
    } catch (e) {
        console.error(e.response.data);
    }

};

// make form work
document.querySelector('.form').addEventListener('submit', e => {
    e.preventDefault();
    // get email / pass
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
});