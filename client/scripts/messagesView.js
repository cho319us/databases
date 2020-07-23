var MessagesView = {

  $chats: $('#chats'),

  //sends old data to be rendered
  initialize: function (allmessages) {
    console.log(this.$chats)
    let array = allmessages.results;
    for (let i = 0; i < array.length; i++) {
      let currentMessage = array[i]['text'];
      let currentUser = array[i]['username'];
      if (currentMessage !== undefined && currentMessage !== null) {
        this.render(currentMessage, currentUser, 'default');
      }
    }
  },
  render: function (message, user, chatroom) {

    if (message.indexOf("<script>") < 0) {
      // let message = {
      //   username: user,
      //   text: message
      //   chatroom: chatroom
      // }
      let template = MessageView.render({ newMessage: message, newUser: user });
      $(this.$chats).append(template);
    }
  }
};