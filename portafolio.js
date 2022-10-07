let m=document.getElementById("menu");
let ca=document.querySelector(".containerArchitecture");
let cce=document.querySelector(".containerCivilEngineering")

function mostrarMenu() {
    m.classList.toggle("menuContainer")
}

/*CONSTRUCTOR PROYECTOS ARQUITECTONICOS*/

const architectureList =[];

architectureList.push({
    image: "./IMAGENES/viviendaDoctorVerdugoPlantas.png",
    name: "Vivienda Doctor Verdugo",
});

architectureList.push({
    image: "./IMAGENES/viviendaJorgeBenavidesPlantas.png",
    name: "Vivienda Jorge Benavides",
});


/*CONSTRUCTOR PROYECTOS DE INGENIERIA CIVIL*/

const civilEngineeringList =[];

civilEngineeringList.push({
    image: "./IMAGENES/murosDeContencionSeñorMacancela.png",
    contenido:"./IMAGENES/murosDeContencionSeñorMacancela.pdf",
    name: "Bonded",
});



/*<div>
    <a href="static/GALERIA/IMAGENES/CHICAZSFCC.png"  target="_BLANK">
        <img src="static/GALERIA/IMAGENES/CHICAZSFCC.png" alt="zorra" width=75%/>
    </a>
</div>
*/


function renderArchitecture()
{

    for (architecture of architectureList) {
        contenedorArchitecture=document.createElement("div");

        linkArchitecture=document.createElement("a");
        linkArchitecture.setAttribute("href",architecture.image);
        linkArchitecture.setAttribute("target","_BLANK");

        imagenArchitecture=document.createElement("img");
        imagenArchitecture.setAttribute("src",architecture.image);
        imagenArchitecture.setAttribute("alt",architecture.name);
        imagenArchitecture.setAttribute("width","75%");
        
        ca.appendChild(contenedorArchitecture);
        contenedorArchitecture.appendChild(linkArchitecture);
        linkArchitecture.appendChild(imagenArchitecture);
    }

}

function renderCivilEngineering()
{

    for (civilEngineering of civilEngineeringList) {
        contenedorCivilEngineering=document.createElement("div");

        linkCivilEngineering=document.createElement("a");
        linkCivilEngineering.setAttribute("href",civilEngineering.contenido);
        linkCivilEngineering.setAttribute("target","_BLANK");

        imagenCivilEngineering=document.createElement("img");
        imagenCivilEngineering.setAttribute("src",civilEngineering.image);
        imagenCivilEngineering.setAttribute("alt",civilEngineering.name);
        imagenCivilEngineering.setAttribute("width","75%")
        
    
        cce.appendChild(contenedorCivilEngineering);
        contenedorCivilEngineering.appendChild(linkCivilEngineering);
        linkCivilEngineering.appendChild(imagenCivilEngineering);

    }

}

renderArchitecture();

renderCivilEngineering();