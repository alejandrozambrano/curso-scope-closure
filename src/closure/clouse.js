function greeting() {
    let username = 'Alejandro';

    function displayUserName() {
        return `hello ${username}`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g);
console.log(g());