import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
 while(Categories.find().count() > 0){
     Categories.remove(Categories.findOne()._id);
 }

  if(Categories.find().count() === 0) {
      Categories.insert({
          id:'1',
          name:'WHATS UP',
          cat:'1',
          questions: [
              {cat:'1', points:"100", question:'lalalal lalala ipsum lorum dipsum, asjdnasudaniu asndia ajiasndua ajisuad ajdijsadia asdjaiudbaaisdab asjidad aidsusadai assdui'},
              {cat:'1', points:"200", question:'q2'},
              {cat:'1', points:"300", question:'q3'},
              {cat:'1', points:"400", question:'q4'},
              {cat:'1', points:"500", question:'q5'},
          ]
      });
      Categories.insert({
          id:'2',
          name:'Types of steel',
          cat:'2',
          questions: [
              {cat:'2', points:"100", question:'lalalal lalala ipsum lorum dipsum'},
              {cat:'2', points:"200", question:'q2'},
              {cat:'2', points:"300", question:'q3'},
              {cat:'2', points:"400", question:'q4'},
              {cat:'2', points:"500", question:'q5'},
          ]
      });
      Categories.insert({
          id:'3',
          name:'Classic films',
          cat:'3',
          questions: [
              {cat:'3', points:"100", question:'lalalal lalala ipsum lorum dipsum'},
              {cat:'3', points:"200", question:'q2'},
              {cat:'3', points:"300", question:'q3'},
              {cat:'3', points:"400", question:'q4'},
              {cat:'3', points:"500", question:'q5'},
          ]
      });
      Categories.insert({
          id:'4',
          name:'Mustard',
          cat:'4',
          questions: [
              {cat:'4', points:"100", question:'lalalal lalala ipsum lorum dipsum'},
              {cat:'4', points:"200", question:'q2'},
              {cat:'4', points:"300", question:'q3'},
              {cat:'4', points:"400", question:'q4'},
              {cat:'4', points:"500", question:'q5'},
          ]
      });
      Categories.insert({
          id:'5',
          name:'Best wizards',
          cat:'5',
          questions: [
              {cat:'5', points:"100", question:'lalalal lalala ipsum lorum dipsum'},
              {cat:'5', points:"200", question:'q2'},
              {cat:'5', points:"300", question:'q3'},
              {cat:'5', points:"400", question:'q4'},
              {cat:'5', points:"500", question:'q5'},
          ]
      });

  }
});
