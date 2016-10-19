Meteor.methods({
  sendCode: function (vat) {
    return Orders.findOne(vat); 
  }
});

Template.body.events({
	'click #pay': function () {
	  //Deduct from credit
	  alert("Confirmed");
	}
});

Meteor.startup(function () {
    Meteor.defer(function () {Router.go('/#home');});
});