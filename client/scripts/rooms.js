var Rooms = {

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    //gets the text value in the text add room
    let newRoomText = document.getElementById('new-room-text').value;
    //created a new option to go inside the select
    let newOption = $(`<option id=${newRoomText}>${newRoomText}</option>`);
    //gets the slects value
    let dropdownMenu = document.getElementById('rooms-select');
    //adds to the room select
    $(dropdownMenu).append(newOption)
    console.log('clicked the add room button');
  },

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
};