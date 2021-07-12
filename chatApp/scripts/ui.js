//render chats
//clear list of chats


class ChatUI{
    
    constructor(list){
        this.list = list;
    }
    
    clear(){
        this.list.innerHTML = '';
    }
    render(data){
        console.log(data);
        const date = data.created_at.toDate();
        const now = date.toLocaleString();
        
        const html = `
        <li class = "list-group-item">
            <span class = "username">${data.username}</span>
            <span class = "message">${data.message}</span>
            <div class = "time">${now}</div>
        </li>
        `;
        this.list.innerHTML += html;
    }
}