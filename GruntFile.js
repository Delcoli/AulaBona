module.exports = function (grunt) {

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
				src: ['html/dist/bootstrap/css/bootstrap.css', 'html/dist/bootstrap/css/bootstrap-grid.css'],
				dest: 'html/css/style.css'
			},
			options: {
				separator: ';'
			}
		},

		uglify: {
			my_target: {
				options: {
				},
				files: {
					'html/js/jquery.min.js': ['html/dist/jquery/jquery.js'],
				},
			},
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
		},
		adjust_sourcemaps: {
			options: {
				process: function (json, sourceMapGenerator, sourceMapConsumer, sourceMapPackage) {
					return json || sourceMapGenerator;
				}
			},
			your_target: {
				files: [{
					expand: true,
					src: 'html/dist/jquery/*.*.map',
					dest: 'html/js/map'
				}]
			}
		},
		auto_install: {
			local: {},
			subdir: {
				options: {
					cwd: 'subdir',
					stdout: true,
					stderr: true,
					failOnError: true,
					npm: '--production'
				}
			}
		},
	});


	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-adjust-sourcemaps');
	grunt.loadNpmTasks('grunt-auto-install');

	grunt.registerTask('default', ['bower','concat','copy','cssmin','uglify','adjust_sourcemaps','auto_install']);
}
