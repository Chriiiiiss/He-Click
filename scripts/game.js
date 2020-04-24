class monster {
    constructor(id, name, img_url, hp, cd, gold, drop) {
        this.id = id,
        this.name = name,
        this.img_url = img_url,
        this.hp = hp,
        this.cd = cd,
        this.gold = gold
        this.drop = drop
    }
}

class itemSelect {
    constructor(id, imgUrl, data, tier, classDrop) {
        this.id = id
        this.imgUrl = imgUrl
        this.data = data
        this.tier = tier
        this.classDrop = classDrop
    }
}

const ITEM_PATH = '../images/stuff/'

const item_tab = [
    new itemSelect(0, `${ITEM_PATH}body1`, 'body', 1, 'item1'),
    new itemSelect(1, `${ITEM_PATH}head1`, 'head', 1, 'item1'),
    new itemSelect(2, `${ITEM_PATH}foot1`, 'foot', 1, 'item1'),
    new itemSelect(3, `${ITEM_PATH}sword1`, 'hand', 1, 'item1'),
    new itemSelect(4, `${ITEM_PATH}sceptre1`, 'hand', 1, 'item4'),
    new itemSelect(5, `${ITEM_PATH}book1`, 'hand', 1, 'item7'),
    new itemSelect(6, `${ITEM_PATH}body2`, 'body', 2, 'item2'),
    new itemSelect(7, `${ITEM_PATH}head2`, 'head', 2, 'item2'),
    new itemSelect(8, `${ITEM_PATH}foot2`, 'foot', 2, 'item2'),
    new itemSelect(9, `${ITEM_PATH}sword2`, 'hand', 2, 'item2'),
    new itemSelect(10, `${ITEM_PATH}sceptre2`, 'hand', 2, 'item5'),
    new itemSelect(11, `${ITEM_PATH}book2`, 'hand', 2, 'item8'),
    new itemSelect(12, `${ITEM_PATH}body3`, 'body', 3, 'item3'),
    new itemSelect(13, `${ITEM_PATH}head3`, 'head', 3, 'item3'),
    new itemSelect(14, `${ITEM_PATH}foot3`, 'foot', 3, 'item3'),
    new itemSelect(15, `${ITEM_PATH}sword3`, 'hand', 3, 'item3'),
    new itemSelect(16, `${ITEM_PATH}sceptre3`, 'hand', 3, 'item6'),
    new itemSelect(17, `${ITEM_PATH}book3`, 'hand', 3, 'item9'),
]

const monster_tab = [
    // new monster(0, "tiny_shit", "tiny_monster.png", 5, 0, 2, 1),
    new monster(1, "pirate", "monstre_pirate.png", 10, 0, 3, 1),
    new monster(2, "croco", "monstre_croco.png", 15, 0, 4, 1),
    new monster(3, "tchoutchou", "monstre_zombie.png", 20, 0, 5, 1),
    new monster(4, "singe", "monstre_singe.png", 25, 0, 6, 1),
    new monster(5, "serpent", "monstre_serpent.png", 50, 60, 7, 2),
    new monster(6, "machin", "monstre_machin.png", 50, 0, 8, 1),
    new monster(7, "bidule", "monstre_bidule.png", 65, 0, 9, 1),
    new monster(8, "truc", "monstre_truc.png", 70, 0, 10, 1),
    new monster(9, "muche", "monstre_muche.png", 75, 0, 11, 1),
    new monster(10, "boche", "monstre_boche.png", 100, 60, 12, 2),
    new monster(11, "sorciere", "monstre_sorciere.png", 110, 0, 13, 1),
    new monster(12, "momie", "monstre_momie.png", 110, 0, 14, 1),
    new monster(13, "zombie", "monstre_zombie.png", 150, 0, 15, 1),
    new monster(14, "garde", "monstre_garde.png", 200, 0, 17, 1),
    new monster(15, "faucheur", "monstre_faucheur.png", 260, 60, 20, 2),
    new monster(16, "loup", "monstre_loup.png", 350, 0, 23, 1),
    new monster(17, "callas", "monstre_callas.png", 500, 0, 26, 1),
    new monster(18, "morvus", "monstre_morvus.png", 670, 0, 28, 1),
    new monster(19, "screed", "monstre_screed.png", 750, 0, 30, 1),
    new monster(20, "gandalf", "monstre_gandalf.png", 900, 60, 35, 2),
    new monster(21, "gargouille", "monstre_gargouille.png", 1500, 0, 40, 1),
    new monster(22, "litlevil", "monstre_litlevil.png", 3200, 0, 45, 1),
    new monster(23, "gasper", "monstre_gasper.png", 5000, 0, 50, 1),
    new monster(24, "dracula", "monstre_dracula.png", 6000, 0, 60, 1),
    new monster(25, "demon", "monstre_demon.png", 10000, 60, 70, 1),
    new monster(26, "puget", "monstre_bossfinal.png", 50000, 60, 10000, 2)
]

// SPAN VARIABLES

