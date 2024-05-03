// Function to generate a random string of specified length
function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
// Function to generate a random ID starting with "R"
function generateRandomID(alphabet) {
    const prefix = alphabet; // Starting character
    const randomSuffix = generateRandomString(7); // Generate a random string of length 7
    return prefix + randomSuffix;
}
module.exports = generateRandomID;