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

    const target = event.target;
    console.log(target);
    text = target.text.value;

    Posts.insert({
      text
    });
    target.text.value = '';
  },
});
