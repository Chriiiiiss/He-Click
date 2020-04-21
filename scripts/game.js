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

const fill = document.querySelector('.fill')
const emptiesInv = document.querySelectorAll('.inv')
const emptiesIco = document.querySelectorAll('.ico')
const empties = Array.from(emptiesInv).concat(Array.from(emptiesIco))

const typeItem = fill.classList[1]


// Fill Listener

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empties and call drag events
for (const empty of empties){
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}


//Drag Function
function dragStart(){
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd(){
    this.className = 'fill hand';
    
}

function dragOver(){
    event.preventDefault();
}

function dragEnter(){
    event.preventDefault();
}

function dragLeave(){
    this.className = 'inv'
}

function dragDrop(){
    const invItem = this.classList[0]
    if ((typeItem == 'hand' && invItem == 'inv-hand')
    || (typeItem =='head' && invItem =='inv-head' )
    || (typeItem == 'body' && invItem == 'inv-head')
    || (typeItem == 'foot' && invItem == 'inv-foot')
    || invItem == 'inv'){
        this.classname = 'invItem inv-full'
        this.append(fill)
    }
}

//PROBLEEME : Ne met pas la class "inv-full" ?


// function dragDrop(){
//     this.className = 'inv-full'
//     this.append(fill)
// }