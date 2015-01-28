module.exports = function(grunt) {
	//Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),		
		uglify: {
			options: {
				mangle: {
					except: ['alertjs']
				},
				banner: '/*!\n * <%= pkg.name %> v<%= pkg.version %>, <%= grunt.template.today("dd.mm.yyyy") %>\n * <%= pkg.description %>\n * By <%= pkg.author %> (<%= pkg.homepage %>, @ankitpokhrel)\n * Licenced under <%= pkg.license %>\n */\n'
			},
			build: {
				files: {
					'dist/alert.min.js': ['lib/<%= pkg.name %>']
				}
			} 
		},
		jshint: {
			build: ['Gruntfile.js', 'lib/<%= pkg.name %>', 'tests/AlertSpec.js']
		},
		cssmin: {			
			build: {
				files: {
					'dist/alert.core.min.css': ['theme/alert.core.css'],
					'dist/alert.default.min.css': ['theme/alert.default.css'],
					'dist/alert.lite.min.css': ['theme/alert.lite.css']
				}
			} 
		},
		copy: {
			main: {
				expand: true,
				flatten: true,
				src: ['lib/*.js', 'theme/*.css'],
				dest: 'dist/src/',
				filter: 'isFile'
			}
		}
	});

	//Load required plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');

	//Register tasks
	grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'copy']);
};
