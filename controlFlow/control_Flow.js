let userRole = "admin";
let accessLevel;
let isLoggedIn = true;
let userMessage;
let userType = "subscriber";
let userCategory;

if (userRole === "admin") {
  accessLevel = "Full access granted";
}
else if (userRole === "manager") {
  accessLevel = "Limited access granted";
}
else {
  accessLevel = "No access granted";
}
console.log("access level", accessLevel);
if (isLoggedIn) {
  if (userRole === 'admin') {
    userMessage = "Welcome, Admin!";
  } else {
    userMessage = "Welcome User!";
  }
}
else {
  userMessage = "Please login to access the system"
}
console.log("userMessage", userMessage);

//switch statement

switch (userType) {
  case "admin":
    userCategory = "Administrator";
    break;
  case "manager":
    userCategory = "Manager";
    break;
  case "subscriber":
    userCategory = "Subscriber";
    break;
  default:
    userCategory = "Unknown";
}

console.log("userCategory", userCategory);

let isAuthenticated = true;
let authenticationStatus;

//Ternary Operator
isAuthenticated ? authenticationStatus = "Authenticated" : "Not Authenticated";

console.log("Authentication Status", authenticationStatus);