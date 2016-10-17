import { Template } from 'meteor/templating';
import './posts.html';
import { Posts } from '../api/posts.js';

Template.posts.helpers({
  posts: function () {
    return Posts.find({});
  },
});

Template.postsSubmit.events({
  'submit .posts-submit-form' (event) {
    event.preventDefault();

    user = Meteor.user();
    if (!user){
      console.log("You must be logged in to chat");
      return false;
    }

    const target = event.target;
    text = target.text.value;

    Posts.insert({
      text,
      user,
    });
    target.text.value = '';
  },
});
