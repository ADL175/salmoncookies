'use strict';

var myStores = [];
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '8pm', 'total'];

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
    for(var i = 0; i < storeHours.length - 1; i++) {
      var cookiesPerHour = Math.floor(this.avgCookies * this.randCust());
      this.salesArr.push(cookiesPerHour);
      total += cookiesPerHour;
    }
    this.salesArr.push(total);
    console.log(this.salesArr);
  };
  this.generateTableRow = function(){
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
  };
  myStores.push(this);
}

function renderHeader (){
  var table = document.createElement('table');
  var thead = document.createElement('thead');
  var tr = document.createElement('tr');
  var blank = document.createElement('th');
  thead.appendChild(tr);
  thead.appendChild(blank);
  table.appendChild(thead);
  body.appendChild(table);
  blank.innerText = 'Store Name';
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

for (var i = 0; i < myStores.length; i++) {
  myStores[i].generateTableRow();
}

var form = document.getElementById('the-form');
function alertTheUser(event){
  event.preventDefault();
  var theFormItself = event.target;
  var storeName = theFormItself.elements['storeName'].value;
  var minCust = Math.floor(theFormItself.elements['minCust'].value);
  var maxCust = Math.floor(theFormItself.elements['maxCust'].value);
  var avgCookies = theFormItself.elements['avgCookies'].value;
  if(maxCust < minCust ){
    console.log('User is a moron');
    confirm('Error, You\'re a moron! You put the maximum sales is less than minimum sales');
  }else{
    var userStore = new Store(storeName, minCust, maxCust, avgCookies);
    userStore.generateTableRow();}
};
form.addEventListener('submit', alertTheUser);
