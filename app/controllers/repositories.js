import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ["user"],
  user: Ember.computed.alias("controllers.user")
});
