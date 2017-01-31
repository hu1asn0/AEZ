var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename'),
del = require('del'),
svg2png = require ('gulp-svg2png');

var config={
	shape: { spacing: {	padding: 1	}},
	mode: {
		css: {
		variables: {
		replaceSvgWithPng: function(){
			return function(sprite, render){return render(sprite).split('.svg').join('.png');}}
									 },
		sprite: 'sprite.svg',
		render: {	css:{ template: './gulp/templates/sprite.css'}	}	
		}
	}
}

/* DELETE DIRECTORIES BEFORE SPRITE CREATION*/
gulp.task('beginClean', function(){
return del(['./app/temp/sprite', './app/assets/images/sprites']);

})
/* MERGE ALL SVG FILE FROM ./app/assets/images/icons/  BY config INTO ./app/temp/sprite */
gulp.task('createSprite',['beginClean'], function()
{
return gulp.src('./app/assets/images/icons/**/*.svg')
	.pipe(svgSprite(config))
	.pipe(gulp.dest('./app/temp/sprite'));
});
//Generate PNG for old browser support
gulp.task('createPngCopy',['createSprite'], function(){
return gulp.src('./app/temp/sprite/css/*.svg')
	.pipe(svg2png())
	.pipe(gulp.dest('./app/temp/sprite/css'));
});

/*COPY ALL !SVG! and !PNG! FILE FROM ./app/temp/sprite/css/ TO ./app/assets/images/sprites/ */
gulp.task('copySpriteGraphic', ['createSprite', 'createPngCopy'], function(){
return gulp.src('./app/temp/sprite/css/**/*.{svg,png}')
	.pipe(gulp.dest('./app/assets/images/sprites/'));
});

/* COPY and RENAME ALL !CSS! FILE FROM ./app/temp/sprite/css/ TO ./app/assets/styles/modules UNDER FILE NAME _sprite.css*/ 
gulp.task('copySpriteCSS', ['createSprite'], function(){
return gulp.src('./app/temp/sprite/css/*.css')
	.pipe(rename('_sprite.css'))
	.pipe(gulp.dest('./app/assets/styles/modules'));
});

/* DELETE ALL FILES AFTER MERGE AND COPY */
gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function(){
return del(['./app/temp/sprite']);
})

gulp.task('icons', ['beginClean', 'createSprite', 'createPngCopy', 'copySpriteGraphic', 'copySpriteCSS', 'endClean']);