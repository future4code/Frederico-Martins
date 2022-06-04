 const tarefasCerto = tarefas.filter((tarefas)=>{
    return tarefas.status === "done"

  }).map((tarefas)=>{
      return tarefas.titulo


  })
  
  return tarefasCerto
 
  
  }