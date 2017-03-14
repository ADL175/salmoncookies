'use strict';

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
    for(var i = 0; i < storeHours.length -1; i++) {
    //-1 of storeHours array [total]
    var cookiesPerHour = Math.floor(this.avgCookies * this.randCust());
    //generates cookies sales total
    this.salesArr.push(cookiesPerHour);
    total += cookiesPerHour;
    }
    this.salesArr.push(total);
    console.log(this.salesArr);
    //adds total number of sales for day to the sales array
  };
  this.createListItems= function(){
    //create li elements and push them to specified to element
    var newHeading = document.createElement('h2');
    newHeading.innerText = this.storeName;
    body.appendChild(newHeading);
    var firstUl = document.createElement('ul');
    for(var i = 0; i < storeHours.length; i++) {
      //for every hour I ewant to put put the cookies sold for that hour;
      var newEl = document.createElement('li'); //creates list item
      newEl.innerText = storeHours[i] + ': ' + this.salesArr[i] + ' cookies';
      firstUl.appendChild(newEl);
      //append the new list item to the ul tag that we created
    }
    body.appendChild(firstUl);
    //append the ul tag to the body
  }
}

function tableFunc (){
 var newTable  = document.createElement('table');
 var newTabHead = document.createElement('thead');
 newTabHead.innerText = this.storeName;
 thead.appendChild(newTabHead);
 var tBody = document.createElement('tbody')

}
tableFunc(poop.createListItems());


var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var poop = new Store('Poop', 34, 213, 3.3);
firstAndPike.cookiesSold();
firstAndPike.createListItems();
poop.cookiesSold();
poop.createListItems();
