<template>
    <div class="chat-window">
        <div class="messages">
            <div class="single" v-for="message in formattedMessages" :key="message.id">
                <span class="created-at">{{message.created_at}}</span>
                <span class="name">{{message.name}}</span>
                <span class="message">{{message.message}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue'
import { db } from '../firebase/config'
import {formatDistanceToNow} from 'date-fns'
export default {
    setup(){
      let messages=ref([]);

      let formattedMessages= computed(()=>{
        return messages.value.map((msg)=>{
          let formatTime = formatDistanceToNow(msg.created_at.toDate());

          return {...msg, created_at:formatTime}
        })//[{}]
      })

      db.collection("messages").orderBy("created_at").onSnapshot((snap)=>{
        let results=[];//this onsnapshot run again and array empty again
        snap.docs.forEach((doc)=>{
          let document={...doc.data(),id:doc.id}
          // console.log(doc.data());
        //   if(doc.data().created_at){
        //         results.push(document);
        //   }
        
            doc.data().created_at && results.push(document);
        })
          messages.value=results;
      })
      return {messages,formattedMessages};
    }
}
</script>

<style>
     .chat-window {
        background: #fafafa;
        padding: 30px 20px;
      }
      .single {
        margin: 18px 0;
      }
      .created-at {
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom: 4px;
      }
      .name {
        font-weight: bold;
        margin-right: 6px;
      }
      .messages {
        max-height: 400px;
        overflow: auto;
      }
</style>