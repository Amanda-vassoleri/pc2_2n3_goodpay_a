async function initializeLogin() {
    var email = document.getElementById('emailLogin').value
    var senha = document.getElementById('senhaLogin').value
    try {
        const response = await fetch('./engine/users.json')
        const users = await response.json()
        const userValided = users.find(u =>
            u.email === email
            &&
            u.senha === senha)

        if (userValided) {
            localStorage.setItem("usuarioAtual", userValided)
            console.log(userValided)
            setTimeout(() => {
                window.location.href = './dashboard.html'
            }, 5000)
        } else {
            alert('Erro ao processar, Dados não podem ser conferidos, neste estabelecimento.')
        }
    } catch (e) {
        console.error(error)
    }
}

async function storageUsersInfo() {
    user = localStorage.getItem('usuarioAtual')

    document.getElementById('saldo_conta').innerText = `Saldo de ${user.name}`
    document.getElementById('trans_conta').innerText = `Conta: ${user.id}`
    document.getElementById('cash_conta').innerText = `R$ ${user.name}` 
}