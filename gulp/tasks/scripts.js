var gulp = require('gulp'),
webpack = require('webpack');

/*RUN webpack CONFIGURED BY webpack.config.js, AKA COMPILE ALL js FILES INTO ONE*/
gulp.task('scripts', ['modernizr'], function(callback){
webpack(require('../../webpack.config.js'), function(err, stats){
	/*ERROR HANDLING*/
	if(err){
		console.log(err.toString());
	}
	/*STATISTICS HANDLING*/
	console.log(stats.toString());
	callback();
});

})