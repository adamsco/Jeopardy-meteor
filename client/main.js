import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

/*Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});*/

/*Template.Category.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});*/
Template.MainTemplate.helpers({
 	category: function () {
	  return Categories.find();
	}
});
Template.Category.helpers({
 	name: function () {
        return this.name;
    },
    questions: function () {
        return this.questions;
    }
});
Template.QuestionCard.helpers({
 	points: function () {
        return this.points;
    },
    question: function () {
        return this.question;
    }
});

Template.QuestionCard.events({
  'click'(event, instance) {
        // increment the counter when button is clicked

        var real = instance.$(questionCard)
        var clone = real.clone( true )

        clone.css({"position": "absolute"});
        clone.appendTo($(mainDiv));
        clone.css({"position": "absolute", "margin":"auto", "background": "white"});
        clone.animate({'width' : '70%', 'height' : '70%', 'opacity' : 1, 'top' : "15%", 'left' : "15%"}, 1000, function(){
            clone.children('h2').first().css({"visibility":"visible", 'opacity':0})
            clone.children('h2').first().animate({'opacity':1}, 1000)
        })
        instance.$(questionCard).animate({'width' : '0%'}, 400, function() {
            instance.$(questionCard).css({"visibility": "hidden"})
        })
        clone.click(function(){
            clone.animate({'opacity' : 0}, 400, function() {
                clone.remove()
            })
        });
    },
});
