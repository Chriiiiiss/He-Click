class monster {
    constructor(id, name, img_url, hp, cd) {
        this.id = id,
        this.name = name,
        this.img_url = img_url,
        this.hp = hp,
        this.cd = cd
    }
}

let monster_tab = [
    new monster(0, "tiny_shit", "tiny_monster.png", 5, 0),
    new monster(1, "pirate", "monstre_pirate.png", 10, 0),
    new monster(2, "croco", "monstre_croco.png", 15, 0),
    new monster(3, "tchoutchou", "monstre_zombie.png", 20, 0),
    new monster(4, "singe", "monstre_singe.png", 25, 0),
    new monster(5, "serpent", "monstre_serpent.png", 50, 60),
    new monster(6, "machin", "monstre_machin.png", 50, 0),
    new monster(7, "bidule", "monstre_bidule.png", 65, 0),
    new monster(8, "truc", "monstre_truc.png", 70, 0),
    new monster(9, "muche", "monstre_muche.png", 75, 0),
    new monster(10, "boche", "monstre_boche.png", 100, 60),
    new monster(11, "sorciere", "monstre_sorciere.png", 110, 0),
    new monster(12, "momie", "monstre_momie.png", 110, 0),
    new monster(13, "zombie", "monstre_zombie.png", 125, 0),
    new monster(14, "garde", "monstre_garde.png", 130, 0),
    new monster(15, "faucheur", "monstre_faucheur.png", 200, 60),
    new monster(16, "loup", "monstre_loup.png", 210, 0),
    new monster(17, "callas", "monstre_callas.png", 230, 0),
    new monster(18, "morvus", "monstre_morvus.png", 250, 0),
    new monster(19, "screed", "monstre_screed.png", 280, 0),
    new monster(20, "gandalf", "monstre_gandalf.png", 400, 60),
    new monster(21, "gargouille", "monstre_gargouille.png", 400, 0),
    new monster(22, "litlevil", "monstre_litlevil.png", 450, 0),
    new monster(23, "gasper", "monstre_gasper.png", 500, 0),
    new monster(24, "dracula", "monstre_dracula.png", 550, 0),
    new monster(25, "demon", "monstre_demon.png", 1000, 60)
]

// INIT GLOABAL VAR RENDER

let _w = window.innerWidth
let _h = window.innerHeight

// INIT DOM GLOBAL VAR

const bg_view = document.querySelector(".game-bg")
const health_nbr = document.querySelector(".health")

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
let biome_value = "w"
let bg_x = 0 
let bg_speed = 0
let xp_max
let bg = new PIXI.Application ({
    resizeTo: window,
    view: bg_view
})
let xp_char = 4
let id_game = 4
let attack = 5
let currentHP
let level = 0

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

// LOAD HUD FILESd

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
    currentHP = monster_tab[id_game].hp
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
    sprite_xp.width = (xp_max / 5) * calcModuloProgress(xp_char, 5)
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
    currentHP -= attack
    // bg.ticker.stop()
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
    health_nbr.textContent = currentHP
    if (currentHP < 0) {
        currentHP = 0
        sprite_monster_test.destroy()
        // RANDOM MODE
        // respawnMob(Math.ceil(Math.random()* 25))
        level >= 25 ? level - 25 : level++
        respawnMob(level)
    }
}

function respawnMob(index) {
    sprite_monster_test = createSprite(texture_tab_monster[index], texture_tab_monster[index].width, texture_tab_monster[index].height,0,0, bg)
    sprite_monster_test.scale.y = 0.7
    sprite_monster_test.scale.x = 0.7
    currentHP = monster_tab[index].hp
    setSpritePosition(sprite_monster_test, _w / 2, _h / 2, -0.7, 0.5)
    sprite_monster_test.interactive = true;
    sprite_monster_test.on('click', attackAnim)
    console.log(level);
    
}