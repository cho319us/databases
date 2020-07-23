var MessageView = {

  render: _.template(`
        <div class="chat">
          <div class="username"><%- newUser %></div>
          <div class="message"><%- newMessage %></div>
        </div>
      `)
};