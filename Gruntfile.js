module.exports = function(grunt) {
    // Configuração do projeto
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      
      // Configuração da tarefa de compilação LESS
      less: {
        development: {
          files: {
            'css/style.css': 'less/style.less' // destino: fonte
          }
        }
      },
  
      // Configuração da tarefa de compressão de JavaScript
      uglify: {
        build: {
          files: {
            'js/script.min.js': ['js/script.js'] // destino: fonte
          }
        }
      }
    });
  
    // Carregar os plugins que providenciam as tarefas "less" e "uglify"
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    // Definir as tarefas padrão que serão executadas quando digitar "grunt" no terminal
    grunt.registerTask('default', ['less', 'uglify']);
  };
  