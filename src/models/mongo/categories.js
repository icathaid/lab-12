'use strict';

const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const categories = mongoose.Schema({
  name: {type:String, require:true},
  display_name: {type:String, require:true},
  description: {type:String, require:true},
}, { toObject:{virtuals:true}, toJSON:{virtuals:true} });

categories.virtual('products', {
  ref: 'products',
  justOne:false,
});

categories.pre('find', function() {
  try {
    console.log('populating categories with products');
    this.populate('products');
  }
  catch(e) {
    console.error('Find One Error', e);
  }
});

export default mongoose.model('categories', categories);
