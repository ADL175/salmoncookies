'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '8pm', 'total'];
//15 hours in day

// create ul tag
// create one li tag
// fill li tag innertext w/ information
// append li tag to ul as child
// append ul to body
// var element = document.createElement(tagName[, options]);


var firstPike = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  hourlysales: [],

  randomCustomerPerHour: function(){
    return Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust));
  },
  sales: function(){
    var total= 0;
    for (var i = 0; i <= storeHours.length - 1; i++){
      this.hourlysales.push(Math.ceil(this.randomCustomerPerHour() * this.avgCookie));
      console.log('sales is: ' + this.hourlysales);
      total = total + this.hourlysales[i];
      console.log('total is: ' + total);
    }
    this.hourlysales.push(total);
  }

};

var seaTac = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  hourlysales: [],

  randomCustomerPerHour: function(){
    return Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust));
  },
  sales: function(){
    var total= 0;
    for (var i = 0; i <= storeHours.length - 1; i++){
      this.hourlysales.push(Math.ceil(this.randomCustomerPerHour() * this.avgCookie));
      console.log('sales is: ' + this.hourlysales);
      total = total + this.hourlysales[i];
      console.log('total is: ' + total);
    }
    this.hourlysales.push(total);
  }
};

var seattleCenter = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  hourlysales: [],

  randomCustomerPerHour: function(){
    return Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust));
  },
  sales: function(){
    var total= 0;
    for (var i = 0; i <= storeHours.length - 1; i++){
      this.hourlysales.push(Math.ceil(this.randomCustomerPerHour() * this.avgCookie));
      console.log('sales is: ' + this.hourlysales);
      total = total + this.hourlysales[i];
      console.log('total is: ' + total);
    }
    this.hourlysales.push(total);
  }
};

var capitol = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  hourlysales: [],

  randomCustomerPerHour: function(){
    return Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust));
  },
  sales: function(){
    var total= 0;
    for (var i = 0; i <= storeHours.length - 1; i++){
      this.hourlysales.push(Math.ceil(this.randomCustomerPerHour() * this.avgCookie));
      console.log('sales is: ' + this.hourlysales);
      total = total + this.hourlysales[i];
      console.log('total is: ' + total);
    }
    this.hourlysales.push(total);
  }
};

var alki = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  hourlysales: [],

  randomCustomerPerHour: function(){
    return Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust));
  },
  sales: function(){
    var total= 0;
    for (var i = 0; i <= storeHours.length - 1; i++){
      this.hourlysales.push(Math.ceil(this.randomCustomerPerHour() * this.avgCookie));
      console.log('sales is: ' + this.hourlysales);
      total = total + this.hourlysales[i];
      console.log('total is: ' + total);
    }
    this.hourlysales.push(total);
  }
};
