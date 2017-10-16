module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

      // Uglify
      // Merge and tidy up multiple js files
      uglify: {
        js : {
          src : '_build/_js/*.js',
          dest : 'assets/js/john-graham.min.js'
        }
      },

      // Compass
      // Compiles SASS
      compass: {
          dist: {
          options: {
              sassDir: '_build/_sass',
              cssDir: '_build/_css',
              specify: '_build/_sass/*.scss',
              environment: 'production',
              outputStyle: 'compressed'
          }
        }
      },

      // Watch
      // Watches for changes and re-runs functions again
      watch: {
            css: {
                files: '_build/_sass/*.scss',
                tasks: ['compass', 'autoprefixer'],
                options: {
                    livereload: true
                }
            },
            js:  {
              files: '_build/_js/*.js',
              tasks: [ 'uglify' ]
            }
        },

      // Autoprefixer
      // Adds vendor prefixes to final css output
      autoprefixer: {
          options: {
              browsers: ['last 3 versions', 'ie 9']
          },
          single_file: {
                src: '_build/_css/main.css',
                dest: 'assets/css/john-graham.css'
          }
      },

      // ImageMin
      // Compresses images
      imagemin: {
          dynamic: {
            options: {
              optimizationLevel: 3, // For .png
              progressive: true // For .jpg
            },
            files: [{
              expand: true,                  // Enable dynamic expansion
              cwd: 'assets/images/',            // cwd is 'current working directory'
              src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
              dest: 'assets/images/'            // Destination path prefix
            }]
          }
        }

  });

  // Load the plugins that provides the above tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-newer');

  // Default task(s) when running 'grunt'
  grunt.registerTask('default', ['uglify', 'compass', 'autoprefixer', 'watch']);

};
