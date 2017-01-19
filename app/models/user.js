import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),  
  company: DS.attr('string'),  
  location: DS.attr('string'),  
  email: DS.attr('string'),  
  avatar_url: DS.attr('string'),  
  avatar_url: DS.attr('string'),  
  public_repos: DS.attr('string'),  
  public_gists: DS.attr('string')
});
