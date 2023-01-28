const cookie = req.cookies.get('next-auth.session-token').value;
const payload = cookie.split(".").at(1);
const buffer = Buffer.from(payload, "base64");
const email = JSON.parse(buffer.toString()).email;
console.log("Helper: " + email)
export default email