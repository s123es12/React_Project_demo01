import ajax from './ajax';

export const registerRequest =(user)=>ajax('/register',user,"POST");