let lvlSpan = document.querySelector('.actual-level')
let dmgSpan = document.querySelector('.actual-dmg')
let magSpan = document.querySelector('.actual-mag')
let powerSpan = document.querySelector('.actual-power')
let emptiesInv = document.querySelectorAll('.inv-empty, .inv-head, .inv-hand, .inv-body, .inv-foot')
let item = document.querySelectorAll('.item1, .item2, .item3, .item4, .item5, .item6, .item7, .item8, .item9')
const invChar = document.querySelector('.list-menu-character')
let modifierHP = document.querySelector('.actualHP')
let modifierLvl = document.querySelector('.actualLvl')
updateDropSlot()


// SBEGINNING VARIABLES

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

// GOLD GESTION

let actualGold = 0
let goldWin = 4
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

function goldUp (goldWin){
    actualGold +=goldWin
    goldSpan.textContent = `${actualGold}`
}

// DOM-GOLD

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
const heticChac1 = document.querySelector('.hetic-character1')
const heticChac2 = document.querySelector('.hetic-character2')
const heticChac3 = document.querySelector('.hetic-character3')
const heticChac4 = document.querySelector('.hetic-character4')
const heticChac5 = document.querySelector('.hetic-character5')
const heticChac6 = document.querySelector('.hetic-character6')
const heticChac7 = document.querySelector('.hetic-character7')
const heticChac8 = document.querySelector('.hetic-character8')
const heticChac9 = document.querySelector('.hetic-character9')
const heticChac10 = document.querySelector('.hetic-character10')
let goldSpan = document.querySelector('.gold-posses')


// DRAG & DROG VAR

let typeItem
let itemElem
let inventoryLastPos


// INIT GLOBAL VAR RENDER

let _w = window.innerWidth
let _h = window.innerHeight


// INIT DOM SHOP VAR

const bg_view = document.querySelector(".game-bg")
const elementCharacter = document.querySelector('.button-character')
const elementHetic = document.querySelector('.button-hetic')
const character = document.querySelector('.list-menu-character') 
const characterHetic = document.querySelector('.list-menu-hetic')
const leave = document.querySelector('.leave')
const leave2 = document.querySelector('.leave2')
const diamond1 = document.querySelector('.click-buy1 .diamond')
const ifBuy1 = document.querySelector('.click-buy1 .ifBuy')
const recrut1 = document.querySelector('.click-buy1 .recrut')
const diamond2 = document.querySelector('.click-buy2 .diamond')
const ifBuy2 = document.querySelector('.click-buy2 .ifBuy')
const recrut2 = document.querySelector('.click-buy2 .recrut')
const diamond3 = document.querySelector('.click-buy3 .diamond')
const ifBuy3 = document.querySelector('.click-buy3 .ifBuy')
const recrut3 = document.querySelector('.click-buy3 .recrut')
const diamond5 = document.querySelector('.click-buy5 .diamond')
const ifBuy5 = document.querySelector('.click-buy5 .ifBuy')
const recrut5 = document.querySelector('.click-buy5 .recrut')
const diamond4 = document.querySelector('.click-buy4 > .diamond')
const ifBuy4 = document.querySelector('.click-buy4 > .ifBuy')
const recrut4 = document.querySelector('.click-buy4 > .recrut')
const diamond6 = document.querySelector('.click-buy6 .diamond')
const ifBuy6 = document.querySelector('.click-buy6 .ifBuy')
const recrut6 = document.querySelector('.click-buy6 .recrut')
const diamond7 = document.querySelector('.click-buy7 .diamond')
const ifBuy7 = document.querySelector('.click-buy7 .ifBuy')
const recrut7 = document.querySelector('.click-buy7 .recrut')
const diamond8 = document.querySelector('.click-buy8 .diamond')
const ifBuy8 = document.querySelector('.click-buy8 .ifBuy')
const recrut8 = document.querySelector('.click-buy8 .recrut')
const diamond9 = document.querySelector('.click-buy9 .diamond')
const ifBuy9 = document.querySelector('.click-buy9 .ifBuy')
const recrut9 = document.querySelector('.click-buy9 .recrut')
const diamond10 = document.querySelector('.click-buy10 .diamond')
const ifBuy10 = document.querySelector('.click-buy10 .ifBuy')
const recrut10 = document.querySelector('.click-buy10 .recrut')
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


// SHOP DOM FOR VERIF


