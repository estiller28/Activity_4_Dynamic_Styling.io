
var app = new Vue({
    el: '#app',
    data:{
        user: '',
        user1: false,
        user2: false,
        active: true,
        color:'',
        activeColor: '',
    },

    methods:{
        getInput(event){
            this.user = event.target.value;

            if(this.user === 'user1'){
                this.user1 = !this.user1;
            }else if(this.user ==='user2'){
                this.user2 = !this.user2;
            }else{
                this.user1 = ''
                this.user2 = ''
            }
        },
        btnToggler(){
            this.active = !this.active;
        },

        chooseColor(event){
           this.color = event.target.value;
           if(this.color === 'red'){
               this.activeColor = this.color;
           }else if(this.color === 'orange'){
               this.activeColor = this.color
           }else if(this.color ==='black'){
               this.activeColor = this.color;
           }else{
               this.activeColor = ''
           }
        }
       
    },
   
})