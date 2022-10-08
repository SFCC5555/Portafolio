let m=document.getElementById("menu");
let ca=document.querySelector(".containerArchitecture");
let cce=document.querySelector(".containerCivilEngineering");
let body=document.querySelector("body");

function mostrarMenu() {
    m.classList.toggle("menuContainer")
}

/*CONSTRUCTOR PROYECTOS ARQUITECTONICOS*/

const architectureList =[];

architectureList.push({
    image: "./IMAGENES/viviendaDoctorVerdugoPlantas.png",
    name: "Vivienda Doctor Verdugo",
    content: [{image:"./IMAGENES/viviendaDoctorVerdugoPlantas.png",
                name:"Plano Plantas",
                content:"./IMAGENES/viviendaDoctorVerdugoPlantas.pdf",
            },
            {image:"./IMAGENES/viviendaDoctorVerdugoElevaciones.png",
                name:"Plano Elevaciones",
                content:"./IMAGENES/viviendaDoctorVerdugoPlantas.pdf",
            }],
});

architectureList.push({
    image: "./IMAGENES/viviendaJorgeBenavidesPlantas.png",
    name: "Vivienda Jorge Benavides",
    content: [{image:"./IMAGENES/viviendaJorgeBenavidesPlantas.png",
                name:"Plano Plantas",
                content:"./IMAGENES/viviendaJorgeBenavidesPlantas.pdf",
            },
            {image:"./IMAGENES/viviendaJorgeBenavidesElevaciones.png",
                name:"Plano Elevaciones",
                content:"./IMAGENES/viviendaJorgeBenavidesElevaciones.pdf",
            }],
});


/*CONSTRUCTOR PROYECTOS DE INGENIERIA CIVIL*/

const civilEngineeringList =[];

civilEngineeringList.push({
    image: "./IMAGENES/murosDeContencionSeñorMacancela.png",
    contenido:"./IMAGENES/murosDeContencionSeñorMacancela.pdf",
    name: "Muros de Contención - Vivienda Señor Macancela",
});


/*<div>
    <a href="static/GALERIA/IMAGENES/CHICAZSFCC.png"  target="_BLANK">
        <img src="static/GALERIA/IMAGENES/CHICAZSFCC.png" alt="zorra" width=75%/>
    </a>
</div>
*/


function renderArchitecture()
{
    positionCounter=0
    for (architecture of architectureList) {
        
        positionCounter++

        contenedorArchitecture=document.createElement("div");

        imagenArchitecture=document.createElement("img");
        imagenArchitecture.setAttribute("src",architecture.image);
        imagenArchitecture.setAttribute("alt",architecture.name);
        imagenArchitecture.setAttribute("width","75%");
        imagenArchitecture.setAttribute("position",positionCounter + "A");

        nombreArchitecture=document.createElement("p");
        nombreArchitecture.setAttribute("class","projectName")
        nombreArchitecture.innerText=architecture.name;
        
        ca.appendChild(contenedorArchitecture);
        contenedorArchitecture.appendChild(imagenArchitecture);
        contenedorArchitecture.appendChild(nombreArchitecture);


        p=document.createElement("section");
        p.setAttribute("class","inactive");
        p.setAttribute("id",positionCounter + "A")
        
        c=document.createElement("div");
        c.setAttribute("class","close");
        c.innerText="x";
        p.appendChild(c);

        body.appendChild(p);

        for (architectureProject of architecture.content) {


            
            contenedorArchitectureProject=document.createElement("div");

            imagenArchitectureProject=document.createElement("img");
            imagenArchitectureProject.setAttribute("src",architectureProject.image);
            imagenArchitectureProject.setAttribute("alt",architectureProject.name);
            imagenArchitectureProject.setAttribute("width","75%");
    
            nombreArchitectureProject=document.createElement("p");
            nombreArchitectureProject.setAttribute("class","projectName")
            nombreArchitectureProject.innerText=architectureProject.name;
            
            p.appendChild(contenedorArchitectureProject);
            contenedorArchitectureProject.appendChild(imagenArchitectureProject);
            contenedorArchitectureProject.appendChild(nombreArchitectureProject);
    
        }

        imagenArchitecture.addEventListener("click",renderProject);
        c.addEventListener("click",closeProject);
        

    }

}

function renderCivilEngineering()
{

    for (civilEngineering of civilEngineeringList) {
        
        contenedorCivilEngineering=document.createElement("div");

        imagenCivilEngineering=document.createElement("img");
        imagenCivilEngineering.setAttribute("src",civilEngineering.image);
        imagenCivilEngineering.setAttribute("alt",civilEngineering.name);
        imagenCivilEngineering.setAttribute("width","75%");

        nombreCivilEngineering=document.createElement("p");
        nombreCivilEngineering.setAttribute("class","projectName")
        nombreCivilEngineering.innerText=civilEngineering.name;
    
        cce.appendChild(contenedorCivilEngineering);
        contenedorCivilEngineering.appendChild(imagenCivilEngineering);
        contenedorCivilEngineering.appendChild(nombreCivilEngineering);
    }

}

renderArchitecture();

renderCivilEngineering();

function renderProject(evento) {
    
    eventPosition = evento.target.attributes.position.value;
    
    projectToRender = document.getElementById(eventPosition)
    
    projectToRender.classList.toggle("projectContainer");


}

function closeProject() {

    projectToRender.classList.toggle("projectContainer");

}