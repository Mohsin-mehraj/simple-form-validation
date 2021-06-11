const userName = document.getElementById('username');
const password = document.getElementById('password');

const form = document.getElementById('form');
const errore = document.getElementById('error')

form.addEventListener("submit", function(e){

   let messages = []
  if(userName.value === '' || userName.value === null){
    messages.push("username is required asshole")
  }
  
if(password.value.length <= 5)
{
  messages.push("password should be more than 5 characters")
}

if(password.value.length > 10)
{
  messages.push("password should not  be more than 10 characters")
}



if(messages.length > 0){
  e.preventDefault()
  errore.innerText = messages.join(',    ')
  setTimeout(() => {
    errore.remove();
  }, 3000);
}
  });
  
  