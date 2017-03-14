'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '8pm', 'total'];

var body = document.getElementsByTagName('body')[0];

var firstAndPike = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  salesArr: [],
  randCust: function(){
    //generate random # of cust
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    console.log(this.randCust);
  },
  cookiesSold: function(){
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
  },
  createListItems: function(){
    //create li elements and push them to specified to element
    var newHeading = document.createElement('h2');
    newHeading.innerText = this.name;
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
  // var li = document.createElement('li');
  // li.innerText = 'Total :' + firstAndPike.total;
};

firstAndPike.cookiesSold();//run the cookies sold method
firstAndPike.createListItems();

var seatac = {
  name: 'SeaTac',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  salesArr: [],
  randCust: function(){
    //generate random # of cust
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    console.log(this.randCust);
  },
  cookiesSold: function(){
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
  },
  createListItems: function(){
    //create li elements and push them to specified to element
    var newHeading = document.createElement('h2');
    newHeading.innerText = this.name;
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

};

seatac.cookiesSold();//run the cookies sold method
seatac.createListItems();

var seattleCenter = {
  name: 'Seattle Center',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  salesArr: [],
  randCust: function(){
    //generate random # of cust
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    console.log(this.randCust);
  },
  cookiesSold: function(){
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
  },
  createListItems: function(){
    //create li elements and push them to specified to element
    var newHeading = document.createElement('h2');
    newHeading.innerText = this.name;
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

};

seattleCenter.cookiesSold();//run the cookies sold method
seattleCenter.createListItems();

var capitolHill = {
  name: 'Capitol Hill',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  salesArr: [],
  randCust: function(){
    //generate random # of cust
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    console.log(this.randCust);
  },
  cookiesSold: function(){
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
  },
  createListItems: function(){
    //create li elements and push them to specified to element
    var newHeading = document.createElement('h2');
    newHeading.innerText = this.name;
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

};

capitolHill.cookiesSold();//run the cookies sold method
capitolHill.createListItems();

var alki = {
  name: 'Alki',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  salesArr: [],
  randCust: function(){
    //generate random # of cust
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    console.log(this.randCust);
  },
  cookiesSold: function(){
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
  },
  createListItems: function(){
    //create li elements and push them to specified to element
    var newHeading = document.createElement('h2');
    newHeading.innerText = this.name;
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

};

alki.cookiesSold();//run the cookies sold method
alki.createListItems();
