/**
 * 
 * @authors Calvin Kang (calvinkang333@gmail.com)
 * @date    2017-02-16
 * @version $Id$
 */
_.each = function(collection, iterator){
	if(Array.isArray(collection)){
		for(var key = 0; key < collection.length; key++){
			iterator(collection[key], key, collection);
		}
	}else{
		for(var objKey in collection){
			iterator(collection[objKey], objKey, collection);
		}
	}
};
