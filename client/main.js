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
    },
    color: function() {
        console.log('coloring:'+ colorArray[parseInt(this.cat)-1])
        return colorArray[parseInt(this.cat)-1]
    }
});
Template.QuestionCard.helpers({
 	points: function () {
        return this.points;
    },
    question: function () {
        return this.question;
    },
    color: function() {
        console.log('coloring:'+ colorArray[parseInt(this.cat)-1])
        return colorArray[parseInt(this.cat)-1]
    }
});

var colorArray = [
    '#97b8ed','#e8adf7','#cef7ad','#f7adad','#c8adf7'
]

//click on QC event(s)
Template.QuestionCard.events({
  'click'(event, instance) {
        var real = instance.$(questionCard)
        var clone = real.clone( true )

        clone.css({"position": "absolute"});
        clone.appendTo($(mainDiv));
        clone.css({"position": "absolute", "margin":"auto"});
        clone.animate({'width' : '70%', 'height' : '70%', 'opacity' : 1, 'top' : "15%", 'left' : "15%"}, 1000, function(){
            clone.children('h2').first().css({"visibility":"visible", 'opacity':0})
            clone.children('p').first().animate({'font-size':'22pt'}, 700, function(){
                //clone.children('h2').first().animate({'opacity':1}, 2000)
                //fadein letter by letter
                $(function() {
                  //get the welcome msg element
                  var $all_msg = clone.children('h2').first()
                  //get a list of letters from the welcome text
                  var $wordList = clone.children('h2').first().text().split("");
                  //clear the welcome text msg
                  clone.children('h2').first().text("");

                  clone.children('h2').first().css({'opacity':1, 'display': 'inline-block'})


                  //loop through the letters in the $wordList array
                  $.each($wordList, function(idx, elem) {
                    //create a span for the letter and set opacity to 0
                    var newEL = $("<span/>").text(elem).css({
                      opacity: 0
                    });
                    //append it to the welcome message
                    newEL.appendTo($all_msg);
                    //set the delay on the animation for this element
                    newEL.delay(idx * 70);
                    //animate the opacity back to full 1
                    newEL.animate({
                      opacity: 1
                  }, 1000);
                  });
                });
            })

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
