const elementCharacter = document.querySelector('.button-character')
const elementHetic = document.querySelector('.button-hetic')
const character = document.querySelector('.list-menu-character') 
const characterHetic = document.querySelector('.list-menu-hetic')
const leave = document.querySelector('.leave')
const leave2 = document.querySelector('.leave2')



elementCharacter.addEventListener( 'click', () =>{
    character.style.display = 'block'
    elementHetic.style.display = 'none'
    elementCharacter.style.display = 'none'
})



elementHetic.addEventListener( 'click', () =>{
    characterHetic.style.display = 'block'
    elementHetic.style.display = 'none'
    elementCharacter.style.display = 'none'
})
 

leave.addEventListener( 'click', () =>{
    character.style.display = 'none'
    characterHetic.style.display = 'none'
    elementCharacter.style.display = 'inline'
    elementHetic.style.display = 'inline'
})

leave2.addEventListener( 'click', () =>{
    character.style.display = 'none'
    characterHetic.style.display = 'none'
    elementCharacter.style.display = 'inline'
    elementHetic.style.display = 'inline'
})




//                 DRAG AND DROP GENERAL GESTION

const fill = document.querySelectorAll('.fill')
const emptiesInv = document.querySelectorAll('.inv-empty, .inv-head, .inv-hand, .inv-body, .inv-foot')



// Fill Listener
let typeItem
let itemElem
let inventoryLastPos

// Loop through empties and call drag events




for (const empty of emptiesInv){
    for (const item of fill) {
        empty.addEventListener('dragover', dragOver)
        empty.addEventListener('dragenter', dragEnter)
        empty.addEventListener('dragleave', dragLeave)
        empty.addEventListener('drop', dragDrop)
        item.addEventListener('dragstart', dragStart);
        item.addEventListener('dragend', dragEnd);
    }
}

//Drag Function
function dragStart(e){
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
    typeItem = this.classList[1]
    itemElem = this
    this.parentNode.className = "inv-empty"
    inventoryLastPos = this.parentNode
    // console.log(this.parentNode);
}

function dragEnd(){
    this.className = `fill ${typeItem}`;
}

function dragOver(){
    event.preventDefault();
}

function dragEnter(){
    event.preventDefault();
}

function dragLeave(){

}

function dragDrop(){
    const invItem = this.classList[0]
    // console.log(typeItem);
    // console.log(invItem);

    if (((typeItem == 'hand' && invItem == 'inv-hand')    // A AMELIORER AU NIVEAU DES PARENTHESES
    || (typeItem =='head' && invItem =='inv-head')
    || (typeItem == 'body' && invItem == 'inv-body')
    || (typeItem == 'foot' && invItem == 'inv-foot')) 
    && !this.hasChildNodes())
    {
        this.append(itemElem)
    }

    // if (invItem == 'inv-empty' && !this.hasChildNodes())
    // {
    //     this.append(itemElem)
    //     inventoryLastPos.append(itemElem)
    // } 
    
    else if (this.hasChildNodes() )
    {
        inventoryLastPos.append(itemElem)
    } else if (this.classList[0] === "inv-full") {     //POTENTIELLEMENT AMELIORABLE AVEC LES hasChildNodes
        inventoryLastPos.append(itemElem)
        inventoryLastPos.className = "inv-full"
        
    } else if (this.classList[0] === "inv-empty" && !this.hasChildNodes()){
        this.append(itemElem)
        this.classList.splice(0, 1, 'inv-full')
        console.log(this.classList);
        
        inventoryLastPos.className = "inv-empty"
    }
}