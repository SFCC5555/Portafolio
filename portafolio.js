let m=document.getElementById("menu");
let ca=document.querySelector(".containerArchitecture");
let cce=document.querySelector(".containerCivilEngineering");
let body=document.querySelector("body");

activeProject= "no"

function mostrarMenu() {
    m.classList.toggle("menuContainer")

    if (activeProject=="yes") {
        closeProject()
    }
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
                content:"./IMAGENES/viviendaDoctorVerdugoElevaciones.pdf",
            },
            {image:"./IMAGENES/viviendaDoctorVerdugoHidrosanitario.png",
            name:"Plano Instalaciones Hidrosanitarias",
            content:"./IMAGENES/viviendaDoctorVerdugoHidrosanitario.pdf",
            },
            {image:"./IMAGENES/viviendaDoctorVerdugoAnteproyecto.png",
            name:"Anteproyecto",
            content:"./IMAGENES/viviendaDoctorVerdugoAnteproyecto.pdf",
            }],
});

architectureList.push({
    image: "./IMAGENES/viviendaJorgeBenavidesPlantas.png",
    name: "Vivienda Señor Benavides",
    content: [{image:"./IMAGENES/viviendaJorgeBenavidesPlantas.png",
                name:"Plano Plantas",
                content:"./IMAGENES/viviendaJorgeBenavidesPlantas.pdf",
            },
            {image:"./IMAGENES/viviendaJorgeBenavidesElevaciones.png",
                name:"Plano Elevaciones",
                content:"./IMAGENES/viviendaJorgeBenavidesElevaciones.pdf",
            },
            {image:"./IMAGENES/viviendaJorgeBenavidesHidrosanitario.png",
            name:"Plano Instalaciones Hidrosanitarias",
            content:"./IMAGENES/viviendaJorgeBenavidesHidrosanitario.pdf",
            }],
});


/*CONSTRUCTOR PROYECTOS DE INGENIERIA CIVIL*/

const civilEngineeringList =[];

civilEngineeringList.push({
    image: "./IMAGENES/murosDeContencionSenorMacancela.png",
    name: "Muros de Contención - Vivienda Señor Macancela",
    content: [{image:"./IMAGENES/murosDeContencionSenorMacancela.png",
                name:"Plano",
                content:"./IMAGENES/murosDeContencionSenorMacancela.pdf",
            },
            {image:"./IMAGENES/memoriaTecnicaMurosSenorMacancela.png",
                name:"Memoría Técnica",
                content:"./IMAGENES/memoriaTecnicaMurosSenorMacancela.pdf",
            }],

});

civilEngineeringList.push({
    image: "./IMAGENES/camaraSepticaSeñorRivera.png",
    name: "Cámara Séptica - Vivienda Señor Rivera",
    content: [{image:"./IMAGENES/camaraSepticaSeñorRivera.png",
                name:"Plano",
                content:"./IMAGENES/camaraSepticaSeñorRivera.pdf",
            },
            {image:"./IMAGENES/memoriaTecnicaCamaraSepticaSeñorRivera.png",
                name:"Memoría Técnica",
                content:"./IMAGENES/memoriaTecnicaCamaraSepticaSeñorRivera.pdf",
            }],

});


civilEngineeringList.push({
    image: "./IMAGENES/camaraSepticaSenoraCochancela.png",
    name: "Cámara Séptica - Vivienda Señora Cochancela",
    content: [{image:"./IMAGENES/camaraSepticaSenoraCochancela.png",
                name:"Plano",
                content:"./IMAGENES/camaraSepticaSenoraCochancela.pdf",
            },
            {image:"./IMAGENES/memoriaTecnicaCamaraSepticaSenoraCochancela.png",
                name:"Memoría Técnica",
                content:"./IMAGENES/memoriaTecnicaCamaraSepticaSenoraCochancela.pdf",
            }],

});

