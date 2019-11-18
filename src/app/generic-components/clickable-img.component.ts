import { Component, Input } from "@angular/core";

@Component(
    {
        template:
            `
            <div>
        <img (click)="toggleImage($event)" [src]="src">
        </div>
     `,
        selector: 'clickable-img',
        styles: ['img{width: 95%;max-width: 1000px;margin: auto;display: block: position: absolute}div{display: grid;}']
    }
)
export class ClickableImg {
    public src: string;
    public fullscreen: boolean = false;
    @Input() public set imageSrc(src2: string){
        this.src = src2;
    }

    constructor(){
        
    }
    public toggleImage(event: any){
        this.fullscreen = !this.fullscreen;
        if(this.fullscreen){

            event.srcElement.parentElement.style.position = "fixed";
            event.srcElement.parentElement.style.width = "100%";
            event.srcElement.parentElement.style.height = "100%";
            event.srcElement.parentElement.style.backgroundColor = "rgba(140, 169, 255, 0.9)";

            event.srcElement.parentElement.style.left = "0px";
            event.srcElement.parentElement.style.top = "0px";
            event.srcElement.parentElement.style.zIndex = "100";
        }
        else{
            event.srcElement.parentElement.style.position = "initial";
            event.srcElement.parentElement.style.width = "100%";
            event.srcElement.parentElement.style.left = "initial";
            event.srcElement.parentElement.style.top = "initial";
            event.srcElement.parentElement.style.backgroundColor = "";
            event.srcElement.parentElement.style.zIndex = "0";
        }

    }
   


}