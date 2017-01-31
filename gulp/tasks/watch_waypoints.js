var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

/* DEFINITON OF watch_wp TASK */
gulp.task('watch_wp', function(){

/* INITALIZE browserSync*/
browserSync.init({
notify: false,
server: {
baseDir: "app"
}
});

/*WATCH index.html CHANGES &RELOAD page*/
watch('./app/index.html', function(){
browserSync.reload();	
});

/* WATCH ALL CSS CHANGES AND INJECT WITH HOTLOAD*/
watch('./app/temp/**/*.css', function(){
gulp.start('cssInject_wp');	
});

/* WATCH ALL JavaScript CHANGES AND RELOAD*/
watch('./app/temp/waypoints.js', function(){
gulp.start('scriptsRefresh_wp');
browserSync.reload();
});

});

/*INJECT styles.css AFTER styles.js RAN*/
gulp.task('cssInject_wp', function(){
return gulp.src('./app/temp/waypoints.css')
.pipe(browserSync.stream());
})

/*RELOAD PAGE AFTER scripts.js RAN*/
gulp.task('scriptsRefresh_wp', ['scripts'], function(){
browserSync.reload();
});