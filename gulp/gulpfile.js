const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixe');

function compilaSass() {
  return gulp.src('css/scss/*.scss') /* vai returnar todos arquivos scss dentro da pasta especificada */
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('css/'))
 
}

gulp.task('default', compilaSass) 