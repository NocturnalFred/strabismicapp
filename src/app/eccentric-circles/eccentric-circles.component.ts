import { Component, OnInit, Input } from '@angular/core';
import { SimpleTimer } from 'ng2-simple-timer';
import { OnChanges } from "@angular/core";
import { SimpleChanges } from "@angular/core";


@Component({
  selector: 'eccentriccircles',
  templateUrl: './eccentric-circles.component.html',
  styleUrls: ['./eccentric-circles.component.css'],
  providers: [SimpleTimer]
})
export class EccentricCirclesComponent implements OnInit, OnChanges{
  @Input() config: string;
  instructions1: number = 0;
  configDisplay: number = 1;
  JSONConfigDisplay: number = 0;
  movementToggle: number = 0;
  @Input() speed: number = 500;
  @Input() maxWidth: number = 700;
  @Input() minWidth: number = 500;
  @Input() maxHeight: number = 0;
  @Input() lineWidth: number = 40;
  @Input() leftColor: string = "None";
  @Input() rightColor: string = "None";
  @Input() leftOpacity: number = 1.0;
  @Input() rightOpacity: number = 1.0;
  @Input() leftText: string = "Clear";
  @Input() leftFontSize: number = 25;
  @Input() leftTransparencyTime: Number = 1000;
  @Input() rightText: string = "Clear";
  @Input() rightFontSize: Number = 25;
  @Input() rightTransparencyTime: Number = 1000;
  trans: number = 1;
  transparency: number = 0;
  timerId: string;
  count: number;


  circles = JSON.parse(`{
     "speed" : 200,
     "maxwidth" : 700,
     "minwidth" : 500,
     "maxheight" : 0,
     "xaxiscenter" : 50,
     "move" : 1,
     "leftcircle" :
     {
        "type" : 1,
        "outercircleradius" : 220,
        "color" : "none",
        "xcoord" : 525,
        "ycoord" : 300,
        "linewidth" : 25,
        "innertext" : "Clear",
        "opacity" : "1",
        "fontsize" : "25",
        "transparencytime" : "1000"
     },

     "rightcircle":
     {
        "type" : -1,
        "outercircleradius" : 220,
        "color" : "none",
        "xcoord" : 1075,
        "ycoord" : 300,
        "linewidth" : 25,
        "innertext" : "Clear",
        "opacity" : "1",
        "fontsize" : "25",
        "transparencytime" : "1000"
     }
  }`);




  public ngOnChanges( changes: any ) : void {

        console.log("CHANGE"
        );

    }


  transparencyToggle() : void {
    this.transparency = (this.transparency ^ 1)
  }
  toggleInstructions1() : void {
    this.instructions1 = (this.instructions1 ^ 1)
  }

  toggleConfigDisplay() : void {
    this.configDisplay = (this.configDisplay ^ 1)
  }

  toggleJSONConfigDisplay() : void {
    this.JSONConfigDisplay = (this.JSONConfigDisplay ^ 1)
  }
  toggleMovement() : void {
    this.movementToggle = (this.movementToggle ^ 1)
  }
  swapCircles() : void {
    this.circles.leftcircle.type *= -1;
    this.circles.rightcircle.type *= -1;
  }

  inputChange() : void {

    this.speed = parseInt(this.speed.toString().replace(/[^0-9]/g,""));

    if (this.speed < 2 || this.speed.toString() === "NaN") {
      this.speed = 2;
    } else if (this.speed > 1000 ) {
      this.speed = 1000;
    }
    if ( ! (this.maxWidth > 300) ){
      this.maxWidth = 300;
    }
    if ( (this.minWidth < 500) ) {
      this.minWidth = 500;
    }
    if ( ! (this.maxHeight < 500) ) {
      this.maxHeight = 0;
    }

    if ( this.rightTransparencyTime > 10000 ) {
      this.rightTransparencyTime = 10000;
    } else if (this.rightTransparencyTime < 100){
      this.rightTransparencyTime = 100;
    }

    if ( this.leftTransparencyTime > 10000 ) {
      this.leftTransparencyTime = 10000;
    } else if (this.leftTransparencyTime < 100){
      this.leftTransparencyTime = 100;
    }

    this.circles.speed = this.speed;
    this.circles.minwidth = this.minWidth;
    this.circles.maxwidth = this.maxWidth;


    this.circles.leftcircle.transparencytime = this.leftTransparencyTime;
    this.circles.rightcircle.transparencytime = this.rightTransparencyTime;

    this.circles.leftcircle.color = this.leftColor;
    this.circles.rightcircle.color = this.rightColor;
    this.circles.leftcircle.fontsize = this.leftFontSize;
    this.circles.rightcircle.fontsize = this.rightFontSize;
    this.circles.leftcircle.opacity = this.leftOpacity;
    this.circles.rightcircle.opacity = this.rightOpacity;
    this.circles.leftcircle.innertext = this.leftText;
    this.circles.rightcircle.innertext = this.rightText;

    this.circles.leftcircle.linewidth = this.lineWidth;
    this.circles.rightcircle.linewidth = this.lineWidth;
  }


