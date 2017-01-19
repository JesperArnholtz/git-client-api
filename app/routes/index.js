import Ember from 'ember';

//var devs = [
//      { login: "robconery", name: "Rob Conery" },
//      { login: "shanselman", name: "Scott Hanselman" },
//      { login: "tomdale", name: "Tom Dale" },
//      { login: "wycats", name: "Yehuda Katz" },
//      { login: "jongalloway", name: "Jon Galloway" },

//]

export default Ember.Route.extend({

  model: function () { return [
      { login: "robconery", name: "Rob Conery" },
      { login: "shanselman", name: "Scott Hanselman" },
      { login: "tomdale", name: "Tom Dale" },
      { login: "wycats", name: "Yehuda Katz" },
      { login: "jongalloway", name: "Jon Galloway" }
  ]}
});
