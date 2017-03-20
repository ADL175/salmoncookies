'use strict';


var storeHours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '8pm',
  'total'];

var myStores = [];
var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seaCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitol = new Store('Capitol Hill', 20, 38, 3.3);
var alki = new Store('Alki', 2, 16, 4.6);

var table = document.createElement('table');
var tbody = document.createElement('tbody');
/*Object Constructor to build the stores:
function store =
  contains:
    numCustomersPerHour = randomly genereated customers per hour w/ in limits of minCustomersPerHour and maxCustomersPerHour
    cookiesPerHour
*/
function Store(storeName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer){
  this.name = storeName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
//Cookes Sold for each hour of the store hours, total sum is last item
  this.populateCookiesSoldPerHour = [];
//Generates a random amount of customers per hour, at each store, w/in the limits of minCustomersPerHour and maxCustomersPerHour
  this.numCustomersPerHour = function(){
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
  };
//generates cookies sold per hour at each store,
  this.cookiesPerHour = function(){
    var total = 0;
    for(var i = 0; i < storeHours.length - 1; i++) {
      var cookiesPerHour = Math.floor(this.avgCookiesPerCustomer * this.numCustomersPerHour());
      this.populateCookiesSoldPerHour.push(cookiesPerHour);
      total += cookiesPerHour;
    }
    this.populateCookiesSoldPerHour.push(total);
  };
  this.appendTableRow = function(){
    this.cookiesPerHour();
    var tr = document.createElement('tr');
    tbody.appendChild(tr);
    var tData = document.createElement('td');
    tr.appendChild(tData);
    tData.innerText = this.name;
    for(var i = 0; i < storeHours.length; i++){
      var td = document.createElement('td');
      td.innerText = this.populateCookiesSoldPerHour[i];
      tr.appendChild(td);
    }
    table.appendChild(tbody);
  };
  myStores.push(this);
}

function renderSalesTableHeader (){
  var tableBody = document.getElementsByTagName('body')[0];
  var headerStoreHours = document.createElement('thead');
  var tr = document.createElement('tr');
  var storePlaceholder = document.createElement('th');
  headerStoreHours.appendChild(tr);
  headerStoreHours.appendChild(storePlaceholder);
  table.appendChild(headerStoreHours);
  tableBody.appendChild(table);
  storePlaceholder.innerText = 'Store Name';
  for(var i = 0; i < storeHours.length; i++){
    var th = document.createElement('th');
    th.innerText = storeHours[i];
    headerStoreHours.appendChild(th);
  }
};
//for loop calls methods to add to table
for (var i = 0; i < myStores.length; i++) {
  myStores[i].appendTableRow();
}
//create JS events for user entry
var form = document.getElementById('the-form');

function userSubmitButtonEvent(event){
  event.preventDefault();
  var theFormItself = event.target;
  var storeName = theFormItself.elements['storeName'].value;
  var minCustomersPerHour = Math.floor(theFormItself.elements['minCustomersPerHour'].value);
  var maxCustomersPerHour = Math.floor(theFormItself.elements['maxCustomersPerHour'].value);
  var avgCookiesPerCustomer = theFormItself.elements['avgCookiesPerCustomer'].value;
  if(maxCustomersPerHour < minCustomersPerHour){
    confirm('You put the maximum sales is less than minimum sales');
  }else{
    var userStore = new Store(storeName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer);
    var table = document.getElementsByTagName('table')[0];
    var totalsRow = document.getElementsByTagName('table')[0];
    // tfoot.removeChild(totalsRow);//remove existing total row
    userStore.appendTableRow();
  }
  form.reset();
};
form.addEventListener('submit', userSubmitButtonEvent);
// Create Footer Total Function

function renderSalesTotalFooter(){
  var tFootDataTotals = document.createElement('tr');
  var tableDataTotals = document.createElement('td');
  tableDataTotals.innerText = 'Hourly Totals';
  tFootDataTotals.appendChild(tableDataTotals);
  for(var i = 0; i < storeHours.length; i++){
    var hourlyTotal = 0;
    for(var j = 0; j < myStores.length; j++){
      hourlyTotal += myStores[j].populateCookiesSoldPerHour[i];
    }
    tableDataTotals = document.createElement('td');
    tableDataTotals.innerText = hourlyTotal;
    tFootDataTotals.appendChild(tableDataTotals);
  }
  tbody.appendChild(tFootDataTotals);
}
//calling header footer function
renderSalesTableHeader();
renderSalesTotalFooter();