const heticItemLock1 = document.querySelector('.items-slots :nth-child(1) > .lock')
const heticItemLock2 = document.querySelector('.items-slots :nth-child(2) > .lock')
const heticItemLock3 = document.querySelector('.items-slots :nth-child(3) > .lock')
const heticItemLock4 = document.querySelector('.items-slots :nth-child(4) > .lock')
const heticItemLock5 = document.querySelector('.items-slots :nth-child(5) > .lock')
const heticItemLock6 = document.querySelector('.items-slots :nth-child(6) > .lock')
const heticItemLock7 = document.querySelector('.items-slots :nth-child(7) > .lock')
const heticItemLock8 = document.querySelector('.items-slots :nth-child(8) > .lock')
const heticItemLock9 = document.querySelector('.items-slots :nth-child(9) > .lock')
const heticItemLock10 = document.querySelector('.items-slots :nth-child(10) > .lock')
let heticRecup1 = 0
let heticRecup2 = 0
let heticRecup3 = 0
let heticRecup4 = 0
let heticRecup5 = 0
let heticRecup6 = 0
let heticRecup7 = 0
let heticRecup8 = 0
let heticRecup9 = 0
let heticRecup10 = 0
const heticItem1 = document.querySelector('.hetic-item1')
const heticItem2 = document.querySelector('.hetic-item2')
const heticItem3 = document.querySelector('.hetic-item3')
const heticItem4 = document.querySelector('.hetic-item4')
const heticItem5 = document.querySelector('.hetic-item5')
const heticItem6 = document.querySelector('.hetic-item6')
const heticItem7 = document.querySelector('.hetic-item7')
const heticItem8 = document.querySelector('.hetic-item8')
const heticItem9 = document.querySelector('.hetic-item9')
const heticItem10 = document.querySelector('.hetic-item10')
let listRecupHetic = [heticRecup1, heticRecup2, heticRecup3, heticRecup4, heticRecup5, heticRecup6, heticRecup7, heticRecup8, heticRecup9, heticRecup10]
let listItemHetic = [heticItem1, heticItem2, heticItem3, heticItem4, heticItem5, heticItem6, heticItem7, heticItem8, heticItem9, heticItem10]
const listHeticLock = [heticItemLock1, heticItemLock2, heticItemLock3, heticItemLock4, heticItemLock5, heticItemLock6, heticItemLock7, heticItemLock8, heticItemLock9, heticItemLock10]
const comptItemHetic = listRecupHetic.length

buy1.addEventListener('click', event => {
    if (actualGold >= price1 && buy1.className === 'click-buy1')
    {
        heticRecup1 = 1
        actualGold -= price1
        ifBuy1.style.display = 'inline'
        diamond1.style.display = 'none'
        recrut1.style.display = 'none'
        priceHetic1.style.display = 'none'
        buy1.style.opacity = '100%'
        buy1.classList.remove('click-buy1')
        buy1.classList.add('buy1')
        heticChac1.style.display = 'inline'
        actualDmg += 3
    }
    goldSpan.textContent = `${actualGold}`
    })

buy2.addEventListener('click', event => {
    if (actualGold >= price2 && buy2.className === 'click-buy2')
    {
        heticRecup2 = 1
        actualGold -= price2
        ifBuy2.style.display = 'inline'
        diamond2.style.display = 'none'
        recrut2.style.display = 'none'
        priceHetic2.style.display = 'none'
        buy2.style.opacity = '100%'
        buy2.classList.remove('click-buy2')
        buy2.classList.add('buy2')
        heticChac2.style.display = 'inline'
        actualMag += 3
    }
    goldSpan.textContent = `${actualGold}`
    })

buy3.addEventListener('click', event => {
    if (actualGold >= price3 && buy3.className === 'click-buy3')
    {
        heticRecup3 = 1
        actualGold -= price3
        ifBuy3.style.display = 'inline'
        diamond3.style.display = 'none'
        recrut3.style.display = 'none'
        priceHetic3.style.display = 'none'
        buy3.style.opacity = '100%'
        buy3.classList.remove('click-buy3')
        buy3.classList.add('buy3')
        heticChac3.style.display = 'inline'
        actualDmg += 5
    }
    goldSpan.textContent = `${actualGold}`
    })

buy4.addEventListener('click', event => {
    if (actualGold >= price4 && buy4.className === 'click-buy4')
    {
        heticRecup4 = 1
        actualGold -= price4
        ifBuy4.style.display = 'inline'
        diamond4.style.display = 'none'
        recrut4.style.display = 'none'
        priceHetic4.style.display = 'none'
        buy4.style.opacity = '100%'
        buy4.classList.remove('click-buy4')
        buy4.classList.add('buy4')
        heticChac4.style.display = 'inline'
        actualMag += 5
    }
    goldSpan.textContent = `${actualGold}`
    })

buy5.addEventListener('click', event => {
    if (actualGold >= price5 && buy5.className === 'click-buy5')
    {
        heticRecup5 = 1
        actualGold -= price5
        ifBuy5.style.display = 'inline'
        diamond5.style.display = 'none'
        recrut5.style.display = 'none'
        priceHetic5.style.display = 'none'
        buy5.style.opacity = '100%'
        buy5.classList.remove('click-buy5')
        buy5.classList.add('buy5')
        heticChac5.style.display = 'inline'
        actualDmg += 8
    }
    goldSpan.textContent = `${actualGold}`
    })

buy6.addEventListener('click', event => {
    if (actualGold >= price6 && buy6.className === 'click-buy6')
    {
        heticRecup6 = 1
        actualGold -= price6
        ifBuy6.style.display = 'inline'
        diamond6.style.display = 'none'
        recrut6.style.display = 'none'
        priceHetic6.style.display = 'none'
        buy6.style.opacity = '100%'
        buy6.classList.remove('click-buy6')
        buy6.classList.add('buy6')
        heticChac6.style.display = 'inline'
        actualMag += 8
    }
    goldSpan.textContent = `${actualGold}`
    })

buy7.addEventListener('click', event => {
    if (actualGold >= price7 && buy7.className === 'click-buy7')
    {
        heticRecup7 = 1
        actualGold -= price7
        ifBuy7.style.display = 'inline'
        diamond7.style.display = 'none'
        recrut7.style.display = 'none'
        priceHetic7.style.display = 'none'
        buy7.style.opacity = '100%'
        buy7.classList.remove('click-buy7')
        buy7.classList.add('buy7')
        heticChac7.style.display = 'inline'
        actualDmg += 12
    }
    goldSpan.textContent = `${actualGold}`
    })

