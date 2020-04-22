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

let item = document.querySelectorAll('.item1, .item2, .item3, .item4, .item5, .item6, .item7, .item8, .item9')
const emptiesInv = document.querySelectorAll('.inv-empty, .inv-head, .inv-hand, .inv-body, .inv-foot')



// Fill Listener
let typeItem
let itemElem
let inventoryLastPos

// Loop through empties and call drag events




for (const empty of emptiesInv){
    for (const items of item) {
        empty.addEventListener('dragover', dragOver)
        empty.addEventListener('dragenter', dragEnter)
        empty.addEventListener('dragleave', dragLeave)
        empty.addEventListener('drop', dragDrop)
        items.addEventListener('dragstart', dragStart);
        items.addEventListener('dragend', dragEnd);
    }
}

//Drag Function
function dragStart(e){
    this.className += ' hold';
    setTimeout(() => (this.className += ' invisible'), 0);
    typeItem = this.getAttribute('data-slot')
    tierItem = this.classList[0]
    itemElem = this
    this.parentNode.className = "inv-empty"
    inventoryLastPos = this.parentNode
}

function dragEnd(){
    this.className = `${tierItem}`;
    // console.log(typeItem);
    
}

function dragOver(){
    event.preventDefault();
}

function dragEnter(){
    event.preventDefault();
}

function dragLeave(){
}



                                        // DROP FIRST TRY
// function dragDrop(){
//     const invItem = this.classList[0]
    // console.log(typeItem);
    // console.log(invItem);

//     if (((typeItem == 'hand' && invItem == 'inv-hand')    // A AMELIORER AU NIVEAU DES PARENTHESES
//     || (typeItem =='head' && invItem =='inv-head')
//     || (typeItem == 'body' && invItem == 'inv-body')
//     || (typeItem == 'foot' && invItem == 'inv-foot')) 
//     && !this.hasChildNodes()) //ths.classlist.etc.
//     {
//         this.append(itemElem)
//         this.classList.remove("inv-empty")
//         this.classList.add("inv-full")
//     }

//     // if (invItem == 'inv-empty' && !this.hasChildNodes())
//     // {
//     //     this.append(itemElem)
//     //     inventoryLastPos.append(itemElem)
//     // } 
    
//     else if (this.hasChildNodes() )
//     {
//         inventoryLastPos.append(itemElem)
//     } else if (this.classList[0] === "inv-full") {     //
//         inventoryLastPos.append(itemElem)
//         inventoryLastPos.className = "inv-full"
        
//     } else if (this.classList[0] === "inv-empty" && !this.hasChildNodes()){
//         this.append(itemElem)
//         this.classList.splice(0, 1, 'inv-full')
//         console.log(this.classList);
        
//         inventoryLastPos.className = "inv-empty"
//     }
// }


//////////////////////////////////////////////////// DROP V2////////////////////////////////////////////////

