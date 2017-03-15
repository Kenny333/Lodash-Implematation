/**
 * 
 * @authors Calvin Kang (calvinkang333@gmail.com)
 * @date    2017-02-16
 * @version $Id$
 */

_.reduce = function(collection, iterator, accumulator) {
  _.each(collection, function(item) {   
    if (accumulator === undefined) {
      accumulator = item;
    } else {
      accumulator = iterator(accumulator, item);
    }
  });
  return accumulator;
};