buy8.addEventListener('click', event => {
    if (actualGold >= price8 && buy8.className === 'click-buy8')
    {
        heticRecup8 = 1
        actualGold -= price8
        ifBuy8.style.display = 'inline'
        diamond8.style.display = 'none'
        recrut8.style.display = 'none'
        priceHetic8.style.display = 'none'
        buy8.style.opacity = '100%'
        buy8.classList.remove('click-buy8')
        buy8.classList.add('buy8')
        heticChac8.style.display = 'inline'
        actualMag += 12
    }
    goldSpan.textContent = `${actualGold}`
    })

buy9.addEventListener('click', event => {
    if (actualGold >= price9 && buy9.className === 'click-buy9')
    {
        heticRecup9 = 1
        actualGold -= price9
        ifBuy9.style.display = 'inline'
        diamond9.style.display = 'none'
        recrut9.style.display = 'none'
        priceHetic9.style.display = 'none'
        buy9.style.opacity = '100%'
        buy9.classList.remove('click-buy9')
        buy9.classList.add('buy9')
        heticChac9.style.display = 'inline'
        actualDmg += 15
    }
    goldSpan.textContent = `${actualGold}`
    })

buy10.addEventListener('click', event => {
    if (actualGold >= price10 && buy10.className === 'click-buy10')
    {
        heticRecup10 = 1
        actualGold -= price10
        ifBuy10.style.display = 'inline-block'
        diamond10.style.display = 'none'
        recrut10.style.display = 'none'
        priceHetic10.style.display = 'none'
        buy10.style.opacity = '100%'
        buy10.classList.remove('click-buy10')
        buy10.classList.add('buy10')
        heticChac10.style.display = 'inline'
        actualMag += 15
    }
    goldSpan.textContent = `${actualGold}`
    })


// VAR INVENTORY STATE
let headInv = document.querySelector('.character-item :nth-child(1)')
let bodyInv = document.querySelector('.character-item :nth-child(2)')
let handInv = document.querySelector('.character-item :nth-child(3)')
let footInv = document.querySelector('.character-item :nth-child(4)')

//HETIC ITEMS RECUPERATION//

let recup = 1

// INIT GLOBAL VAR PIXI

const background_loader = new PIXI.Loader("../images/assets")
const hud = new PIXI.Loader("../images/assets/hud")
const main_char = new PIXI.Loader("../images/assets/main_charact")
const monster_load = new PIXI.Loader("../images/assets/monster")

// INIT GLOBAL VAR TEXTURE

let texture_ground_f
let texture_front_f 
let texture_back_f
let texture_middle_f
let texture_front_m 
let texture_back_m
let texture_middle_m
let texture_front_o 
let texture_back_o
let texture_middle_o
let texture_progress_bar
let texture_bar
let texture_main_char
let texture_main_char_anim0
let texture_main_char_anim1
let texture_monster_test
let texture_tab_monster = new Array()

// INIT SPRITE GLOBAL VAR

let sprite_hud
let sprite_front
let sprite_middle
let sprite_back
let sprite_xp
let sprite_xp_position_x
let sprite_ground
let sprite_main_char
let sprite_monster_test

// INIT GLOBAL VAR GAMELOOP

let game = true
let progress_bar_width
let biome_value = "f"
const biome_tab = ['f', 'o', 'm', 'w', 'b']
let biomeIndex = 0
let bg_x = 0 
let bg_speed = 0
let xp_max
let bg = new PIXI.Application ({
    resizeTo: window,
    view: bg_view
})
let xp_char = 4
let id_game = 4
let currentHP
let level = 0
let cmptStatsUpStatsUp = 0


// STATS BY ITEMS

const boost1 = 1
const boost2 = 3
const boost3 = 5
const boostMag1 = 5
const boostMag2 = 10
const boostMag3 = 25
const boostPower1 = 5
const boostPower2 = 25
const boostPower3 = 30


// INIT WINDOWS EVENT_LISTENER

window.addEventListener('keyup', (e) => {
    if (e.code === "Space" && bg_x != 0) {
        bg_speed = 0
    } 
    else if (e.code === "ArrowLeft") bg_speed += 1
    else if (e.code === "ArrowRight") bg_speed -= 1

    switch (e.code) {
        case "Semicolon":
            biome_value = "m"
            break;
        case "KeyF":
            biome_value = "f"
            break;
        case "KeyO":
            biome_value = "o"
            break;
        case "KeyZ":
            biome_value = "w"
            break;
        case "KeyB":
            biome_value = "b"
            break;
        default:
            break;
    }
})

loadBgFiles(background_loader, ["forest_bg", "mountain_bg", "ocean_bg", "boss_bg", "western_bg"], ["f", "m", "o", "b", "w"])

// LOAD MONSTER TEST FILES

    for (let index = 0; index < monster_tab.length; index++) {
        const element = monster_tab[index];
        monster_load.add(element.name, element.img_url)
        
    }
    monster_load.load()
    loadFinalFiles(monster_load)

// LOAD HUD FILES

