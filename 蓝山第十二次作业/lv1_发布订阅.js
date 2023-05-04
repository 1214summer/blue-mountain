class Event {
    constructor() {
        this.events = {}
    }
    // 订阅一个事件
    on(type, callback) {
        // 对象里面是否有type这个属性,如果有,直接push回调函数,没有则重新建立.
        (this.events[type] || (this.events[type] = [])).push({ listener: callback });
    }
    // 发布一个事件
    emit(type, args) {
        this.events[type].forEach(element => {
            element.listener(args);
            if (type === 'once') {
                this.off(type, element.listener);
            }
        });
    }
    // 事件只执行一次
    once(type, listener) {
        this.events[type] = this.events[type] || [];
        this.events[type].push({ listener, once: true });
    }
    // 当传过来的callback相等,则取消该方法.
    off(type, callback) {
        if (this.events[type]) {
            this.events[type] = this.events[type].filter(item => item.listener !== callback)
        }
    }
}


const e = new Event;

e.on("click", x => console.log(x.id));

e.on("click", x => console.log(x.id));

e.emit('click', { id: 3 })