function dragDrop(){
    let currentSlot = this.getAttribute('data-slot')
    let destination = this.getAttribute('data-slot')
    let lastPos = inventoryLastPos.getAttribute('data-slot')

    let headEquip = document.querySelector('.character-item :nth-child(1) > div')
    let bodyEquip = document.querySelector('.character-item :nth-child(2) > div')
    let handEquip = document.querySelector('.character-item :nth-child(3) > div')
    let footEquip = document.querySelector('.character-item :nth-child(4) > div')
    
    // console.log(currentSlot);
    
    // let currentItem = currentItem.getAttribute('data-slot')
    
    if (typeItem === currentSlot && !this.hasChildNodes())
    {
        this.append(itemElem)
        this.classList.remove('inv-empty')
        this.classList.add('inv-full')

    } else if (currentSlot === 'inventory'){
        if (this.hasChildNodes())
        {
            inventoryLastPos.append(itemElem)
            inventoryLastPos.className = "inv-full"
        } else if (this.className === 'inv-empty' && !this.hasChildNodes())
        {
            this.append(itemElem)
            this.classList.remove('inv-empty')
            this.classList.add('inv-full')
            inventoryLastPos.classList.remove('inv-full')
            inventoryLastPos.classList.add('inv-empty')
        }
    }


    // HEAD BOOST DMG 
    if (headInv.hasChildNodes())
    {
    let headEquip = document.querySelector('.character-item :nth-child(1) > div')

    let tierItem = headEquip.classList[0]
    console.log(tierItem);
        if(tierItem == 'item1')
        {
        actualDmg += boost1
        }
        else if (tierItem == 'item2')
        {
            actualDmg += boost2
        } else if (tierItem == 'item3')
        {
            actualDmg += boost3
            
        }
    }
    else if (bodyInv.hasChildNodes())
    {
        let bodyEquip = document.querySelector('.character-item :nth-child(2) > div')
        let tierItem = bodyEquip.classList[0]
        if(tierItem == 'item1')
        {
        actualDmg += boost1
        }
        else if (tierItem == 'item2')
        {
            actualDmg += boost2
        } else if (tierItem == 'item3')
        {
            actualDmg += boost3
        }
    }


    else if (footInv.hasChildNodes())
    {
        let footEquip = document.querySelector('.character-item :nth-child(4) > div')
        let tierItem = footEquip.classList[0]
        if(tierItem == 'item1')
        {
        actualDmg += boost1
        }
        else if (tierItem == 'item2')
        {
            actualDmg += boost2
        } else if (tierItem == 'item3')
        {
            actualDmg += boost3
        }
    }
    
    
    else if (handInv.hasChildNodes())
    {
        let handEquip = document.querySelector('.character-item :nth-child(3) > div')
        console.log(handEquip);
        let tierItem = handEquip.classList[0]
        console.log(tierItem);
        if(tierItem === 'item1')
        {
        actualDmg += boost1
        }
        else if(tierItem === 'item2')
        {
            actualDmg += boost2
        }
        else if (tierItem == 'item3')
        {
            actualDmg += boost3
        }
        else if(tierItem === 'item4')
        {
        actualMag += boostMag1
        }
        else if(tierItem === 'item5')
        {
            actualMag += boostMag2
        }
        else if (tierItem == 'item6')
        {
            actualMag += boostMag3
        }
        if(tierItem === 'item7')
        {
        actualPower += boostPower1
        }
        else if(tierItem === 'item8')
        {
            actualPower += boostPower2
        }
        else if (tierItem == 'item9')
        {
            actualPower += boostPower3
        }
    }


    
    else
    {
        //Pas de retour de boost sans ce else ?
    }




    if (lastPos === 'head' || lastPos === 'body' || lastPos === 'foot')
    {
        if (tierItem == 'item1')
        {
            actualDmg -= boost1
        }
        else if (tierItem =="item2")
        {
            actualDmg -= boost2
        }
        else if (tierItem == 'item3')
        {
            actualDmg -= boost3
        }
    }
    if (lastPos === 'hand')
    {
        if (tierItem == 'item1')
        {
            actualDmg -= boost1
        }
        else if (tierItem =='item2')
        {
            actualDmg -= boost2
        }
        else if (tierItem == 'item3')
        {
            actualDmg -= boost3
        }
        if (tierItem == 'item4')
        {
            actualMag -= boostMag1
        }
        else if (tierItem =='item5')
        {
            actualMag -= boostMag2
        }
        else if (tierItem == 'item6')
        {
            actualMag -= boostMag3
        }
        if (tierItem == 'item7')
        {
            actualPower -= boostPower1
        }
        else if (tierItem =='item8')
        {
            actualPower -= boostPower2
        }
        else if (tierItem == 'item9')
        {
            actualPower -= boostPower3
        }
    }
    lvlSpan.textContent = `${actualLvl}`
    dmgSpan.textContent = `${actualDmg}`
    magSpan.textContent = `${actualMag}`
    powerSpan.textContent = `${actualPower}%`
}



//////////////////////////////////////////////END DROP//////////////////////////////////////////////////////



// GOLD IMPROVEMENT
let goldSpan = document.querySelector('.gold-posses')
let actualGold = 20
let goldWin = 2
goldSpan.textContent = `${actualGold}`

const goldUp = () => 
{
    actualGold +=goldWin
    goldSpan.textContent = `${actualGold}`
}


//////////////////////////////////////////////////////BUYING HETIC CHARACTERS//////////////////////////////////////////////

const diamond = document.querySelector('.diamond')
const ifBuy = document.querySelector('.ifBuy')
const recrut = document.querySelector('.recrut')

const price1 = 20
const price2 = 30
const price3 = 40
const price4 = 50
const price5 = 60
const price6 = 70
const price7 = 80
const price8 = 90
const price9 = 100
const price10 = 110

const buy1 = document.querySelector('.buy1')

