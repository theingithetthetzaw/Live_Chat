import { ref } from "vue";
import {auth} from '../firebase/config'

let error = ref(null);


let logOut=async()=>{

    try{
       await auth.signOut(); 
                
    }
    catch(err){
        error.value = err.message;
        console.log(err.value);               

    }
}

let useLogout=()=>{

    return {error, logOut};
}

export default useLogout;