  drawOuterCircle(context, circle ) : void {


    context.beginPath();
    context.lineWidth= circle.linewidth;
    context.arc(circle.xcoord,circle.ycoord,circle.outercircleradius,0,2*Math.PI);
    context.stroke();
    context.closePath();

  }

  drawInnerCircle(context,circle) : void {
    //position is relative to another circle so the radius and x cooridinates are transformed here.


    var innerRadius = circle.outercircleradius * 5/9;
    var innerXcoord = circle.xcoord + circle.type*innerRadius/3.5;
    context.beginPath();
    context.lineWidth= circle.linewidth;
    if (! /none/i.test(circle.color)) {
      context.fillStyle = circle.color;
    } else {
      context.fillStyle = "transparent";
    }
    context.arc(innerXcoord,circle.ycoord,innerRadius,0,2*Math.PI);
    context.fill();
    context.stroke();
    context.closePath();


  }

  drawText(context,circle) : void {


    context.stroke();
    context.closePath();
    context.fillStyle = "rgba(0, 0, 0, "+circle.opacity.toString()+")";
    context.font = circle.fontsize.toString() +"px Arial";
    var innerRadius = circle.outercircleradius * 5/9;
    var fontSize = context.measureText(circle.innertext);
    var innerXcoord = circle.xcoord + circle.type * innerRadius / 3.5 - ((fontSize.width)/2);
    context.fillText(circle.innertext,innerXcoord,circle.ycoord+8);


    context.beginPath();
    context.fillStyle = 'white';
    //context.arc(this.innerfakePointx,this.innerfakePointy,40,0,2*Math.PI);
    context.fill();
    context.stroke();
    context.closePath();

  }

  updateNoneTimeDependentConfig() {
    setTimeout(()=>{

      var c = <HTMLCanvasElement> document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
      ctx.clearRect(0,0,1600,1000);
      var circles = this.circles;
      this.drawOuterCircle(ctx,circles.leftcircle);
      ctx = c.getContext("2d");
      this.drawInnerCircle(ctx,circles.leftcircle);//200,30,800-190-85,300,"red", 1);
      this.drawOuterCircle(ctx,circles.rightcircle);
      this.drawInnerCircle(ctx,circles.rightcircle);
      this.drawText(ctx,circles.leftcircle);
      this.drawText(ctx,circles.rightcircle);
      this.updateNoneTimeDependentConfig();

    }, 100)
  }

  leftTrans() {
    //console.log(this.circles.leftcircle.transparencytime);
    setTimeout(()=>{
      this.circles.rightcircle.opacity = 1;
      this.circles.leftcircle.opacity = this.leftOpacity;
      this.rightTrans();
    },parseInt(this.circles.leftcircle.transparencytime));//);

  }

  rightTrans() {
    setTimeout(()=>{
      this.circles.leftcircle.opacity = 1;
      this.circles.rightcircle.opacity = this.rightOpacity;
      this.leftTrans();
    }, this.circles.rightcircle.transparencytime);

  }

  movement() {
    setTimeout(()=>{
        if (this.movementToggle == 0) {
          return this.movement();
        }
        if ((this.circles.rightcircle.xcoord - this.circles.leftcircle.xcoord) > this.circles.maxwidth)
        {
          this.circles.move = -1 * Math.abs(this.circles.move);
        }

        if ((this.circles.rightcircle.xcoord - this.circles.leftcircle.xcoord) < this.circles.minwidth)
        {
          this.circles.move = Math.abs(this.circles.move);
        }

        console.log((this.circles.rightcircle.xcoord - this.circles.leftcircle.xcoord));
        console.log(this.circles.minwidth);
        this.circles.leftcircle.xcoord = this.circles.leftcircle.xcoord - this.circles.move;
        this.circles.rightcircle.xcoord = this.circles.rightcircle.xcoord + this.circles.move;
        this.movement()
    }, this.circles.speed);
  }


  ngOnInit() {
    this.updateNoneTimeDependentConfig();
    this.leftTrans();
    this.movement();
  }


}
