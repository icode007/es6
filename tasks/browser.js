import gulp from 'gulp';
import gulpif from 'gulp-if';
import args from './util/args';
import gutil from 'gulp-util';

gulp.task('browser', (cb)=>{
  if(!args.watch) return cb();
  gulp.watch('app/**/*.js', ['scripts']);
  gulp.watch('app/**/*.ejs', ['pages']);
  gulp.watch('app/**/*.css', ['css']);
})