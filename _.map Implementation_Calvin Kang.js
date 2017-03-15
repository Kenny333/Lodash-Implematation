/**
 * 
 * @authors Calvin Kang (calvinkang333@gmail.com)
 * @date    2017-02-17
 * @version $Id$
 */

_.map = function(collection, iterator) {
  	var result = [];

 	_.each(collection, function (item) {
  	result.push(iterator(item));
 });
 return result;
};

