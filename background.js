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

var dict = [];
var loadworker = new Worker(chrome.extension.getURL('readData.js'));

function worker() {
  let absUrl = chrome.extension.getURL("data.JSON");
  loadworker.postMessage([absUrl, 'json']);
}
worker();

loadworker.onmessage = function(e) {
  dict = e.data;
loadworker.terminate();
//loadworker=undefined;
}


function notify(request, sender) {


  // TODO we will take this from storage based on user setting
  // Searching  within 1.6 mil words will be default as it's safer
  // User can select top 300K only from settings page if she feels  searching across 1.6 mil is slow
  let searchsize = "TODO" // or default_1mil
  //let searchDict = [];
  if (searchsize === "default_300k") {
    dict = dict.slice(0, 300001)
  } 
	/* else {
    searchDict = dict;
  } */
  //let value=request.value;
  //var before = performance.now();
  //var k = searchDict.indexOf(value);

  // var time = performance.now() - before;
  // console.log("time to search = "  + time + " ms");

  if (dict.indexOf(request.value) > -1) {
    chrome.notifications.create({
      "type": "basic",
      "title": "Warning: Weak, Common Password",
      "message": "Make the password stronger by adding a word, numbers or more symbols!",
      "iconUrl": "icons/lockIcon.png"
    });

  }
}

chrome.runtime.onMessage.addListener(notify);
