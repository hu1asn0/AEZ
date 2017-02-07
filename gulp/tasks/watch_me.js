var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

/* DEFINITON OF watch TASK */
gulp.task('watch_me', function(){

/* INITALIZE browserSync*/
browserSync.init({
notify: false,
server: {
baseDir: "app"
}
});

/*WATCH index.html CHANGES &RELOAD page*/
watch('./app/*.html', function(){
browserSync.reload();	
});

/* WATCH ALL CSS CHANGES AND INJECT WITH HOTLOAD*/
watch('./app/styles/**/*.css', function(){
gulp.start('cssInject');	
});

/* WATCH ALL JavaScript CHANGES AND RELOAD*/
watch('./app/scripts/**/*.js', function(){
gulp.start('scriptsRefresh');
browserSync.reload();
});

});

/*INJECT styles.css AFTER styles.js RAN*/
gulp.task('cssInject', function(){
return gulp.src('./app/styles/modules/menu_1.css')
.pipe(browserSync.stream());

});

/* RELOAD PAGE AFTER scripts.js RAN*/
gulp.task('scriptsRefresh', function(){
browserSync.reload();
})