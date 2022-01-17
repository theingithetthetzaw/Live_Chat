<template>
   <h2>Login</h2>
   <form @submit.prevent="login">
       
        <input type="email" placeholder="email" v-model="email">
        <input type="password" placeholder="password" v-model="password">
        <div class="error">{{error}}</div>
        <button>Sign Up</button>
   </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import {auth} from '../firebase/config'
import useLogin from '../composables/useLogin'

export default {

    setup(props, context){       
        let email = ref("");
        let password = ref("");
        // let error = ref(null);

        let {error,signin} =useLogin();

        let login=async()=>{
            // try{
            //     let res=await auth.signInWithEmailAndPassword(email.value,password.value);
            //     if(!res){
            //         throw new Error("can't login account");
            //     }
            // }
            // catch(err){
            //     error.value = err.message;

            // }

            let res= await signin(email.value, password.value)
            if(res){
                context.emit("enterChatroom")
                
            }
        }

        return {email, password, login, error}

    }

}
</script>

<style>

</style>