var divmain=document.createElement("div")
divmain.style.height="100%"
divmain.style.width="100%"
divmain.style.backgroundColor="#9cd799"
divmain.style.display="flex"
divmain.style.flexDirection="row"
divmain.style.flexWrap="wrap"
// divmain.style.position="absolute"
document.body.appendChild(divmain)
for (i=50;i<100;i++){
fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
.then(function(Array){
    return Array.json()

})


.then(function(beast){
    console.log(beast)
    console.log(beast.sprites.back_default)
   
    var divalt =document.createElement("div")
    divalt.style.height="320px"
    divalt.style.width="200px"
    divalt.style.backgroundColor="#54d3ac"
    divalt.style.margin="10px"
    divalt.style.border="3px solid black"
    var image=document.createElement("img")
    image.src= beast.sprites.back_default
    image.style.height="100px"
    image.style.width="200px"
    divalt.appendChild(image)
    


    var divalt1=document.createElement("div")
    divalt1.style.height="200px"
    divalt1.style.width="200px"
    
    divalt1.style.backgroundColor="#998b78"
    
    var p1=document.createElement("p")
    p1.innerText="Name"+":"+beast.name 
    p1.style.height="20px"
    p1.style.width="200px"

    divalt1.appendChild(p1)
    var p2=document.createElement("p")
    p2.innerText="Ability"+":"+ beast.abilities[0].ability.name 
    p2.style.height="20px"
    p2.style.width="200px"
    p2.color="black"
    divalt1.appendChild(p2)
    var p3=document.createElement("p")
    p3.innerText="Moves"+":"+beast.moves[0].move.name 
    p3.style.height="20px"
    p3.style.width="200px"
    divalt1.appendChild(p3)
    var p4=document.createElement("p")
    p4.innerText="weight"+":"+beast.weight 
    p4.style.height="20px"
    p4.style.width="200px"
    divalt1.appendChild(p4)
    
    divalt.appendChild(divalt1)
    divmain.appendChild(divalt)



  
})
}