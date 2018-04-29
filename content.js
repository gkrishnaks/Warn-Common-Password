/*******************************************************************************

    Warn Common Password - A browser extension/addon that shows a warning notification
    if user enters a "Common Password" in Password field or Security Answer field.
    Copyright (C) 2018 Gokulakrishna K Sudharsan

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

    Home: https://github.com/gkrishnaks
*/

var index = [];
var inputcollection = document.getElementsByTagName('INPUT');
if (inputcollection != null) {
  for (let i = 0; i < inputcollection.length; i++) {
    if (inputcollection[i].getAttribute('type') === 'password') {
      index.push(i);
    }
  };

  // Now, we attach 2 event types listeners
  // Input - if user is going to use password manager or copy paste password from somewhere
  // KeyUp - if user enters using keyboard

  if (index.length > -1) {
    for (let k = 0; k < index.length; k++) {
      inputcollection[index[k]].addEventListener("input", checkpassword);
      inputcollection[index[k]].addEventListener("keyup", checkpassword);


    }
  }
}
/*
let previousPassword = ' ';
let i = 0;
let key; 

function keydownhandle(event) {
  key = event.key; //alert('keydown event\n\n' + 'key: ' + keyName); });
  i += 1;
}
*/

function checkpassword(event) {
  //if user pasted a password into password field - we can run this function only once - after that, listen to keyup.
  //Let's not worry if user pastes same password again - to avoid repeated notifications sent to device
  event.target.removeEventListener("input", checkpassword);

  // Nearly all websites don't allow passwords less than 6 characters, or we assume that!
  // So No need to look in the common words list until user enters 6 characters

  if (event.target.value.length < 6) {
    return;
  }
  //previousPassword=value;
    
  // Without this condition below, notification will keep showing up 
  // Scenario - user enters "password" as their password - and notification is shown thrice - for "passwo", "passwor" and "password"
  // We need not show notifications again when they use backspace to clear out what they entered.
    
  if (event.type === "keyup" && (event.key === "Backspace" || event.key === "Delete" || event.key === "Control")) {
    //  console.log(event.key);
    return;
  }


  chrome.runtime.sendMessage({
    value: event.target.value
  });
  //function(response) {
  // console.log('returnned to content script' + response.message);
  //});

}

/*  if (previousPassword != null && previousPassword.includes(value)) {
    console.log(previousPassword + ' prev contains  ' + value);
    return;
  }
  if (previousPassword != null && value.includes(previousPassword)) {
    console.log(value + ' contains prev' + previousPassword);

    return;
  }*/

/*if (i == 0) {
  document.addEventListener('keydown', keydownhandle);
}*/
//  console.log(key);
/*if (i === 0) {
  previousPassword = value;
  i = 1;
}*/

/*  if (key === "Backspace" || key === "Delete") {
    console.log('backspace, value vurrently is' + value);
    return;
    //without this, it will continue to show more notifications as the user clears a common password
  }*/


// we will take this from storage based on user setting
// Searching within 1.6 mil words will be default as it's safer
// User can select top 300K only from settings page if she feels  searching across 1.6 mil is slow
/*  let searchsize="default_300k." // or default_1mil
    if(searchsize==="default_300k"){
    searchDict=commonPasswords.slice(0,300001)
  }
  else{
    searchDict=commonPasswords;
  }

  var before = performance.now();
  var k = searchDict.indexOf(value);

  var time = performance.now() - before;
  console.log("time to search = "  + time + " ms");



  //get unsafepasswords from json in background script and SendMessage to here, for now..
  //  let unsafepasswords=['password','password1','Password','qwerty'];
  if (k >= 0) {
    console.log("index of " + event.target.value + " is " + k);
    //event.target.value="";
   // console.log(!previousPassword.includes(value)); //+ 'and' + !value.includes(previousPassword));
    // if (!previousPassword.includes(value)) // && !value.includes(previousPassword)) {
    chrome.runtime.sendMessage({
      type: "NOTIFY"
    }, function(a) {
      //previousPassword = value;
      //  document.removeEventListener(keydownhandle);
      //    i = 0;
    });


}*/
