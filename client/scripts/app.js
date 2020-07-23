var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function () {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);


  },

  fetch: function (callback = () => { }) {
    Parse.readAll((data) => {
      // examine the response from the server request:

      Messages.storage = data
      // console.log('this is inside of message storage', Messages.storage);
      MessagesView.initialize(Messages.storage);
      console.log(data);

      // MessagesView.initialize(data);

      callback();
    });
  },

  startSpinner: function () {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function () {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};