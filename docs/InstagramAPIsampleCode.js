// returned Instagram API object:
{
    "meta": {
        "code": 200
    },
    "data": {
        ...
    },
    "pagination": {
        "next_url": "...",
        "next_max_id": "13872296"
    }
}

<a id="instagram-button" class="btn btn-block btn-social btn-instagram">
  <i class="fa fa-instagram"></i> Sign in with Instagram
</a>

$('#instagram-button').on('click', function() {
    // Initialize with your OAuth.io app public key
    OAuth.initialize('YOUR_OAUTH_KEY');
    // Use popup for OAuth
    OAuth.popup('instagram').then(instagram => {
      console.log('instagram:', instagram);
      // Prompts 'welcome' message with User's name on successful login
      // #me() is a convenient method to retrieve user data without requiring you
      // to know which OAuth provider url to call
      instagram.me().then(data => {
        console.log('me data:', data);
        alert('Instagram says your name is ' + data.name + ".\nView browser 'Console Log' for more details");
      });
      // Retrieves user data from OAuth provider by using #get() and
      // OAuth provider url
      instagram.get('/v1/users/self').then(data => {
        console.log('self data:', data);
      })
    });
  })


// Article link:
// https://www.developerdrive.com/2014/02/how-to-use-the-instagram-api/

// Second article link:
// https://coderwall.com/p/difz1q/javascript-instagram-social-login-button-for-oauth