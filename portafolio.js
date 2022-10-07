let m=document.getElementById("menu");
let ca=document.querySelector(".containerArchitecture");
let cce=document.querySelector(".containerCivilEngineering")

function mostrarMenu() {
    m.classList.toggle("menuContainer")
}

/*CONSTRUCTOR PROYECTOS ARQUITECTONICOS*/

const architectureList =[];

architectureList.push({
    image: "static/GALERIA/IMAGENES/CHICAZSFCC.png",
    name: "zorra",
});

architectureList.push({
    image: "static/GALERIA/IMAGENES/CONCEPTARTWARGAMESFCC.png",
    name: "WarWolf",
});

architectureList.push({
    image: "static/GALERIA/IMAGENES/GATO GAMER SFCC.png",
    name: "gato",
});

architectureList.push({
    image: "static/GALERIA/IMAGENES/SVSFCC.png",
    name: "sfcc",
});

architectureList.push({
    image: "static/GALERIA/IMAGENES/VIRGEN MARIA FINALSFCC.png",
    name: "Virgen María",
});

architectureList.push({
    image: "static/GALERIA/IMAGENES/PABLO ESCOBARSFCC.png" ,
    name: "Pablo Escobar",
});

architectureList.push({
    image: "static/GALERIA/IMAGENES/INOSUKE.png",
    name: "Inosuke",
});


/*CONSTRUCTOR PROYECTOS DE INGENIERIA CIVIL*/

const civilEngineeringList =[];

civilEngineeringList.push({
    image: "static/GALERIA/IMAGENES/57  Fenix ademan, logo 2.0.png",
    contenido:"static/GALERIA/IMAGENES/STORYBOARD BONDED TRAILER SFCC.pdf",
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