import Ember from 'ember';

export default Ember.Route.extend({

  model: function (params) {
    return Ember.$.getJSON(this.modelFor('user').repos_url); 
  }
});
