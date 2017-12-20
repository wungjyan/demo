/**
 *  本地存储
 */

const localEvent = function (key) {
  this.get = function () {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : '';
  }
  this.set = function (obj) {
    localStorage.setItem(key, JSON.stringify(obj));
  }
  this.clear = function () {
    localStorage.removeItem(key);
  }
}

export const local = new localEvent('mydata');
