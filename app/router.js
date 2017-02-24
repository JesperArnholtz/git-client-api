import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("user", { path: "/users/:login" }, function() {
    this.route('repositories', function() {
      this.route('repository', { path: ":repoName" });
    });
    // this.route('repository',  );
  });

});

export default Router;
