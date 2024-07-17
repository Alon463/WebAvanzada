document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('welcome').classList.remove('hidden');
});

document.getElementById('start').addEventListener('click', function() {
    document.getElementById('message').classList.remove('hidden');
});

document.getElementById('logout').addEventListener('click', function() {
    document.getElementById('welcome').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('message').classList.add('hidden');
});
