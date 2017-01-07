var User = function(username, email, password, name, age, image){
  this.username = username;
  this.email = email;
  this.password = password;
  this.name = name;
  this.age = age;
  this.image = image;
}
var userArray = [
  new User("big gunz", "ak1987@hotmail.com", "boom", "Steve Jenkins", 39, "http://biggunzdiesel.co.uk/wp-content/uploads/2015/01/welcome-banner.jpg"),
  new User("allofthethings", "theworld@gmail.com", "lifeisgood", "Jim Hensley", 29, "http://shelovesmagazine.com/wp-content/uploads/2013/09/all-the-things.jpg"),
  new User("steveOO", "little_stevie@gmail.com", "passW0rd", "Steve Nelson", 21, "http://pixel.nymag.com/imgs/daily/vulture/2015/10/07/07-steveo.w1200.h630.jpg"),
  new User("theSnowman", "skizzz@gmail.com", "shredthepow", "Mitch Huley", 26, "http://blogs.hanover.edu/wp-content/uploads/the-snowman.jpg")
];
console.log(userArray);
document.getElementById('loginForm').addEventListener('submit', function(e){
  e.preventDefault();
  var username = document.getElementById('loginUsername').value;
  var email = document.getElementById('loginEmail').value;
  var password = document.getElementById('loginPassword').value;
  var foundhim = false;
  for (var i = 0; i < userArray.length; i++) {
    if(username == userArray[i].username && email == userArray[i].email && password == userArray[i].password){
      foundhim = true;
      document.getElementById('loginmodal').style.display = "none";

      document.getElementById('usersName').innerText = userArray[i].name;
      document.getElementById('usersImage').src = userArray[i].image;
      document.getElementById('usersUsername').innerText = "User Name: " + userArray[i].username;
      document.getElementById('usersAge').innerText = "Age: " + userArray[i].age;
      document.getElementById('usersEmail').innerText = "Email: " + userArray[i].email;

      document.getElementById('profile').style.display = "block";
      document.getElementById('logout').style.display = "block";
    }
  }
  if(!foundhim){
    alert("Sorry, user not found!");
  }
});

var logout = function(){
  document.getElementById('loginUsername').value = "";
  document.getElementById('loginEmail').value = "";
  document.getElementById('loginPassword').value = "";
  document.getElementById('loginmodal').style.display = "block";
  document.getElementById('profile').style.display = "none";
  document.getElementById('logout').style.display = "none";
}
