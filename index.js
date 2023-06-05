liff.init({ liffId: "1661177002-PKyNKMRk" })
.then(() => {
    if (!liff.isLoggedIn()) {
        liff.login();
    } else {
        document.getElementById('title').textContent = 'logged in';

        liff.getProfile()
        .then((profile) => {
                const name = profile.displayName;
                document.getElementById('name').textContent = name;
        })
        .catch((err) => {
                console.log("error", err);
                document.getElementById('name').textContent = err;
        });
    }
});