hud.add("progress_bar", "progress_bar.png")
hud.add("progress_bar_xp", "xp_bar.png")
hud.load()
loadFiles(hud)

// LOAD MAIN_CHAR

main_char.add("main_char", "main_charact1.png")
main_char.add("main_char_1", "main_charact2.png")
main_char.add("main_char_2", "main_charact3.png")
loadFiles(main_char)

// GAME LOOP 

bg.ticker.add(gameLoop)
bg.ticker.stop() 

// FUNCTION THAT WILL LOAD BACKGROUND FILES

function loadBgFiles(loader, files, suffix) {
    loader.add(`ground_${suffix[0]}`, `${files[0]}/ground.png`)
    loader.add(`front_${suffix[0]}`, `${files[0]}/front.png`)
    loader.add(`middle_${suffix[0]}`, `${files[0]}/middle.png`)
    loader.add(`back_${suffix[0]}`, `${files[0]}/back.png`)
    loader.add(`ground_${suffix[1]}`, `${files[1]}/ground.png`)
    loader.add(`front_${suffix[1]}`, `${files[1]}/front.png`)
    loader.add(`middle_${suffix[1]}`, `${files[1]}/middle.png`)
    loader.add(`back_${suffix[1]}`, `${files[1]}/back.png`)
    loader.add(`ground_${suffix[2]}`, `${files[2]}/ground.png`)
    loader.add(`front_${suffix[2]}`, `${files[2]}/front.png`)
    loader.add(`middle_${suffix[2]}`, `${files[2]}/middle.png`)
    loader.add(`back_${suffix[2]}`, `${files[2]}/back.png`)
    loader.add(`ground_${suffix[3]}`, `${files[3]}/ground.png`)
    loader.add(`front_${suffix[3]}`, `${files[3]}/front.png`)
    loader.add(`middle_${suffix[3]}`, `${files[3]}/middle.png`)
    loader.add(`back_${suffix[3]}`, `${files[3]}/back.png`)
    loader.add(`ground_${suffix[4]}`, `${files[4]}/ground.png`)
    loader.add(`front_${suffix[4]}`, `${files[4]}/front.png`)
    loader.add(`middle_${suffix[4]}`, `${files[4]}/middle.png`)
    loader.add(`back_${suffix[4]}`, `${files[4]}/back.png`)
    loadFiles(loader)
}

// FUNCTION THAT LOAD TEXTURE FROM FILES AND HANDLE

function loadFiles(loader_files) {
    loader_files.onProgress.add((loader) => {
        console.log(`${loader.progress}% file loaded`)
    })
    
    loader_files.onError.add(() => {
        console.error(`Loading Error`)
    })
    
    loader_files.onLoad.add((loader, resource) => {
        console.log(`${resource.name} loaded`)
    })
    loader_files.onComplete.add(() => {
        console.log(`LOADING COMPLETED`)
    })

    loader_files.load()
    return loader_files
}

function loadFinalFiles(loader_files) {
    loader_files.onProgress.add((loader) => {
        console.log(`${loader.progress}% file loaded`)
    })
    
    loader_files.onError.add(() => {
        console.error(`Loading Error`)
    })
    
    loader_files.onLoad.add((loader, resource) => {
        console.log(`${resource.name} loaded`)
    })
    loader_files.onComplete.add(() => {
        console.log(`LOADING COMPLETED`)
        loadBaseSprite(background_loader, hud, main_char, monster_load)
        bg.ticker.start()

    })

    loader_files.load()
    return loader_files
}


// FUNCTION THAT LOAD BASE SPRITE FROM FILES

