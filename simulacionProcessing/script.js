const WIDTH = 800;
const HEIGHT = 800;

posxi= 0
posyi= 800
posx = 0;
posy = 0;
t=0
g=9.8
dt=1/20
vo=90
ang=Math.PI/3
angulo=-ang
vox=vo*Math.cos(angulo);
voy=vo*Math.sin(angulo);
tmax=((vo*Math.sin(angulo))+Math.sqrt((Math.pow((vo*Math.sin(angulo)),2)+2*posyi*g)))/g
console.log(tmax)


function sketch(processing){
    processing.setup = function(){
      processing.frameRate(60); // fps
		  processing.size(WIDTH, HEIGHT);
    }
    processing.drawGame = function(world){
    p=processing.ellipse(posx, posy, 10, 10);
    
    posx=posxi+vox*t;
    posy=posyi+(1/2)*g*Math.pow(t,2)+vo*Math.sin(angulo)*t
    t=t+dt
    if (posy>=posyi && posx>posxi){
      t=0
    }
    }
    processing.onTic = function(world) {
    }
    processing.onMouseEvent = function (world, event) {
        return world;
    }


  // ******************** De aquí hacia abajo no debe cambiar nada. ********************

  // Esta es la función que pinta todo. Se ejecuta 60 veces por segundo. 
  // No cambie esta función. Su código debe ir en drawGame
  processing.draw = function () {
    processing.drawGame(processing.state);
    processing.state = processing.onTic(processing.state);
  };
  // Esta función se ejecuta cada vez que presionamos una tecla. 
  // No cambie esta función. Su código debe ir en onKeyEvent
  processing.keyPressed = function () {
    processing.state = processing.onKeyEvent(processing.state, processing.keyCode);
  }
  // Esta función se ejecuta cada vez movemos el mouse. 
  // No cambie esta función. Su código debe ir en onKeyEvent
  processing.mouseMoved = function () {
    processing.state = processing.onMouseEvent(processing.state,
      { action: "move", mouseX: processing.mouseX, mouseY: processing.mouseY });
  }

  // Estas funciones controlan los eventos del mouse. 
  // No cambie estas funciones. Su código debe ir en OnMouseEvent
  processing.mouseClicked = function () {
    processing.state = processing.onMouseEvent(processing.state,
      { action: "click", mouseX: processing.mouseX, mouseY: processing.mouseY, mouseButton: processing.mouseButton });
  }

  processing.mouseDragged = function () {
    processing.state = processing.onMouseEvent(processing.state,
      { action: "drag", mouseX: processing.mouseX, mouseY: processing.mouseY, mouseButton: processing.mouseButton });
  }

  processing.mousePressed = function () {
    processing.state = processing.onMouseEvent(processing.state,
      { action: "press", mouseX: processing.mouseX, mouseY: processing.mouseY, mouseButton: processing.mouseButton });
  }

  processing.mouseReleased = function () {
    processing.state = processing.onMouseEvent(processing.state,
      { action: "release", mouseX: processing.mouseX, mouseY: processing.mouseY, mouseButton: processing.mouseButton });
  }
  // Fin de los eventos del mouse


}

const canvas = document.getElementById("canvas");
const instance = new Processing(canvas, sketch);