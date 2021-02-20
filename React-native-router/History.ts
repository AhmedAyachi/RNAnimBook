import React from "react";


export default class History{
    readonly stacksize=20;
    private stack:string[]=[];
    private index:number=null;
    constructor(private setKey:React.Dispatch<any>,private routes:any[],private target:any){
        if(this.target){
            this.stack.push(this.target.key);
            this.index=0;
        }
    };
    replace(routekey:string):void{
        if(-1<this.index&&this.index<this.stacksize){
            const route=this.routes.find(route=>route.key===routekey);
            if(route){
                this.stack[this.index]=routekey;
                this.setKey(routekey);
            }
        }
    };
    push(routekey:string):void{
        const route=this.routes.find(route=>route.key===routekey);
        if(route){
            if(this.stack.length>=this.stacksize){
                this.stack.shift();
            }
            this.stack.push(routekey);
            this.index++;
            this.setKey(routekey);
        }
    };
    go(i:number):void{
        if(-1<i&&i<this.stack.length){
            this.index=i;
            this.setKey(this.stack[i]);
        }
    }
    back():void{
        if(this.index){
            this.index--;
            this.setKey(this.stack[this.index]);
        }
    }
    forward():void{
        if(this.index<this.stack.length-1){
            this.index++;
            this.setKey(this.stack[this.index]);
        }
    }
    get length():number{
        return this.stack.length;
    }
    get size():number{
        return this.stacksize;
    }
}