function loadBaseSprite(bg_loader, hud_loader, char_loader, monster_load) {

    // MONSTER LOAD

    for (let index = 0; index < monster_tab.length; index++) {
        const element = monster_tab[index];
        const elem_name = element.name
        
        texture_tab_monster[index] = monster_load.resources[elem_name].texture
    }

    // HUD LOADER BASE SPRITE
    
    texture_progress_bar = hud_loader.resources.progress_bar.texture
    
    texture_bar = hud_loader.resources.progress_bar_xp.texture

    // MAIN_CHAR TEXTURE

    texture_main_char = char_loader.resources.main_char.texture
    texture_main_char_anim0 = char_loader.resources.main_char_1.texture
    texture_main_char_anim1 = char_loader.resources.main_char_2.texture

    // BG TEXTURE LOAD

    texture_ground_f = bg_loader.resources.ground_f.texture
    texture_front_f = bg_loader.resources.front_f.texture
    texture_back_f = bg_loader.resources.back_f.texture
    texture_middle_f = bg_loader.resources.middle_f.texture
    texture_ground_m = bg_loader.resources.ground_m.texture
    texture_front_m = bg_loader.resources.front_m.texture
    texture_back_m = bg_loader.resources.back_m.texture
    texture_middle_m = bg_loader.resources.middle_m.texture
    texture_ground_o = bg_loader.resources.ground_o.texture
    texture_front_o = bg_loader.resources.front_o.texture
    texture_back_o = bg_loader.resources.back_o.texture
    texture_middle_o = bg_loader.resources.middle_o.texture
    texture_ground_b = bg_loader.resources.ground_b.texture
    texture_front_b = bg_loader.resources.front_b.texture
    texture_back_b = bg_loader.resources.back_b.texture
    texture_middle_b = bg_loader.resources.middle_b.texture
    texture_ground_w = bg_loader.resources.ground_w.texture
    texture_front_w = bg_loader.resources.front_w.texture
    texture_back_w = bg_loader.resources.back_w.texture
    texture_middle_w = bg_loader.resources.middle_w.texture
    
    // SPRITE SETUP
    
    sprite_back = createSprite(texture_back_f, 3836, 500, -60, -80, bg)
    sprite_middle = createSprite(texture_middle_f, 3836, 500, -60, -80, bg)
    sprite_front = createSprite(texture_front_f, 3836, 375, -15, 70, bg)
    sprite_ground = createSprite(texture_ground_f, _w, 1000, 0, 345, bg)
    sprite_ground.scale.y = 0.5
    sprite_hud = createSprite(texture_progress_bar, texture_progress_bar.width, 94, 0, 0, bg)
    sprite_main_char = createSprite(texture_main_char, texture_main_char.width, texture_main_char.height, 0, 0, bg)
    sprite_xp = createSprite(texture_bar, xp_max, texture_bar.height, 0, 0, bg)
    sprite_monster_test = createSprite(texture_tab_monster[level], texture_tab_monster[level].width, texture_tab_monster[level].height,0,0, bg)
    currentHP = monster_tab[level].hp
    sprite_monster_test.scale.y = 0.7
    sprite_monster_test.scale.x = 0.7
    
    // MANAGE SPRITE
    
    setSpritePosition(sprite_hud, window.innerWidth / 2, sprite_hud.height, 0.5, 0.5)
    sprite_xp_position_x = sprite_hud.position.x - sprite_hud.width / 2 + 20
    setSpritePosition(sprite_xp, sprite_xp_position_x, sprite_hud.height - 5, 0, 0.5)
    setSpritePosition(sprite_main_char, _w / 2, _h / 2, 0, 0.5)
    setSpritePosition(sprite_monster_test, _w / 2, _h / 2, -0.7, 0.5)
    sprite_monster_test.interactive = true;
    sprite_monster_test.on('click', attackAnim)

    // MANAGE VAR

    xp_max = texture_bar.width
    sprite_xp.width = (xp_max / 5) * calcModuloProgress(currentHP, 5)
    // setSpriteMonster()
}

function setSpritePosition(sprite, x, y, xA, yA) {
    sprite.anchor.x = xA
    sprite.anchor.y = yA
    sprite.position.x = x
    sprite.position.y = y
}

// FUNCTION THAT CREATES BACKGROUND FROM TEXTURE
// IT TAKES AN WIDTH AND A HEIGHT PARAMETER
// AND ALSO A POSITION X AND Y

function createSprite(texture, width, height, x, y, contain) {    
    let background = new PIXI.TilingSprite(texture, width, height)
    background.position.set(x,y)
    contain.stage.addChild(background)

    return background
}

// GAME LOOP FUNCTION USING TICKS

function gameLoop() {
    HandleHealth()
    changeBg()
    bgScroll()
    heticLock()
}

//  FUNCTION ANIMATION

function attackAnim() {
    // bg.ticker.start()
    setTimeout(() => {
        sprite_main_char.texture = texture_main_char_anim0
    }, 50)
    setTimeout(() => {
        sprite_main_char.texture = texture_main_char_anim1
    }, 170)
    setTimeout(() => {
        sprite_main_char.texture = texture_main_char
    }, 350)
    currentHP -= actualDmg
}


// FUNCTION USED FOR THE PARALLAX
function bgScroll() {
    bg_x += bg_speed
    sprite_ground.tilePosition.x = bg_x
    sprite_front.tilePosition.x = bg_x / 2
    sprite_middle.tilePosition.x = bg_x / 4
    sprite_back.tilePosition.x = bg_x / 8
}

function changeBg() {
    switch (biome_value) {
        case "m":
            sprite_ground.texture = texture_ground_m
            sprite_front.texture = texture_front_m
            sprite_middle.texture = texture_middle_m
            sprite_back.texture = texture_back_m   
            break
        case "o":
            sprite_ground.texture = texture_ground_o
            sprite_front.texture = texture_front_o
            sprite_middle.texture = texture_middle_o
            sprite_back.texture = texture_back_o  
            break;
        case "w":
            sprite_ground.texture = texture_ground_w
            sprite_front.texture = texture_front_w
            sprite_middle.texture = texture_middle_w
            sprite_back.texture = texture_back_w  
            break;
        case "b":
            sprite_ground.texture = texture_ground_b
            sprite_front.texture = texture_front_b
            sprite_middle.texture = texture_middle_b
            sprite_back.texture = texture_back_b  
            break;
        default:
            sprite_ground.texture = texture_ground_f
            sprite_front.texture = texture_front_f
            sprite_middle.texture = texture_middle_f
            sprite_back.texture = texture_back_f 
            break;
    }
}

function calcModuloProgress(nbr, mod) {
    return nbr % mod == 0 ? 5 : nbr % mod
}

function setSpriteMonster() {
    let index = 0
    setInterval(() => {
        sprite_monster_test.texture = texture_tab_monster[index]
        sprite_monster_test.width = texture_tab_monster[index].width
        sprite_monster_test.height = texture_tab_monster[index].height
        if (index < 25) {
            index++
        } else {
            index = 0
        }
    }, 1000)
}

