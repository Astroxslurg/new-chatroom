import { Template } from 'meteor/templating';
import './posts.html';
import { Posts } from '../api/posts.js';

Template.posts.helpers({
  posts: function () {
    return Posts.find({});
  },
});
