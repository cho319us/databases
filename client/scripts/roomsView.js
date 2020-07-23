var RoomsView = {

  $roomsButton: $('#room-button'),
  $select: $('#rooms-select'),
  $roomText: $('#new-room-text'),

  initialize: function () {
    //initializes the button.
    RoomsView.$roomsButton.on('click', Rooms.handleSubmit);
  },

  render: function () {
  }
};

  // handleSubmit: function (event) {
  //   // Stop the browser from submitting the form
  //   event.preventDefault();
  //   $button.on('click', function () {
  //     console.log('did this work?')
  //   });
  //   let drowDown = document.getElementById('rooms-select');
  //   let newRoomName = document.getElementById('roomname').value;
  //   let newOption = $(`<option id=${newRoomName}>${newRoomName}</option>`);
  //   // let roomname = Rooms.newRoom();
  //   // Parse.create(room);
  //   $(drowDown).append(newOption);
  //   console.log('click!');
  // },