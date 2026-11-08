export const names=['u','c','t','a','r','d','h'];
export const modules={G:'Acceso general',R:'Reportes',C:'Configuración',A:'Auditoría'};
export function evaluate(bits,module='G'){
 const [u,c,t,a,r,d,h]=bits.map(Boolean);
 const S=u&&c&&(t||a);
 const R=S&&(r||a), C=S&&a&&h, A=S&&d;
 return {S,R,C,A,accepted:({G:S,R,C,A})[module]??false};
}
export function explain(bits,module){
 const [u,c,t,a,r,d,h]=bits.map(Boolean);
 if(!u)return 'Usuario no registrado (u=0).';
 if(!c)return 'Contraseña inválida (c=0).';
 if(!t&&!a)return 'Token inactivo y sin rol de administrador (t=0, a=0).';
 if(module==='G')return 'Autenticación general válida.';
 if(module==='R'&&!r&&!a)return 'Reportes requiere rol de analista o administrador.';
 if(module==='C'&&!a)return 'Configuración requiere rol de administrador.';
 if(module==='C'&&!h)return 'Configuración requiere horario laboral.';
 if(module==='A'&&!d)return 'Auditoría requiere rol de auditor.';
 return `Acceso autorizado a ${modules[module]}.`;
}
