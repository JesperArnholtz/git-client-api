import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    console.log(params);

    const user = this.modelFor("user");
    const url = "https://api.github.com/repos/" + params.login + "/" + params.repoName;
    return Ember.$.getJSON(url);
  }
  //model: function (params) {
  //  return Ember.$.getJSON(this.modelFor('user').repos_url + "/" + user.login + "/" + params.repoName);
  //}
});
