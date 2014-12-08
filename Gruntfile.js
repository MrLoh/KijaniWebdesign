module.exports = function (grunt) {

  grunt.initConfig({

    autoprefixer: {
      options: {
        browsers: ['> 1%']
      },
      allcss: {
        src: 'css/*.css'
      }
    },

    watch: {
      postcss: {
        files: ['css/*.css'],
        tasks: ['autoprefixer']
      }
    }

  });

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');

};
