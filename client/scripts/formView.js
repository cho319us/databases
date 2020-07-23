var FormView = {

  $form: $('form'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    //define user
    let user = document.username;
    //define message
    let message = {
      username: document.username,
      text: document.getElementById('message').value;
      chatroom: document.getElementById('room-name').value;
    }
    // let message = document.getElementById('message').value;
    //define chatRoom
    // let roomName = document.getElementById('room-name').value;
    MessagesView.render(message, user, roomName);
    console.log(message);
    Parse.create(message);
    console.log('click!');
  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }
};