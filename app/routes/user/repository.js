import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    var user = this.modelFor("user");
    var url = "https://api.github.com/repos/" + user.login + "/" + params.reponame;
    return Ember.$.getJSON(url);
  }
  //model: function (params) {
  //  return Ember.$.getJSON(this.modelFor('user').repos_url + "/" + user.login + "/" + params.repoName);
  //}
});
