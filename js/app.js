'use strict';

var myStores = [];
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '8pm', 'total'];
var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seaCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitol = new Store('Capitol Hill', 20, 38, 3.3);
var alki = new Store('Alki', 2, 16, 4.6);

var body = document.getElementsByTagName('fieldset')[0];
var table = document.createElement('table');
var tbody = document.createElement('tbody');

function Store(storeName, minCust, maxCust, avgCookies){
  this.name = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.salesArr = [];
  this.randCust = function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  };
  this.cookiesSold = function(){
    var total = 0;
    for(var i = 0; i < storeHours.length - 1; i++) {
      var cookiesPerHour = Math.floor(this.avgCookies * this.randCust());
      this.salesArr.push(cookiesPerHour);
      total += cookiesPerHour;
    }
    this.salesArr.push(total);
  };
  this.generateTableRow = function(){
    this.cookiesSold();
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
//for loop calls methods to add to table
for (var i = 0; i < myStores.length; i++) {
  myStores[i].generateTableRow();
}
//create JS events for user entry
var form = document.getElementById('the-form');

function submitButton(event){
  event.preventDefault();
  var theFormItself = event.target;
  var storeName = theFormItself.elements['storeName'].value;
  var minCust = Math.floor(theFormItself.elements['minCust'].value);
  var maxCust = Math.floor(theFormItself.elements['maxCust'].value);
  var avgCookies = theFormItself.elements['avgCookies'].value;
  if(maxCust < minCust){
    confirm('You put the maximum sales is less than minimum sales');
  }else{
    var userStore = new Store(storeName, minCust, maxCust, avgCookies);'use strict';

    ////////////////////////////////////////////////////////////
    // Configuration
    ////////////////////////////////////////////////////////////

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

    //DOM manimpulation variables
    var table = document.createElement('table');
    var tbody = document.createElement('tbody');

    ////////////////////////////////////////////////////////////
    // Configuration
    // Object Constructor, to create defined stores and take data from user input
    // to create a new store and generate sales data.
    ////////////////////////////////////////////////////////////
    function Store(storeName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer){
      this.name                  = storeName;
      this.minCustomersPerHour   = minCustomersPerHour;
      this.maxCustomersPerHour   = maxCustomersPerHour;
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
        var trStoreName = document.createElement('tr');
        var tdSalesPerHour = document.createElement('td');
        tbody.appendChild(trStoreName);
        trStoreName.appendChild(tdSalesPerHour);
        tdSalesPerHour.innerText = this.name;

        for(var i = 0; i < storeHours.length; i++){
          var td = document.createElement('td');
          td.innerText = this.populateCookiesSoldPerHour[i];
          trStoreName.appendChild(td);
        }
        table.appendChild(tbody);
      };
      myStores.push(this);
    }

    ////////////////////////////////////////////////////////////
    // Creates Table Headers w/ store hours
    ////////////////////////////////////////////////////////////
    var form = document.getElementById('the-form');

    function renderSalesTableHeader (){
      var tableBody         = document.getElementsByTagName('body')[0];
      var headerStoreHours  = document.createElement('thead');
      var tr                = document.createElement('tr');
      var storePlaceholder  = document.createElement('th');
      storePlaceholder.innerText = 'Store Name';

      headerStoreHours.appendChild(tr);
      headerStoreHours.appendChild(storePlaceholder);
      table.appendChild(headerStoreHours);
      tableBody.appendChild(table);

      for(var i = 0; i < storeHours.length; i++){
        var th        = document.createElement('th');
        th.innerText  = storeHours[i];
        headerStoreHours.appendChild(th);
      }
    };
    ////////////////////////////////////////////////////////////
    // Creates Table Footers w/ store hourly totals
    ////////////////////////////////////////////////////////////
    function renderSalesTotalFooter(){
      var tFootTotal      = document.createElement('tfoot');
      var tRowDataTotals  = document.createElement('tr');
      var tableDataTotals = document.createElement('td');

      tRowDataTotals.appendChild(tableDataTotals);
      tFootTotal.appendChild(tRowDataTotals);
      table.appendChild(tFootTotal);

      tableDataTotals.innerText = 'Hourly Totals';
    //For loop to generate hourly totals for all stores
      for(var i = 0; i < storeHours.length; i++){
        var hourlyTotal = 0;
        for(var j = 0; j < myStores.length; j++){
          hourlyTotal += myStores[j].populateCookiesSoldPerHour[i];
        }

        tableDataTotals           = document.createElement('td');
        tableDataTotals.innerText = hourlyTotal;
        tRowDataTotals.appendChild(tableDataTotals);
      }
      tbody.appendChild(tRowDataTotals);
    }

    ////////////////////////////////////////////////////////////
    // User Initializes by Submit Button Event
    ////////////////////////////////////////////////////////////

    function userSubmitButtonEvent(event){
      event.preventDefault();
      var storeName       = event.target.elements['storeName'].value;
      var minCustomersPerHour = Math.floor(event.target.elements['minCustomersPerHour'].value);
      var maxCustomersPerHour = Math.floor(event.target.elements['maxCustomersPerHour'].value);
      var avgCookiesPerCustomer = event.target.elements['avgCookiesPerCustomer'].value;
    //To prevent error from user input, if user enters bad data,
    //program will alert user to enter good data
      if(maxCustomersPerHour < minCustomersPerHour){
        confirm('You put the maximum sales is less than minimum sales');
      }else{
        var userStore = new Store(
          storeName,
          minCustomersPerHour,
          maxCustomersPerHour,
          avgCookiesPerCustomer);
        var table = document.getElementsByTagName('table')[0];
        var totalsRow = document.getElementsByTagName('table')[0];
        //after user submits, the hourly total row is removed, user store info is //entered and the total row is re-rendered.
        tbody.removeChild(tbody.lastChild);
        userStore.appendTableRow();
        renderSalesTotalFooter();
      }
      form.reset();
    };
    form.addEventListener('submit', userSubmitButtonEvent);

    //////////////////////////////////////
    /////////////////// Execute Program
    //////////////////////////////////////

    //Current and new store will be pushed into this array
    var myStores = [];
    //current stores using object constructor
    var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
    var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
    var seaCenter = new Store('Seattle Center', 11, 38, 3.7);
    var capitol = new Store('Capitol Hill', 20, 38, 3.3);
    new Store('Alki', 2, 16, 4.6);

    //for loop calls methods to add to table
    for (var i = 0; i < myStores.length; i++) {
      myStores[i].appendTableRow();
    }
    //call table rendering DOM manipulation
    renderSalesTableHeader();
    renderSalesTotalFooter();
    var table = document.getElementsByTagName('table')[0];
    var totalsRow = document.getElementsByTagName('table')[0];
    // tfoot.removeChild(totalsRow);//remove existing total row
    userStore.generateTableRow();
  }
  form.reset();
};
form.addEventListener('submit', submitButton);
// Create Footer Total Function
var footTr = document.createElement('tr');

function renderFooter(){
  var footTd = document.createElement('td');
  footTd.innerText = 'Hourly Totals';
  footTr.appendChild(footTd);
  for(var i = 0; i < storeHours.length; i++){
    var hourlyTotal = 0;
    for(var j = 0; j < myStores.length; j++){
      hourlyTotal += myStores[j].salesArr[i];
    }
    footTd = document.createElement('td');
    footTd.innerText = hourlyTotal;
    footTr.appendChild(footTd);
  }
  tbody.appendChild(footTr);
}
//calling header footer function
renderHeader();
renderFooter();
