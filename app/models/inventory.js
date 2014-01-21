/** 
 * Module Dependencies
 */
var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;

/**
 * Inventory Schema
 */
 var InventorySchema = new Schema({
	updated: {
	   type: Date,
	   default: Date.now
	},
	items: [{
	   product: {
	      type: String
	   },
	   qty: {
	      type: Number
	   },
	   lastChecked: {
	      type: Date
	   },
	   supplier: {
	      type: String
	   },
	   SKU: {
	      type: Number
	   },
	   price: {
	      type: Number
	   },
	   lastOrdered: {
	      type: Date
  	   }	
	}]
});

/**
 * Statics
 */
InventorySchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).exec(cb);
    }
};


mongoose.model('Inventory', InventorySchema);
	
