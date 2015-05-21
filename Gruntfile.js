module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'minimal-ui.css' : ['sass/minimal-ui.scss'],
          'custom/custom.css': 'custom/custom.scss'
        }
      }
    },

    watch: {
      css: {
        files: ['sass/*.scss', 'custom/*.scss'],
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
  grunt.registerTask('min',['cssmin']);


};