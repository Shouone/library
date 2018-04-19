var vm=new Vue({
    el:'#app',
    directives:{
        focus:function (el,bindings) {
            if(bindings.value)
             el.focus();
        }
    },
    data: {
        todoList:[{isSelected:false,title:'睡觉'},
            {isSelected:false,title:'睡觉'}],
        title:'',
        cur:'',
        hash:''
    },
    created:function(){
        this.todoList=JSON.parse(localStorage.getItem('data'))||this.todoList;
        this.hash=window.location.hash.slice(2)||'all';
        window.addEventListener('hashchange', ()=> {
           this.hash=window.location.hash.slice(2);
       },false);
},
    watch:{
        todoList:{
          handler:function(){
              localStorage.setItem('data',JSON.stringify(this.todoList));
          },deep:true
        }
    },
    methods:{
        add:function () {
            this.todoList.push({isSelected:false,title:this.title});
            this.title='';
        },
        remove:function (todo) {
            this.todoList=this.todoList.filter(item=>item!==todo);
        },
        rember:function (todo) {
            this.cur=todo;
        },
        cancel:function () {
            this.cur='';
        }
    },
    computed:{
        count:function () {
           return this.todoList.filter(item=>item.isSelected==false).length;
        },
        newtodoList:function () {
            if(this.hash==='all'){
                return this.newtodoList=this.todoList;
            }
            if(this.hash==='finish'){
                return this.newtodoList=this.todoList.filter(function (item) {
                    return item.isSelected==true;
                })
            }
            if(this.hash==='unfinish'){
                return this.newtodoList=this.todoList.filter(function (item) {
                    return item.isSelected==false;
                })
                return this.newtodoList=this.todoList;
            }
        }
    }
})