function HandleHealth() {
    sprite_xp.width = texture_bar.width * currentHP / monster_tab[level].hp

    modifierHP.textContent = `${currentHP}/${monster_tab[level].hp}`
    modifierLvl.textContent = `----- LVL ${level +1} -----`
    if (currentHP < 0) {
        goldUp(monster_tab[level].gold)
        currentHP = 0
        sprite_monster_test.destroy()
        // RANDOM MODE
        // respawnMob(Math.ceil(Math.random()* 25))
        level == 26 ? level = 0 : level++
        dropItem()
        bg_speed = -8   
        setTimeout(() => {
            bg_speed = 0
            respawnMob(level)
        }, 2000)
    }
}

///////////////////////////////////////////////////////////////
const lvlUp = () =>
{
    actualLvl += lvlWin
    cmptStatsUp += 1
    if (cmptStatsUp%5 === 0)
    {
        actualDmg += dmgWin
        actualMag += magWin
        actualPower += powerWin
        cmptStatsUp = 0
    }
    lvlSpan.textContent = `${actualLvl}`
    dmgSpan.textContent = `${actualDmg}`
    magSpan.textContent = `${actualMag}`
    powerSpan.textContent = `${actualPower}%`
    }

function heticLock(){
    listRecupHetic = [heticRecup1, heticRecup2, heticRecup3, heticRecup4, heticRecup5, 
        heticRecup6, heticRecup7, heticRecup8, heticRecup9, heticRecup10]
        listItemHetic = [heticItem1, heticItem2, heticItem3, heticItem4, heticItem5, 
            heticItem6, heticItem7, heticItem8, heticItem9, heticItem10]
    for (const comptItemHetic in listRecupHetic) {
        if (listRecupHetic[comptItemHetic] === 1){
            listItemHetic[comptItemHetic].style.display = 'inline'
            listHeticLock[comptItemHetic].style.opacity = '100%'
        }
    }
    lvlSpan.textContent = `${actualLvl}`
    dmgSpan.textContent = `${actualDmg}`
    magSpan.textContent = `${actualMag}`
    powerSpan.textContent = `${actualPower}%`
}
////////////////////////////////////////////////////////////////////////////////////////////


setInterval (() =>{
    if (currentHP > 0) currentHP -= actualMag
}, 1000)



function getRandomMinMax(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }


function dropItem (){
    let randTier = Math.random()
        if (monster_tab[level-1].drop === 1){
        if (randTier < 0.50){
            const randGetItem = Math.floor(Math.random()*6)
            selectDrop(item_tab[randGetItem])
        } else if (randTier < 0.7){
            const randGetItem = Math.floor(getRandomMinMax(6, 12))
            selectDrop(item_tab[randGetItem])
        } else if  (randTier < 0.7){
            const randGetItem = Math.floor(getRandomMinMax(12, 18))
            selectDrop(item_tab[randGetItem])
        } else{
        }
    } else {
        biomeIndex++
        biome_value = biome_tab[biomeIndex]
    }
}

function selectDrop (item){
    const emptySlot = document.querySelectorAll('.inv-empty[data-slot="inventory"')
    const domItem = document.createElement('div')
    domItem.classList.add(item.classDrop)
    domItem.setAttribute('data-slot', item.data)
    domItem.setAttribute('draggable', true)
    emptySlot[0].appendChild(domItem)
    emptySlot[0].classList.remove("inv-empty")
    emptySlot[0].classList.add("inv-full")
    lastPos = emptySlot[0]
    updateDropSlot()
}

function respawnMob(index) {
    console.log(index);
    sprite_monster_test = createSprite(texture_tab_monster[index], texture_tab_monster[index].width, texture_tab_monster[index].height,0,0, bg)
    sprite_monster_test.scale.y = 0.7
    sprite_monster_test.scale.x = 0.7
    currentHP = monster_tab[level].hp
    setSpritePosition(sprite_monster_test, _w / 2, _h / 2, -0.7, 0.5)
    if (level === monster_tab.length-1) {
        sprite_monster_test.scale.x = 1.2
        sprite_monster_test.scale.y = 1.2
        console.log(level);
        
        setSpritePosition(sprite_monster_test, _w / 2, _h / 2, -0.2, 0.7)   
    }
    sprite_monster_test.interactive = true;
    sprite_monster_test.on('click', attackAnim)
}

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

///////////////////////////////////////// DRAG AND DROP FUNCTIONS

    function updateDropSlot(){
        emptiesInv = document.querySelectorAll('.inv-empty, .inv-head, .inv-hand, .inv-body, .inv-foot')
        item = document.querySelectorAll('.item1, .item2, .item3, .item4, .item5, .item6, .item7, .item8, .item9')
        for (const empty of emptiesInv){
            for (const items of item) {
                empty.addEventListener('dragover', dragOver)
                empty.addEventListener('dragenter', dragEnter)
                window.addEventListener('dragleave', dragLeave)
                empty.addEventListener('drop', dragDrop)
                items.addEventListener('dragstart', dragStart)
                items.addEventListener('dragend', dragEnd)
            }
        }
    }

