import { Meteor } from 'meteor/meteor';
Orders = new Mongo.Collection("orders");
Meteor.startup(() => {
  if (Orders.find().count() == 0) {
  	Orders.insert({_id: "87654325", 
	items: [ {item:"Diet Coke", quantity:1 , price:1.75},
			 {item:"Coke", quantity:2 , price:1.75}
			],
	total: 49.70});
  };
});
