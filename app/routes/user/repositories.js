import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    //console.log(this.modelFor('user').repos_url);
    return Ember.$.getJSON(this.modelFor('user').repos_url);
  }
});
