function encrypt(data){
    return 'encrtpted data';
}

function send(url, data){
    const encryptedData = encrypt(data)
    console.log(`sending ${encryptedData} to ${url}`)

}
export {
    send,
}