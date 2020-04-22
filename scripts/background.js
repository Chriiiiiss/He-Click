
// INIT GLOABAL VAR RENDER

let _w = window.innerWidth
let _h = window.innerHeight

// INIT DOM GLOBAL VAR

const bg_view = document.querySelector(".game-bg")

// INIT GLOBAL VAR PIXI

const background_loader = new PIXI.Loader("../images/assets")
const hud = new PIXI.Loader("../images/assets/hud")

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

// INIT SPRITE GLOBAL VAR

let sprite_hud
let sprite_front
let sprite_middle
let sprite_back
let sprite_xp
let sprite_xp_position_x
let sprite_ground

// INIT GLOBAL VAR GAMELOOP

let progress_bar_width
let biome_value = "w"
let bg_x = 0 
let bg_speed = -1
let xp_max
let bg = new PIXI.Application ({
    resizeTo: window,
    view: bg_view
})
let xp = 0

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

// LOAD HUD FILES

hud.add("progress_bar", "progress_bar.png")
hud.add("progress_bar_xp", "xp_bar.png")
hud.load()
loadFiles(hud)

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
    loader_files.onComplete.add((loader,resource) => {
        console.log(`LOADING COMPLETED`)
        loadBaseSprite(background_loader, hud)
        bg.ticker.start()

    })

    loader_files.load()
    return loader_files
}


// FUNCTION THAT LOAD BASE SPRITE FROM FILES

function loadBaseSprite(bg_loader, hud_loader) {

    // HUD LOADER BASE SPRITE

    texture_progress_bar = hud_loader.resources.progress_bar.texture
    texture_bar = hud_loader.resources.progress_bar_xp.texture

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
    sprite_xp = createSprite(texture_bar, xp_max, texture_bar.height, 0, 0, bg)
    
    // MANAGE SPRITE
    
    setSpritePosition(sprite_hud, window.innerWidth / 2, sprite_hud.height, 0.5, 0.5)
    sprite_xp_position_x = sprite_hud.position.x - sprite_hud.width / 2 + 20
    setSpritePosition(sprite_xp, sprite_xp_position_x, sprite_hud.height - 5, 0, 0.5)

    // MANAGE VAR
    sprite_xp.width = xp_max/5 * calcModuloProgress(xp, 5)
    xp_max = texture_bar.width
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
    changeBg()
    bgScroll()
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