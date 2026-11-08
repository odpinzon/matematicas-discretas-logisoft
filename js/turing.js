// Máquina de Turing determinista: estados q_<prefijo>, cinta de solo lectura.
// El estado codifica el prefijo leído; la aceptación se calcula desde ese estado,
// sin invocar el evaluador booleano de la aplicación.
export function createMachine(bits, module='R') {
  const word = [...bits.map(String), module];
  const tape = [...word, '□'];
  let head=0, state='q_ε', halted=false, accepted=null;
  const trace=[];
  const validModule=['R','C','A','G'];
  function step() {
    if(halted) return null;
    const read=tape[head]??'□';
    let next,move='D';
    if(head<7 && /^[01]$/.test(read)) {
      next='q_'+tape.slice(0,head+1).join('');
    } else if(head===7 && validModule.includes(read)) {
      const [u,c,t,a,r,d,h]=state.slice(2).split('').map(Number);
      const general= u===1 && c===1 && (t===1 || a===1);
      const authorized=read==='G' ? general : general && (
        read==='R' ? (r===1 || a===1) :
        read==='C' ? (a===1 && h===1) : d===1);
      accepted=authorized;
      next=authorized?'q_aceptar':'q_rechazo'; move='N';
    } else {next='q_rechazo';move='N';accepted=false;}
    const transition={index:trace.length+1,state,read,write:read,move,next,head,rule:`δ(${state}, ${read}) = (${next}, ${read}, ${move})`};
    trace.push(transition);state=next;
    if(move==='D')head++;
    if(move==='N')halted=true;
    return transition;
  }
  function snapshot(){return {tape:[...tape],head,state,halted,accepted,trace:[...trace]};}
  return {step,snapshot};
}
