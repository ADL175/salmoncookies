'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '8pm', 'total'];

var myStores = [];

var body = document.getElementsByTagName('body')[0];

function Store(storeName, minCust, maxCust, avgCookies){
  this.name = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.salesArr = [];
  this.randCust = function(){
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    console.log(this.randCust);
  };
  this.cookiesSold = function(){
    var total = 0;
    for(var i = 0; i < storeHours.length -1; i++) {
    var cookiesPerHour = Math.floor(this.avgCookies * this.randCust());
    this.salesArr.push(cookiesPerHour);
    total += cookiesPerHour;
    }
    this.salesArr.push(total);
    console.log(this.salesArr);
    //adds total number of sales for day to the sales array
  };
  this.createListItems= function(){
    this.cookiesSold();
    var table = document.getElementsByTagName('table')[0];
     var tbody = document.createElement('tbody');
     table.appendChild(tbody);
     var tr = document.createElement('tr');
     tbody.appendChild(tr);
     var tData = document.createElement('td');
     tr.appendChild(tData);
     tData.innerText = this.name;
      for(var i = 0; i < storeHours.length; i++){
          var td = document.createElement('td');
          td.innerText = this.salesArr[i];
          tr.appendChild(td);
        }
        table.appendChild(tbody);
    }
    myStores.push(this);
}//   }
//
function renderHeader (){
  var table = document.createElement('table');
  body.appendChild(table);
  var thead = document.createElement('thead');
  table.appendChild(thead);
  var tr = document.createElement('tr');
  thead.appendChild(tr);
  var blank = document.createElement('th');
  blank.innerText = 'Store Name';
  thead.appendChild(blank);
  for(var i = 0; i < storeHours.length; i++){
    var th = document.createElement('th');
    th.innerText = storeHours[i];
    thead.appendChild(th);
  }
};

renderHeader();


var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seaCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitol = new Store('Capitol Hill', 20, 38, 3.3);
var alki = new Store('Alki', 2, 16, 4.6);

firstAndPike.createListItems();
seaTac.createListItems();
seaCenter.createListItems();
capitol.createListItems();
alki.createListItems();
// firstAndPike.cookiesSold();
// firstAndPike.createListItems();
// poop.cookiesSold();
// poop.createListItems();
