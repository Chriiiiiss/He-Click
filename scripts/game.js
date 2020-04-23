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

let item = document.querySelectorAll('.item1, .item2, .item3')
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
    setTimeout(() => (this.className = 'invisible'), 0);
    typeItem = this.getAttribute('data-slot')
    tierItem = this.classList[0]
    console.log(tierItem);  
    
    // console.log(typeItem);
    itemElem = this
    this.parentNode.className = "inv-empty"
    inventoryLastPos = this.parentNode
    // console.log(this.parentNode);
}

function dragEnd(){
    this.className = `${tierItem} ${typeItem}`;
    console.log(typeItem);
    
}

function dragOver(){
    event.preventDefault();
}

function dragEnter(){
    event.preventDefault();
}

function dragLeave(){
}


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


// DROP V2

function dragDrop(){
    let currentSlot = this.getAttribute('data-slot')
    // console.log(currentSlot);
    
    // let currentItem = currentItem.getAttribute('data-slot')
    
    if (typeItem === currentSlot && !this.hasChildNodes())
    {
        console.log(this.className);
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
let actualGold = 1000
let goldWin = 2
goldSpan.textContent = `${actualGold}`

const goldUp = () => 
{
    actualGold +=goldWin
    goldSpan.textContent = `${actualGold}`
}


//////////////////////////////////////////////////////BUYING HETIC CHARACTERS//////////////////////////////////////////////



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

const buy1 = document.querySelector('.click-buy1')
const buy2 = document.querySelector('.click-buy2')
const buy3 = document.querySelector('.click-buy3')
const buy4 = document.querySelector('.click-buy4')
const buy5 = document.querySelector('.click-buy5')
const buy6 = document.querySelector('.click-buy6')
const buy7 = document.querySelector('.click-buy7')
const buy8 = document.querySelector('.click-buy8')
const buy9 = document.querySelector('.click-buy9')
const buy10 = document.querySelector('.click-buy10')

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


    // 1
    const diamond1 = document.querySelector('.click-buy1 .diamond')
    const ifBuy1 = document.querySelector('.click-buy1 .ifBuy')
    const recrut1 = document.querySelector('.click-buy1 .recrut')

buy1.addEventListener('click', event => {
    if (actualGold >= price1 && buy1.className === 'click-buy1')
    {
        actualGold -= price1
        ifBuy1.style.display = 'inline'
        diamond1.style.display = 'none'
        recrut1.style.display = 'none'
        priceHetic1.style.display = 'none'
        buy1.style.opacity = '100%'
        buy1.classList.remove('click-buy1')
        buy1.classList.add('buy1')
        // AFFICHER LE PERSONNAGE A COTE DU HERO
        // AJOUTER LE BOOST APPORTE
    }
    goldSpan.textContent = `${actualGold}`
    })


    // 2
const diamond2 = document.querySelector('.click-buy2 .diamond')
const ifBuy2 = document.querySelector('.click-buy2 .ifBuy')
const recrut2 = document.querySelector('.click-buy2 .recrut')

buy2.addEventListener('click', event => {
    if (actualGold >= price2 && buy2.className === 'click-buy2')
    {
        actualGold -= price2
        ifBuy2.style.display = 'inline'
        diamond2.style.display = 'none'
        recrut2.style.display = 'none'
        priceHetic2.style.display = 'none'
        buy2.style.opacity = '100%'
        buy2.classList.remove('click-buy2')
        buy2.classList.add('buy2')
    }
    goldSpan.textContent = `${actualGold}`
    })


    // 3
const diamond3 = document.querySelector('.click-buy3 .diamond')
const ifBuy3 = document.querySelector('.click-buy3 .ifBuy')
const recrut3 = document.querySelector('.click-buy3 .recrut')

buy3.addEventListener('click', event => {
    if (actualGold >= price3 && buy3.className === 'click-buy3')
    {
        actualGold -= price3
        ifBuy3.style.display = 'inline'
        diamond3.style.display = 'none'
        recrut3.style.display = 'none'
        priceHetic3.style.display = 'none'
        buy3.style.opacity = '100%'
        buy3.classList.remove('click-buy3')
        buy3.classList.add('buy3')
    }
    goldSpan.textContent = `${actualGold}`
    })



//     // 4
const diamond4 = document.querySelector('.click-buy4 > .diamond')
const ifBuy4 = document.querySelector('.click-buy4 > .ifBuy')
const recrut4 = document.querySelector('.click-buy4 > .recrut')

buy4.addEventListener('click', event => {
    if (actualGold >= price4 && buy4.className === 'click-buy4')
    {
        actualGold -= price4
        ifBuy4.style.display = 'inline'
        diamond4.style.display = 'none'
        recrut4.style.display = 'none'
        priceHetic4.style.display = 'none'
        buy4.style.opacity = '100%'
        buy4.classList.remove('click-buy4')
        buy4.classList.add('buy4')
    }
    goldSpan.textContent = `${actualGold}`
    })


//     // 5
const diamond5 = document.querySelector('.click-buy5 .diamond')
const ifBuy5 = document.querySelector('.click-buy5 .ifBuy')
const recrut5 = document.querySelector('.click-buy5 .recrut')

buy5.addEventListener('click', event => {
    if (actualGold >= price5 && buy5.className === 'click-buy5')
    {
        actualGold -= price5
        ifBuy5.style.display = 'inline'
        diamond5.style.display = 'none'
        recrut5.style.display = 'none'
        priceHetic5.style.display = 'none'
        buy5.style.opacity = '100%'
        buy5.classList.remove('click-buy5')
        buy5.classList.add('buy5')
    }
    goldSpan.textContent = `${actualGold}`
    })


    // 6
const diamond6 = document.querySelector('.click-buy6 .diamond')
const ifBuy6 = document.querySelector('.click-buy6 .ifBuy')
const recrut6 = document.querySelector('.click-buy6 .recrut')

buy6.addEventListener('click', event => {
    if (actualGold >= price6 && buy6.className === 'click-buy6')
    {
        actualGold -= price6
        ifBuy6.style.display = 'inline'
        diamond6.style.display = 'none'
        recrut6.style.display = 'none'
        priceHetic6.style.display = 'none'
        buy6.style.opacity = '100%'
        buy6.classList.remove('click-buy6')
        buy6.classList.add('buy6')
    }
    goldSpan.textContent = `${actualGold}`
    })


    // 7
const diamond7 = document.querySelector('.click-buy7 .diamond')
const ifBuy7 = document.querySelector('.click-buy7 .ifBuy')
const recrut7 = document.querySelector('.click-buy7 .recrut')

buy7.addEventListener('click', event => {
    if (actualGold >= price7 && buy7.className === 'click-buy7')
    {
        actualGold -= price7
        ifBuy7.style.display = 'inline'
        diamond7.style.display = 'none'
        recrut7.style.display = 'none'
        priceHetic7.style.display = 'none'
        buy7.style.opacity = '100%'
        buy7.classList.remove('click-buy7')
        buy7.classList.add('buy7')
    }
    goldSpan.textContent = `${actualGold}`
    })


    // 8
const diamond8 = document.querySelector('.click-buy8 .diamond')
const ifBuy8 = document.querySelector('.click-buy8 .ifBuy')
const recrut8 = document.querySelector('.click-buy8 .recrut')

buy8.addEventListener('click', event => {
    if (actualGold >= price8 && buy8.className === 'click-buy8')
    {
        actualGold -= price8
        ifBuy8.style.display = 'inline'
        diamond8.style.display = 'none'
        recrut8.style.display = 'none'
        priceHetic8.style.display = 'none'
        buy8.style.opacity = '100%'
        buy8.classList.remove('click-buy8')
        buy8.classList.add('buy8')
    }
    goldSpan.textContent = `${actualGold}`
    })


    // 9
const diamond9 = document.querySelector('.click-buy9 .diamond')
const ifBuy9 = document.querySelector('.click-buy9 .ifBuy')
const recrut9 = document.querySelector('.click-buy9 .recrut')

buy9.addEventListener('click', event => {
    if (actualGold >= price9 && buy9.className === 'click-buy9')
    {
        actualGold -= price9
        ifBuy9.style.display = 'inline'
        diamond9.style.display = 'none'
        recrut9.style.display = 'none'
        priceHetic9.style.display = 'none'
        buy9.style.opacity = '100%'
        buy9.classList.remove('click-buy9')
        buy9.classList.add('buy9')
    }
    goldSpan.textContent = `${actualGold}`
    })


    // 10
const diamond10 = document.querySelector('.click-buy10 .diamond')
const ifBuy10 = document.querySelector('.click-buy10 .ifBuy')
const recrut10 = document.querySelector('.click-buy10 .recrut')

buy10.addEventListener('click', event => {
    if (actualGold >= price10 && buy10.className === 'click-buy10')
    {
        actualGold -= price10
        ifBuy10.style.display = 'inline-block'
        diamond10.style.display = 'none'
        recrut10.style.display = 'none'
        priceHetic10.style.display = 'none'
        buy10.style.opacity = '100%'
        buy10.classList.remove('click-buy10')
        buy10.classList.add('buy10')
    }
    goldSpan.textContent = `${actualGold}`
    })




//HETIC ITEMS RECUPERATION//

let recup = 1
const aa = document.querySelector('.hetic-item1')

if (recup === 1)
{
    aa.style.display = "inline"
}



    ////////////////////////////////////////////////////////////// STATS IMRPROVMENT//////////////////////////////////////

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
