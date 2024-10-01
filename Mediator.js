// 中介者模式

/**
 * 创建一个Member成员
 * @param {string} name - 成员的名称
 */
function Member(name) {
    this.name = name;
    this.chatroom = null;
}

Member.prototype = {
    /**
     * 发送消息给指定的成员
     * @param {string} msg - 要发送的消息
     * @param {Member} toMember - 要发送到的成员
     */
    send: function (msg, toMember) {
        this.chatroom.send(msg, this, toMember)
    },
    /**
     * 接收来自某个成员的消息
     * @param {string} msg - 接收到的消息
     * @param {Member} fromMember - 发送消息的成员
     */
    receive:function (msg, fromMember){
        console.log(fromMember.name + ' to ' + this.name + ': ' + msg)
    }
}

/**
 * 创建一个聊天室
 */
function Chatroom() {
    this.members = {}
}

Chatroom.prototype = {
    /**
     * 添加成员到聊天室
     * @param {Member} member - 要添加的成员
     */
    addMember: function (member) {
        this.members[member.name] = member;
        member.chatroom = this;
    },
    /**
     * 发送消息到指定成员或所有成员
     * @param {string} msg - 要发送的消息
     * @param {Member} from - 发送消息的成员
     * @param {Member} to - 要发送到的成员（可选）
     */
    send: function (msg, from, to) {
        if (to) {
            // 指定发送
            to.receive(msg, from)
        } else {
            // 群发
            for (let key in this.members) {
                if (this.members[key] !== from) {
                    this.members[key].receive(msg, from)
                }
            }
        }
    }
}

// 创建聊天室实例
const chat = new Chatroom()

// 创建成员实例
const john = new Member('John')
const bob = new Member('Bob')
const susy = new Member('Susy')
const tim = new Member('Tim')

// 添加成员到聊天室
chat.addMember(john)
chat.addMember(bob)
chat.addMember(susy)
chat.addMember(tim)

// 成员John发送消息给Susy
john.send('Hi', susy)

// 成员Bob发送消息给John
bob.send('Hello', john)

