async function newUser() {
  console.log("inside function");
  
  const response = await fetch('https://api.github.com/users');

  console.log("before resolve");
  const users = await response.json();
  console.log("resolved");

  return users;
}

console.log("before calling function");

let a = newUser();

console.log("after calling function");

console.log(a);

a.then(data=>console.log(data));

console.log("last line");