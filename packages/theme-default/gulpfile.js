'use strict'

const gulp = require('gulp')
const postcss = require('gulp-postcss')
const cssmin = require('gulp-cssmin')
const sass = require('gulp-sass')
const salad = require('postcss-salad')(require('./salad.config.json'))

gulp.task('compile', function () {
  return gulp
    .src('./src/*.scss')
    .pipe(sass.sync())
    .pipe(postcss([salad]))
    .pipe(cssmin())
    .pipe(gulp.dest('./lib'))
})

gulp.task('copyfont', function () {
  return gulp
    .src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest('./lib/fonts'))
})

gulp.task('build', ['compile', 'copyfont'])
gulp.task('watch', function () {
  gulp.watch('./src/*.scss', ['compile'])
})
