import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    console.log(params);
    return Ember.$.getJSON("https://api.github.com/users/" + params.login);
    
  }
});
