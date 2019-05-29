// Here is my sample code where I am requesting the information of an image album:

let album_id = 'designers album ID goes here';
let api_key = '999';
let request_url = 'https://api.imgur.com/3/album/' + album_id;

function requestAlbum() {
  let req = new XMLHttpRequest();
  
  req.onreadystatechange = function() { 
     if (req.readyState == 4 && req.status == 200) {
       processRequest(req.responseText);
     } else {
       console.log("Error with Imgur Request.");
     }
  }
  req.open("GET", request_url, true); // true for asynchronous     
  req.setRequestHeader('Authorization', 'Client-ID ' + api_key);
  req.send(null);
}
function processRequest(response_text) {
  if (response_text === "Not found") {
    console.log("Imgur album not found.");
  } else {
    var json = JSON.parse(response_text);
    // You got your response back!
    // Do your thing here.
  }
};

requestAlbum();

// Find Spotify API working code and adjust above accordingly with async functionality;
// Article link:
// https://medium.com/@microaeris/getting-started-with-the-imgur-api-4e96c352658a