/*Funcion para renderizar proyectos de Arquitectura*/


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
            contenedorArchitectureProject.setAttribute("class","projectDiv")

            linkArchitectureProject=document.createElement("a");
            linkArchitectureProject.setAttribute("href",architectureProject.content);
            linkArchitectureProject.setAttribute("target","_blank");
            
            imagenArchitectureProject=document.createElement("img");
            imagenArchitectureProject.setAttribute("src",architectureProject.image);
            imagenArchitectureProject.setAttribute("alt",architectureProject.name);
            imagenArchitectureProject.setAttribute("width","85%");
    
            nombreArchitectureProject=document.createElement("p");
            nombreArchitectureProject.setAttribute("class","projectName")
            nombreArchitectureProject.innerText=architectureProject.name;
            
            p.appendChild(contenedorArchitectureProject);
            contenedorArchitectureProject.appendChild(linkArchitectureProject);
            contenedorArchitectureProject.appendChild(nombreArchitectureProject);

            linkArchitectureProject.appendChild(imagenArchitectureProject);
    
        }

        imagenArchitecture.addEventListener("click",renderProject);
        c.addEventListener("click",closeProject);
        

    }

}

/*Funcion para renderizar proyectos de Ingenieria Civil*/

function renderCivilEngineering()
{
    positionCounter=0

    for (civilEngineering of civilEngineeringList) {
        
        positionCounter++

        contenedorCivilEngineering=document.createElement("div");
        
        imagenCivilEngineering=document.createElement("img");
        imagenCivilEngineering.setAttribute("src",civilEngineering.image);
        imagenCivilEngineering.setAttribute("alt",civilEngineering.name);
        imagenCivilEngineering.setAttribute("width","75%");
        imagenCivilEngineering.setAttribute("position",positionCounter + "cE");

        nombreCivilEngineering=document.createElement("p");
        nombreCivilEngineering.setAttribute("class","projectName")
        nombreCivilEngineering.innerText=civilEngineering.name;
        
        cce.appendChild(contenedorCivilEngineering);
        contenedorCivilEngineering.appendChild(imagenCivilEngineering);
        contenedorCivilEngineering.appendChild(nombreCivilEngineering);


        p=document.createElement("section");
        p.setAttribute("class","inactive");
        p.setAttribute("id",positionCounter + "cE")
        
        c=document.createElement("div");
        c.setAttribute("class","close");
        c.innerText="x";
        p.appendChild(c);

        body.appendChild(p);

        for (civilEngineeringProject of civilEngineering.content) {


            
            contenedorCivilEngineeringProject=document.createElement("div");
            contenedorCivilEngineeringProject.setAttribute("class","projectDiv")

            linkCivilEngineeringProject=document.createElement("a");
            linkCivilEngineeringProject.setAttribute("href",civilEngineeringProject.content);
            linkCivilEngineeringProject.setAttribute("target","_blank");
            
            imagenCivilEngineeringProject=document.createElement("img");
            imagenCivilEngineeringProject.setAttribute("src",civilEngineeringProject.image);
            imagenCivilEngineeringProject.setAttribute("alt",civilEngineeringProject.name);
            imagenCivilEngineeringProject.setAttribute("width","85%");
    
            nombreCivilEngineeringProject=document.createElement("p");
            nombreCivilEngineeringProject.setAttribute("class","projectName")
            nombreCivilEngineeringProject.innerText=civilEngineeringProject.name;
            
            p.appendChild(contenedorCivilEngineeringProject);
            contenedorCivilEngineeringProject.appendChild(linkCivilEngineeringProject);
            contenedorCivilEngineeringProject.appendChild(nombreCivilEngineeringProject);

            linkCivilEngineeringProject.appendChild(imagenCivilEngineeringProject);
    
        }

        imagenCivilEngineering.addEventListener("click",renderProject);
        c.addEventListener("click",closeProject);
    }
}

renderArchitecture();

renderCivilEngineering();

function renderProject(evento) {
    
    activeProject= "yes"
    
    m.classList.remove("menuContainer");
    
    eventPosition = evento.target.attributes.position.value;
    
    projectToRender = document.getElementById(eventPosition)
    
    projectToRender.classList.toggle("projectContainer");

    allImagen=document.querySelectorAll("img");

    for (imagen of allImagen) {
        imagen.removeEventListener("click",renderProject);
    }

}

function closeProject() {

    projectToRender.classList.remove("projectContainer");
    
    for (imagen of allImagen) {
        imagen.addEventListener("click",renderProject);
    }
    activeProject= "no"
}