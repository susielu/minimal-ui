module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'minimal-ui.css' : ['sass/minimal-ui.scss']
        }
      }
    },

    watch: {
      css: {
        files: ['sass/*.scss'],
        tasks: ['sass', 'cssmin']
      }
    },

    cssmin : {
      minify: {
        files:[{
          expand: true,
          cwd: './',
          src: ['minimal-ui.css'],
          dest: '.',
          ext: '.min.css'
        }]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default',['watch']);
};