module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },

    watch: {
      css: {
        files: './scss/**/*.scss',
        tasks: ['compass'],
        options: {
          livereload: true
        },
      },
      html: {
        files: './*.html',
        options: {
            livereload: true
        }
      },
      js: {
        files: './js/*.js',
        options: {
            livereload: true
        }
      }
    },

    connect: {
      all: {
        options:{
          port: 9000,
          base: './'
        }
      }
    }


    

  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task(s).
  grunt.registerTask('default', ['compass', 'connect', 'watch']);

};