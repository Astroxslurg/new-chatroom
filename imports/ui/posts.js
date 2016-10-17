import { Template } from 'meteor/templating';
import './posts.html';

Template.posts.helpers({
  posts() {
    return [
      { text: "post 1"},
      { text: "post 2"},
    ];
  },
});
