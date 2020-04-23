function play(idPlayer, control) {
    const player = document.querySelector('#' + idPlayer);
    
        player.play();
}

function resume(idPlayer) {
    const player = document.querySelector('#' + idPlayer);
	
    player.pause();
}