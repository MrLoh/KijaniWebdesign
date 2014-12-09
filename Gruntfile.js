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

  cssmin: {
    my_target: {
      files: [{
        expand: true,
        cwd: 'css/',
        src: ['*.css', '!*.min.css'],
        dest: 'css/',
        ext: '.min.css'
      }]
    }
  },
  
  uglify: {
    my_target: {
      files: [{
        expand: true,
        cwd: 'js/',
        src: ['*.js', '!*.min.js'],
        dest: 'js/',
        ext: '.min.js'
      }]
    }
  },

    watch: {
      postcss: {
        files: ['css/*.css'],
        tasks: ['autoprefixer', 'cssmin']
      },
      postjs: {
        files: ['js/*.js'],
        tasks: ['uglify']
      }
    }

  });

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

};