let priceHetic1 = document.querySelector('.price-hetic1')
let priceHetic2 = document.querySelector('.price-hetic2')
let priceHetic3 = document.querySelector('.price-hetic3')
let priceHetic4 = document.querySelector('.price-hetic4')
let priceHetic5 = document.querySelector('.price-hetic5')
let priceHetic6 = document.querySelector('.price-hetic6')
let priceHetic7 = document.querySelector('.price-hetic7')
let priceHetic8 = document.querySelector('.price-hetic8')
let priceHetic9 = document.querySelector('.price-hetic9')
let priceHetic10 = document.querySelector('.price-hetic10')

priceHetic1.textContent = price1
priceHetic2.textContent = price2
priceHetic3.textContent = price3
priceHetic4.textContent = price4
priceHetic5.textContent = price5
priceHetic6.textContent = price6
priceHetic7.textContent = price7
priceHetic8.textContent = price8
priceHetic9.textContent = price9
priceHetic10.textContent = price10


buy1.addEventListener('click', event => {
    if (actualGold >= 20)
    {
        actualGold -= 20
        console.log('lol');
        ifBuy.style.display = 'inline'
        diamond.style.display = 'none'
        recrut.style.display = 'none'
        priceHetic1.style.display = 'none'
    }
    goldSpan.textContent = `${actualGold}`

  })






    // STATS IMRPROVMENT

// SPAN VARIABLES
let lvlSpan = document.querySelector('.actual-level')
let dmgSpan = document.querySelector('.actual-dmg')
let magSpan = document.querySelector('.actual-mag')
let powerSpan = document.querySelector('.actual-power')
// STATS VARIABLES
let actualLvl = 1
let actualDmg = 1
let actualMag = 0
let actualPower = 0
// SPAN CHANGEMENT
lvlSpan.textContent = `${actualLvl}`
dmgSpan.textContent = `${actualDmg}`
magSpan.textContent = `${actualMag}`
powerSpan.textContent = `${actualPower}%`
// STATS WIN
lvlWin = 1
dmgWin = 1
magWin = 5
powerWin = 3

let cmpt = 0
const lvlUp = () =>
{
    actualLvl += lvlWin
    // actualDmg += dmgWin
    cmpt += 1
    if (cmpt%5 === 0)
    {
        actualDmg += dmgWin
        actualMag += magWin
        actualPower += powerWin
        cmpt = 0
    }
    lvlSpan.textContent = `${actualLvl}`
    dmgSpan.textContent = `${actualDmg}`
    magSpan.textContent = `${actualMag}`
    powerSpan.textContent = `${actualPower}%`
}

// const dmgUp = () =>
// {
//     actualDmg += dmgWin
//     dmgSpan.textContent = `${actualDmg}`
// }
// const magUp = () =>
// {
//     actualMag += magWin
//     magSpan.textContent = `${actualMag}`
// }
// const powerUp = () =>
// {
//     actualPower += powerWin
//     powerSpan.textContent = `${actualPower}%`
// }


        // ITEMS BOOST

// VAR INVENTORY STATE
let headInv = document.querySelector('.character-item :nth-child(1)')
let bodyInv = document.querySelector('.character-item :nth-child(2)')
let handInv = document.querySelector('.character-item :nth-child(3)')
let footInv = document.querySelector('.character-item :nth-child(4)')



// console.log(headInv);
// console.log(bodyInv);
// console.log(handInv);
// console.log(footInv);




    // HEAD

// STATS BY ITEMS

const boost1 = 1
const boost2 = 3
const boost3 = 5
const boostMag1 = 5
const boostMag2 = 10
const boostMag3 = 25
const boostPower1 = 5
const boostPower2 = 10
const boostPower3 = 25



// LEVEL HEAD BOOST

// const test = () =>
// {
//     if (headInv.hasChildNodes())
//     {
//     // console.log("équipé");
//     let headEquip = document.querySelector('.character-item :nth-child(1) > div')
//     console.log(headEquip);
//     let tierItem = headEquip.className
//     console.log(tierItem);
//         if(headEquip.classList[0] == 'item1')
//         {
//         actualDmg += boost1
//         }
//         else if (headEquip.classList[0] == 'item2')
//         {
//             actualDmg += boost2
//         } else if (headEquip.classList[0] == 'item3')
//         {
//             actualDmg += boost3
//         }
//     }else
//     {
//         // console.log("casque non-équipé");
//     }
// lvlSpan.textContent = `${actualLvl}`
// dmgSpan.textContent = `${actualDmg}`
// magSpan.textContent = `${actualMag}`
// powerSpan.textContent = `${actualPower}%`
// }
