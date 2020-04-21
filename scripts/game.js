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




//                 DRAG AND DROP GESTION

const fill = document.querySelectorAll('.fill')
const emptiesInv = document.querySelectorAll('.inv-empty')



// Fill Listener
let typeItem
let itemElem

// Loop through empties and call drag events




for (const empty of emptiesInv){
    for (const item of fill) {
        empty.addEventListener('dragover', dragOver)
        empty.addEventListener('dragenter', dragEnter)
        empty.addEventListener('dragleave', dragLeave)
        item.addEventListener('dragstart', dragStart);
        item.addEventListener('dragend', dragEnd);
        empty.addEventListener('drop', dragDrop)
    }
}

//Drag Function
function dragStart(e){
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
    typeItem = this.classList[1]
    itemElem = this
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
    // this.className = 'inv-empty'
}

function dragDrop(){
    const invItem = this.classList[0]
    if ((typeItem == 'hand' && invItem == 'inv-hand')
    || (typeItem =='head' && invItem =='inv-head' )
    || (typeItem == 'body' && invItem == 'inv-body')
    || (typeItem == 'foot' && invItem == 'inv-foot')
    || invItem == 'inv-empty'){
        // this.classname = 'inv-full'
        this.append(itemElem)
    }
}

//PROBLEME : Ne met pas la class "inv-full" ?


// function dragDrop(){
//     this.className = 'inv-full'
//     this.append(fill)
// }