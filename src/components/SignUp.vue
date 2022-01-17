<template>
   <h2>Sing Up</h2>
   <form @submit.prevent="Signup">
        <input type="text" placeholder="display name" v-model="displayName">
        <input type="email" placeholder="email" v-model="email">
        <input type="password" placeholder="password" v-model="password">
        <div class="error">{{error}}</div>
        <button>Sign Up</button>
   </form>
</template>

<script>
import { ref } from '@vue/reactivity'

import useSignup from '../composables/useSignup'

export default {

    setup(props, context){
        let displayName = ref("");
        let email = ref("");
        let password = ref("");
        //let error = ref(null);

        let {error, createAccount}= useSignup()

        let Signup=async()=>{
          let res= await createAccount(email.value, password.value, displayName.value);
          //console.log(res.user)   
          
          if(res){
               context.emit("enterChatroom")
          }

        }


        return {displayName, email, password, Signup, error}

    }

}
</script>

<style>

</style>