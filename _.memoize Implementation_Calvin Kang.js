/**
 * 
 * @authors Calvin Kang (calvinkang333@gmail.com)
 * @date    2017-02-17
 * @version $Id$
 */

_.memoize = function(func) {
    var storage = {};

    return function() {
      var arg = JSON.stringify(arguments);
      if (!storage[arg]) {
        storage[arg] = func.apply(this, arguments);
      }

      return storage[arg];
    };
  };