import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
 while(Categories.find().count() > 0){
     Categories.remove(Categories.findOne()._id);
 }

  if(Categories.find().count() === 0) {
      Categories.insert({
          id:'1',
          name:'Types of wood',
          questions: [
              {points:"100", question:'lalalal lalala ipsum lorum dipsum'},
              {points:"200", question:'q2'},
              {points:"300", question:'q3'},
              {points:"400", question:'q4'},
              {points:"500", question:'q5'},
          ]
      });
      Categories.insert({
          id:'2',
          name:'Types of steel',
          questions: [
              {points:"100", question:'lalalal lalala ipsum lorum dipsum'},
              {points:"200", question:'q2'},
              {points:"300", question:'q3'},
              {points:"400", question:'q4'},
              {points:"500", question:'q5'},
          ]
      });
      Categories.insert({
          id:'3',
          name:'Classic films',
          questions: [
              {points:"100", question:'lalalal lalala ipsum lorum dipsum'},
              {points:"200", question:'q2'},
              {points:"300", question:'q3'},
              {points:"400", question:'q4'},
              {points:"500", question:'q5'},
          ]
      });
      Categories.insert({
          id:'4',
          name:'Mustard',
          questions: [
              {points:"100", question:'lalalal lalala ipsum lorum dipsum'},
              {points:"200", question:'q2'},
              {points:"300", question:'q3'},
              {points:"400", question:'q4'},
              {points:"500", question:'q5'},
          ]
      });
      Categories.insert({
          id:'5',
          name:'Best wizards',
          questions: [
              {points:"100", question:'lalalal lalala ipsum lorum dipsum'},
              {points:"200", question:'q2'},
              {points:"300", question:'q3'},
              {points:"400", question:'q4'},
              {points:"500", question:'q5'},
          ]
      });

  }
});
