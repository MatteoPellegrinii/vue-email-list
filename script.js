const mailList = new Vue({
    el: "#app",
    data: {
        mails: [],
    },
    mounted(){
        for (let index = 0; index < 10; index++) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((result)=>{
            const risultato = result.data.response;
            if (index = 9 ) {  
                this.mails.push(risultato);
                console.log(risultato);
            }
            else {
               this.mails = []
            }
            
            
        })
        }   
        },
}) 


