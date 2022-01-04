<template>
   <h2>Sing Up</h2>
   <form @submit.prevent="Signup">
        <input type="text" placeholder="display name" v-model="displayName">
        <input type="email" placeholder="email" v-model="email">
        <input type="password" placeholder="password" v-model="password">
        <button>Sign Up</button>
   </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {

    setup(){
        let displayName = ref("");
        let email = ref("");
        let password = ref("");
        let Signup=()=>{
            console.log(displayName.value)
        }


        return {displayName, email, password, Signup}

    }

}
</script>

<style>

</style>