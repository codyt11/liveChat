
// dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMsg = document.querySelector('.update-msg');
const rooms = document.querySelector('.chat-rooms');
// add new chat
newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
    .then(() => newChatForm.reset())
    .catch((err) => console.log(err));
})

//update name
newNameForm.addEventListener('submit', e => {
    e.preventDefault();
    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName);
    newNameForm.reset();
    updateMsg.innerText = `Your name was updated to ${newName}`;
    setTimeout(() =>updateMsg.innerText = "", 3000)
});

rooms.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON'){
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat => chatUI.render(chat));
    }
})

const username = localStorage.username ? localStorage.username : 'anon';
const room = localStorage.room ? localStorage.room : 'general';
//class instance
const chatUI = new ChatUI(chatList)
const chatroom = new Chatroom(room, username);

//get chats and render
chatroom.getChats((data) => {
    chatUI.render(data);
});