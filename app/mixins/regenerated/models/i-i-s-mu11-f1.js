import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({});

export let ValidationRules = {};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('F1E', 'i-i-s-mu11-f1', {
    
  });

  modelClass.defineProjection('F1L', 'i-i-s-mu11-f1', {
    
  });
};
