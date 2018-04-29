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


function loadData(absUrl, returnType) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", absUrl, false);
  //false -> synchrnous call  (blocking xhr), read fill fully before returning to background js
  xhr.send(null);
  if (xhr.readyState !== 4) {
    return;
  }

  return JSON.parse(xhr.responseText);
}


self.onmessage = function(e) {
  var workerResult = loadData(e.data[0], e.data[1]);
  postMessage(workerResult.commonPasswords);
}