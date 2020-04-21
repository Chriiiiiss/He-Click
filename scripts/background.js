let _w = window.innerWidth
let _h = window.innerHeight
const bg_view = document.querySelector(".game-bg")
const background_loader = new PIXI.Loader("../images/assets")
const hud = new PIXI.Loader("../images/assets/hud")
let sprite_hud
let isFilesLoaded = false
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
let sprite_front
let sprite_middle
let sprite_back
let sprite_ground
let biome_value = "f"
let bg_x = 0 
let bg_speed = -1
let bg = new PIXI.Application ({
    resizeTo: window,
    view: bg_view
})

window.addEventListener('keyup', (e) => {
    if (e.code === "Space" && bg_x != 0) {
        bg_speed = 0
    } 
    else if (e.code === "ArrowLeft") bg_speed += 1
    else if (e.code === "ArrowRight") bg_speed -= 1
    // console.log(e.code);

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
        default:
            break;
    }
})

loadBgFiles(background_loader, ["forest_bg", "mountain_bg", "ocean_bg"], ["f", "m", "o"])
hud.add("progress_bar", "progress_bar.png")
hud.load()

loadFiles(hud)
bg.ticker.add(gameLoop)
bg.ticker.stop()

// FUNCTION THAT WILL LOAD BACKGROUND FILES
function loadBgFiles(loader, files, suffix) {
    loader.add(`ground_${suffix[0]}`, `${files[0]}/ground.png`)
    loader.add(`front_${suffix[0]}`, `${files[0]}/front.png`)
    loader.add(`middle_${suffix[0]}`, `${files[0]}/middle.png`)
    loader.add(`back_${suffix[0]}`, `${files[0]}/back.png`)
    loader.add(`front_${suffix[1]}`, `${files[1]}/front.png`)
    loader.add(`middle_${suffix[1]}`, `${files[1]}/middle.png`)
    loader.add(`back_${suffix[1]}`, `${files[1]}/back.png`)
    loader.add(`front_${suffix[2]}`, `${files[2]}/front.png`)
    loader.add(`middle_${suffix[2]}`, `${files[2]}/middle.png`)
    loader.add(`back_${suffix[2]}`, `${files[2]}/back.png`)

    loadFiles(loader)
}

// LOAD HUD FILES


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
    let texture_progress_bar = hud_loader.resources.progress_bar.texture
    texture_ground_f = bg_loader.resources.ground_f.texture
    texture_front_f = bg_loader.resources.front_f.texture
    texture_back_f = bg_loader.resources.back_f.texture
    texture_middle_f = bg_loader.resources.middle_f.texture
    texture_front_m = bg_loader.resources.front_m.texture
    texture_back_m = bg_loader.resources.back_m.texture
    texture_middle_m = bg_loader.resources.middle_m.texture
    texture_front_o = bg_loader.resources.front_o.texture
    texture_back_o = bg_loader.resources.back_o.texture
    texture_middle_o = bg_loader.resources.middle_o.texture
    sprite_back = createSprite(texture_back_f, 3836, 500, -60, -80)
    sprite_middle = createSprite(texture_middle_f, 3836, 500, -60, -80)
    sprite_front = createSprite(texture_front_f, 3836, 375, -15, 70)
    sprite_ground = createSprite(texture_ground_f, _w, 1080, 0, -285)
    sprite_hud = createSprite(texture_progress_bar, 743, 94, 0, 0)
    setSpritePosition(sprite_hud, window.innerWidth / 2, sprite_hud.height)
}

function setSpritePosition(sprite, x, y) {
    sprite.anchor.x = 0.5
    sprite.anchor.y = 0.5
    sprite.position.x = x
    sprite.position.y = y
}
// FUNCTION THAT CREATES BACKGROUND FROM TEXTURE
// IT TAKES AN WIDTH AND A HEIGHT PARAMETER
// AND ALSO A POSITION X AND Y
function createSprite(texture, width, height, x, y, container) {    
    let background = new PIXI.TilingSprite(texture, width, height)
    background.position.set(x,y)
    container.stage.addChild(background)

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
            sprite_front.texture = texture_front_m
            sprite_middle.texture = texture_middle_m
            sprite_back.texture = texture_back_m   
            break
        case "o":
            sprite_front.texture = texture_front_o
            sprite_middle.texture = texture_middle_o
            sprite_back.texture = texture_back_o  
            break;
        default:
            sprite_front.texture = texture_front_f
            sprite_middle.texture = texture_middle_f
            sprite_back.texture = texture_back_f 
            break;
    }
}