function dragStart(e){
    this.className += ' hold'
    setTimeout(() => (this.className += ' invisible'), 0);
    typeItem = this.getAttribute('data-slot')
    tierItem = this.classList[0]
    itemElem = this
    this.parentNode.className = "inv-empty"
    inventoryLastPos = this.parentNode
}

function dragEnd(){
    this.className = `${tierItem}`;
}

function dragOver(){
    event.preventDefault();
}

function dragEnter(){
    event.preventDefault();
}

function dragLeave(){
    // console.log('lolilol');
}

function dragDrop(){
    // VERIFICATION ITEM DROPPABLE
    let currentSlot = this.getAttribute('data-slot')
    let lastPos = inventoryLastPos.getAttribute('data-slot')
    let headEquip = document.querySelector('.character-item :nth-child(1) > div')
    let bodyEquip = document.querySelector('.character-item :nth-child(2) > div')
    let handEquip = document.querySelector('.character-item :nth-child(3) > div')
    let footEquip = document.querySelector('.character-item :nth-child(4) > div')
    if (typeItem === currentSlot && !this.hasChildNodes()){
        this.append(itemElem)
        this.classList.remove('inv-empty')
        this.classList.add('inv-full')
    } else if (currentSlot === 'inventory'){
        if (this.hasChildNodes()){
            inventoryLastPos.append(itemElem)
            inventoryLastPos.className = "inv-full"
        } else if (this.className === 'inv-empty' && !this.hasChildNodes()){
            this.append(itemElem)
            this.classList.remove('inv-empty')
            this.classList.add('inv-full')
            inventoryLastPos.classList.remove('inv-full')
            inventoryLastPos.classList.add('inv-empty')
        }
    }
    // STATS CHANGMENT 
    if  (currentSlot === 'head' && headEquip == null){
    let headEquip = document.querySelector('.character-item :nth-child(1) > div')
    let tierItem = headEquip.classList[0]
        if(tierItem === 'item1'){
        actualDmg += boost1
        } else if (tierItem == 'item2'){
            actualDmg += boost2
        } else if (tierItem == 'item3'){
            actualDmg += boost3
        }}
        else if (currentSlot === 'body' && bodyEquip == null){
            let bodyEquip = document.querySelector('.character-item :nth-child(2) > div')
            let tierItem = bodyEquip.classList[0]
            if(tierItem == 'item1'){
            actualDmg += boost1
            } else if (tierItem == 'item2'){
                actualDmg += boost2
            } else if (tierItem == 'item3'){
                actualDmg += boost3
            }}
            else if (currentSlot === 'hand' && handEquip == null){
                let handEquip = document.querySelector('.character-item :nth-child(3) > div')
                let tierItem = handEquip.classList[0]
                if(tierItem === 'item1'){
                actualDmg += boost1
                } else if(tierItem === 'item2'){
                    actualDmg += boost2
                } else if (tierItem == 'item3'){
                    actualDmg += boost3
                } else if(tierItem === 'item4'){
                    actualMag += boostMag1
                } else if(tierItem === 'item5'){
                    actualMag += boostMag2
                } else if (tierItem == 'item6'){
                    actualMag += boostMag3
                } else if(tierItem === 'item7'){
                actualPower += boostPower1
                } else if(tierItem === 'item8'){
                    actualPower += boostPower2
                } else if (tierItem == 'item9'){
                    actualPower += boostPower3
                }}
            else if (currentSlot === 'foot' && footEquip == null){
                let footEquip = document.querySelector('.character-item :nth-child(4) > div')
                let tierItem = footEquip.classList[0]
                if(tierItem == 'item1'){
                actualDmg += boost1
                } else if (tierItem == 'item2'){
                    actualDmg += boost2
                } else if (tierItem == 'item3'){
                    actualDmg += boost3
            }}
            else if (currentSlot === 'inventory' && (lastPos === 'head' || lastPos === 'body' || lastPos === 'foot')){
                if (tierItem =="item1"){
                    actualDmg -= boost1
                } else if (tierItem === 'item2'){
                    actualDmg -= boost2
                } else if ('tierItem3'){
                    actualDmg -= boost3
                }}
                else if (currentSlot === 'inventory' && lastPos === 'hand'){
                    if (tierItem == 'item1'){
                        actualDmg -= boost1
                    } else if (tierItem =='item2'){
                        actualDmg -= boost2
                    } else if (tierItem == 'item3'){
                        actualDmg -= boost3
                    } else if (tierItem == 'item4'){
                        actualMag -= boostMag1
                    } else if (tierItem =='item5'){
                        actualMag -= boostMag2
                    } else if (tierItem == 'item6'){
                        actualMag -= boostMag3
                    } else if (tierItem == 'item7'){
                        actualPower -= boostPower1
                    } else if (tierItem =='item8'){
                        actualPower -= boostPower2
                    } else if (tierItem == 'item9'){
                        actualPower -= boostPower3
                }}
                if (currentSlot == 'OOF'){
                    itemElem.remove()
                    goldUp(5)
                }   
    // STATS SPAN ACTUALISATION
    lvlSpan.textContent = `${actualLvl}`
    dmgSpan.textContent = `${actualDmg}`
    magSpan.textContent = `${actualMag}`
    powerSpan.textContent = `${actualPower}%`
}