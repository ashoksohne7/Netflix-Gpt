export const checkValidData = (email, password) => {

const isemailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/.test(password);

if (!isemailValid)  return "Invalid email format" ;
if (!isPasswordValid) return"Invalid password format" ;

return null;



};