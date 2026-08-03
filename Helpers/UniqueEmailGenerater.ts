



 export function Uniquemailgenerator(namebase:string):string {
 const timestamp=Date.now();
 const [name , domain]=namebase.split("@");
return `${name}+${timestamp}@${domain}`;
}