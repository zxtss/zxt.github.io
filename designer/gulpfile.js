var gulp = require('gulp');
var gutil = require('gulp-util');
//var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

var rename = require('gulp-rename');
//var sh = require('shelljs');
var uglify = require('gulp-uglify');
//var templateCache = require('gulp-angular-templatecache');

//合并js
gulp.task('libs',function(){
    gulp.src('./js/visor.core.js')        
        .pipe(gulp.dest("./dist/package"))  //合并后文件放入目标文件夹
        .pipe(uglify())                   //混淆文件
        .pipe(rename("visor.core.min.js"))    //重命名
        .pipe(gulp.dest('./dist'))       //将混淆后文件放入目标文件夹
})

gulp.task('default',function(){
	 gulp.src('./js/visor.core.js')   
	    .pipe(gulp.dest('./dist'))     
        .pipe(uglify())                   //混淆文件
        .pipe(rename("visor.core.min.js"))    //重命名
        .pipe(gulp.dest('./dist'))       //将混淆后文件放入目标文件夹
})