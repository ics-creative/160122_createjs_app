'use strict';
 
var gulp = require('gulp');

// browser-syncのプラグインの読み込み
var browserSync = require("browser-sync");
//  sassプラグインの読み込み
var sass = require('gulp-sass');

gulp.task("watch", function () {

  gulp.watch(["index.html"], ["copy-index"]);
  gulp.watch(["libs/**/*.*"], ["copy-lib"]);
  gulp.watch(["styles/**/*.*"], ["build-scss"]);
});

/** index.htmlをコピーするだけのタスク */
gulp.task("copy-index",function (){
  gulp.src("index.html")
    .pipe(gulp.dest("dist"));
});

/** lib以下ををコピーするだけのタスク */
gulp.task("copy-lib",function (){
  gulp.src("libs/**/*.*")
    .pipe(gulp.dest("dist/libs/"));
});

/** sass */
gulp.task('build-scss', function () {
  // scssファイルの配置ディレクトリ及びマッチパターン
  gulp.src('styles/**/*.scss')
      // scssファイルの変換処理と、エラーが起こった場合のログ書き出し
      .pipe(sass().on('error', sass.logError))
      // cssを書き出すディレクトリの指定
      .pipe(gulp.dest('dist/css'));
});


/** */
gulp.task("sync-browser", function () {
  browserSync({
    server: {
      baseDir: "./",
    },
    startPath:"dist/index.html"
  });

  // distフォルダ以下のファイルを監視
  gulp.watch("dist/**/*.*", function () {
    // ブラウザのリロード
    browserSync.reload();
  });
});

/** */
gulp.task("sync", ["watch","sync-browser"]);