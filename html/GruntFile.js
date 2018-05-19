module.exports = function(grunt) {

	grunt.initConfig({
		copy: {
			bootstrap: {
				expand: true,
				cwd: 'bower_components/bootstrap/dist/',
				src: '*',
				dest: 'html/dist/bootstrap'
			},
			jquery: {
				expand: true,
				cwd: 'bower_components/jquery/dist/',
				src: '*',
				dest: 'html/dist/jquery'
			}
		},
		sass: {

		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-sass');


	grunt.registerTask('default', ['copy', 'sass']);

}
