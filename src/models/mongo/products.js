'use strict';
import mongoose from 'mongoose';
require('mongoose-schema-jsonschema')(mongoose);

const products = mongoose.Schema({
  name: {
    category: { type:String, required:true },
    name: { type:String, required:true },
    display_name: { type:String, required:true },
    description: { type:String, required:true },
  },
});

export default mongoose.model('products', products);