if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
    .then(reg=>console.log('Registro de serviceWorker exitoso', reg))
    .catch(err=>console.warn('Error al tratar de registar el sW'), err)
}