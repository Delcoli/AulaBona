module.exports = function(grunt) {

	grunt.initConfig({
		bower: {
			install: {
			  options: {
				copy: false,
				targetDir: './lib',
				layout: 'byType',
				install: true,
				verbose: false,
				prune: false,
				cleanTargetDir: false,
				cleanBowerDir: false,
				bowerOptions: {}
			  }
			}
		},

		copy: {
			bootstrap: {
				expand: true,
				cwd: 'bower_components/bootstrap/dist/',
				src: '*/*',
				dest: 'html/dist/bootstrap'
			},
			jquery: {
				expand: true,
				cwd: 'bower_components/jquery/dist/',
				src: '*',
				dest: 'html/dist/jquery'
			},
			css: {
				expand: true,
				cwd: 'bower_components/bootstrap/dist/',
				src: '*/css/bootstrap.css',
				dest: 'html/css'
			}
		},
		
		concat: {
			  dist: {
				src: ['html/dist/bootstrap/css/bootstrap.css','html/dist/bootstrap/css/bootstrap-grid.css'],
				dest: 'html/css/style.css'
			  },
			  options: {
				separator: ';'
			  }
		},

		uglify: {
			options: {
			  mangle: false
			},
			my_target: {
			  files: {
				'html/css/style.min.css': 'html/css/style.css'
			  }
			}
		},
		compass: { 
			dist: {        
			  options: {            
				sassDir: 'sass',
				cssDir: 'html/css'			  
			}
			},
			dev: {
			  options: {
				sassDir: 'sass',
				cssDir: 'html/css'
			  }
			}
		},

		cssmin: {
			target: {
			  files: [{
				expand: true,
				cwd: 'html/css',
				src: ['*.css', '!*.min.css'],
				dest: 'html/css',
				ext: '.min.css'
			  }]
			}
		  }
	});


	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['bower','concat','copy','cssmin','uglify']);

}
