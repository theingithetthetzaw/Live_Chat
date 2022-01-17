<template>
  <nav v-if="user">
      <div>
          <p>Hi {{user.displayName}} </p>
          <p class="email">logged in as {{user.email}}</p>
      </div>
      <button @click="Logout">logout</button>
  </nav>
</template>

<script>
import { ref } from '@vue/reactivity'
// import {auth} from '../firebase/config'
import {auth} from '../firebase/config'
//import useLogout from '../composables/useLogout'

import getUser from '../composables/getUser'


export default {
    setup(){
        let error = ref(null);

        let {user}= getUser();
       
        let Logout=async()=>{
            try{
                 await auth.signOut();
                console.log("User logged out")
            }
            catch(err){
                error.value = err.message;
                console.log(err.value);               

            }
           
        }

         //let user = ref(auth.currentUser);

        // auth.onAuthStateChanged((_user)=>{
        //     console.log(_user)
        //     user.value = _user;
        // })
        return {Logout, user}

    }

 
    //composables
    // setup(){

    //     let {error, logOut}= useLogout();
       
    //     let Logout=async()=>{
    //        let res= await logOut();
    //         if(res){
    //             console.log("User Logged Out")
    //         }
           
    //     }
    //     return {Logout, error}

    // }

}
</script>

<style>

</style>