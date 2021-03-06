$(document).ready(function () {

    $("#findfriends").click(getFriendsList);
});


// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI() {
//        console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function (response) {
//            console.log('Successful login for: ' + response.name);
        document.getElementById('status').innerHTML =
            'Thanks for logging in, ' + response.name + '!';
        //callFCallback(response, 'facebook');
    });
}

function fbLogout() {
    FB.logout(function (response) {
        //Do what ever you want here when logged out like reloading the page
        window.location.reload();
    });
}

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
}

function getFriendsList() {
    FB.api(
        "/me/friends",
        function (response) {
            if (response && !response.error) {
                /* handle the result */
                console.log(response);
            }
        }
    );
}