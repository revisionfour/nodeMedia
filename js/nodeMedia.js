// nodeMedia.js
var player = document.getElementById('mediaPlayer');


var Main = {
	init:function(){
		// player.src = "http://631b97b9d9ef7dc1f42d-870e834b13cbfa78e888d3ce02482563.r87.cf1.rackcdn.com/07%20-%20Stay%20Crunchy.mp3";
		// player.play();
		$('#playSong').on('click',function(){
			player.src = $('#songLink').val();
			// player.play();
			// $('#currentTime').html(player.seekable.start());

			player.addEventListener('loadedmetadata',function(_event){
				$('#currentTime').html(player.currentTime);

				$('#remainingTime').html(player.seekable.end(0));

				player.addEventListener('timeupdate',function(_event){
					$('#currentTime').html(player.currentTime);
				});

			});

			

			// var buffer = player.buffered;

			
		});


		$('#playButton').on('click',function(){
			var controller = $('#playButton');

			if(controller.text() == 'Play'){
				controller.text('Pause');
				player.play();
			}
			else{
				controller.text('Play');
				player.pause();
			}
		}); 

	},
	resize:function(){
		Win.init();
	}
};

Main.init();

$(window).on('resize',function(){
	Main.resize();
});




