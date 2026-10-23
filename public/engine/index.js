async function initializeLogin(){
    var email = document.getElementById('emailLogin').value
    var senha = document.getElementById('senhaLogin').value
    try{
        const response = await fetch('./engine/users.json')
        const users = await response.json()
        console.log(users)
        const userValided = users.find(u => 
            u.email === email
        &&
            u.senha === senha)
        
        if(userValided){
            window.location.href = './dashboard.html'
        } else {
            alert('Erro ao processar, Dados não podem ser conferidos, neste estabelecimento.')
        }
    } catch(e){
        console.error(error)
    }
}