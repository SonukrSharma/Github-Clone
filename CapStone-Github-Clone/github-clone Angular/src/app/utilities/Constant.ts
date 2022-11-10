import { environment } from "src/environments/environment";

export module Constant{
    const baseurl:String=environment.URL;
    export const URL:String=`${baseurl}/api/users`;
    export const LOGIN:String=`${baseurl}/api/signin`;
    
}