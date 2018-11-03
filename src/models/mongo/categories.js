'use strict';

import mongoose from 'mongoose';
require('mongoose-schema-jsonschema')(mongoose);

const categories = mongoose.Schema({
  name: { type:String, required:true },
  display_name: { type:String, required:true },
  description: { type:String, required:true },
});


export default mongoose.model('categories', categories);
