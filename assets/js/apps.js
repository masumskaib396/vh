particlesJS("particles-js-one", {
	"particles": {
		"number": {
			"value": 100,
			"density": {
				"enable": true,
				"value_area": 3000
			}
		},
		"color": {
			"value": "#ffffff"
		},
		"shape": {
			"type": "image",
			"stroke": {
				"width": 0,
				"color": "#000000"
			},
			"polygon": {
				"nb_sides": 5
			},
			"image": {
				"src": "assets/img/Reward.png",
				"width": 80,
				"height": 80
			}
		},
		"opacity": {
			"value": .5,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": 0.3,
				"sync": false
			}
		},
		"size": {
			"value": 40,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 40,
				"size_min": 0.1,
				"sync": false
			}
		},
		"line_linked": {
			"enable": false,
			"distance": 500,
			"color": "#ffffff",
			"opacity": 1,
			"width": 1
		},
		"move": {
			"enable": true,
			"speed": 1,
			"direction": "none",
			"random": false,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 1000,
				"rotateY": 1200
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": false,
				"mode": "repulse"
			},
			"onclick": {
				"enable": false,
				"mode": "push"
			},
			"resize": true
		},
		"modes": {
			"grab": {
				"distance": 400,
				"line_linked": {
					"opacity": 1
				}
			},
			"bubble": {
				"distance": 600,
				"size": 20,
				"duration": 2,
				"opacity": 1,
				"speed": 4
			},
			"repulse": {
				"distance": 200,
				"duration": 0.4
			},
			"push": {
				"particles_nb": 4
			},
			"remove": {
				"particles_nb": 2
			}
		}
	},
	"retina_detect": true
});
var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
	stats.begin();
	stats.end();
	if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
		count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
	}
	requestAnimationFrame(update);
};
requestAnimationFrame(update);;