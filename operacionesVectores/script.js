
class vector1d{
    constructor(x){
        this.x=x;
    }
    }

class vector2d extends vector1d{
    constructor(x,y){
        super(x);
        this.y=y;
    }
}

class vector3d extends vector2d{
    constructor(x,y,z){
        super(x,y);
        this.z=z;
    }
}


function sumar(vects=[]){
    resultado=vects[0];
    for (var i=1;i<vects.length;i++){
        if(vects[0].constructor.name=="vector1d"){
            resultado.x+=vects[i].x;
        }else if(vects[0].constructor.name=="vector2d"){
            resultado.x+=vects[i].x;
            resultado.y+=vects[i].y;
        }
        else{
            resultado.x+=vects[i].x;
            resultado.y+=vects[i].y;
            resultado.z+=vects[i].z;
        }
    }
    return resultado;
}

function restar(vects=[]){
    resultado=vects[0];
    for (var i=1;i<vects.length;i++){

        if(vects[0].constructor.name=="vector1d"){
            resultado.x-=vects[i].x;
        }else if(vects[0].constructor.name=="vector2d"){
            resultado.x-=vects[i].x;
            resultado.y-=vects[i].y;
        }
        else{
            resultado.x-=vects[i].x;
            resultado.y-=vects[i].y;
            resultado.z-=vects[i].z;
        }
    }
    return resultado;
}

function multiplicarEscalar(vect,escalar){
    resultado=vect;

        if(vect.constructor.name=="vector1d"){
            resultado.x=resultado.x*escalar;
            
        }else if(vect.constructor.name=="vector2d"){
            resultado.x=resultado.x*escalar;
            resultado.y=resultado.y*escalar;
        }else{
            resultado.x=resultado.x*escalar;
            resultado.y=resultado.y*escalar;
            resultado.z=resultado.z*escalar;
        }
    return resultado;
}

function dividirEscalar(vect,escalar){
    return multiplicarEscalar(vect,(1/escalar))
}

function productoPunto(vects=[]){
    resultadox=0
    resultadoy=0
    resultadoz=0
    if(vects[0].constructor.name=="vector1d"){
        resultadox=vect[0].x
    }else if(vects[0].constructor.name=="vector2d"){
        resultadox=vects[0].x;
        resultadoy=vects[0].y;
    }
    else{
        resultadox=vects[0].x;
        resultadoy=vects[0].y;
        resultadoz=vects[0].z;
    }
    for (var i=1;i<vects.length;i++){
        if(vects[0].constructor.name=="vector1d"){
            resultadox=resultadox*vects[i].x;
        }else if(vects[0].constructor.name=="vector2d"){
            resultadox=resultadox*vects[i].x;
            resultadoy=resultadoy*vects[i].y;
        }
        else{
            resultadox=resultadox*vects[i].x;
            resultadoy=resultadoy*vects[i].y;
            resultadoz=resultadoz*vects[i].z;
        }
    }
    return resultadox+resultadoy+resultadoz;

}

function magnitud(vect){
    magn=0
    if(vect.constructor.name=="vector1d"){
       magn=Math.pow(vect.x,2)
    }else if(vect.constructor.name=="vector2d"){
        magn=Math.sqrt(Math.pow(vect.x,2)+Math.pow(vect.y,2))
    }
    else{
        magn=Math.sqrt(Math.pow(vect.x,2)+Math.pow(vect.y,2)+Math.pow(vect.z,2))
    }
    return magn
}

function angulo(vects=[]){
    cos=productoPunto(vects)/(magnitud(vects[0])*magnitud(vects[1]))
    resultado=Math.acos(cos)
    return resultado
}

function normalizar(vect){
    return dividirEscalar(vect,magnitud(vect))
}

function productoCruz(vects=[]){
    x=vects[0].y*vects[1].z-vects[0].z*vects[1].y
    y=-(vects[0].x*vects[1].z-vects[0].z*vects[1].x)
    z=vects[0].x*vects[1].y-vects[0].y*vects[1].x
    return new vector3d(x,y,z)
}



