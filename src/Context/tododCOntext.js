import React from 'react';

const todosContext = React.createContext({

   todods : [] ,
   add : ()=>{},
   edit : ()=>{},
   done : ()=>{},  
   delete : ()=>{}, 
   todos : [] 
})



export default todosContext;


