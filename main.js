
var image=document.querySelector("img"); 
// Make a request for a user with a given ID
axios.get('https://api.thecatapi.com/v1/images/search')
  .then(function (response) {
    // handleconsole.log(data); success
    console.log(response);
    
          image.src = response.data[0].url;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

  .then(function() {
         
});