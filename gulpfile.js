var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel');

// gulp.task('babel', function() {
//     gulp.src('js/*.js')
//         .pipe(babel({
//             presets: ['env']
//         }))
//         .pipe(gulp.dest('dist'));
// });

// gulp.task('minify', function () {
//     gulp.src('dist/*.js')
//         .pipe(uglify())
//         .pipe(gulp.dest('build'));
// });

// gulp.task('concat', function() {
//     gulp.src('build/*.js')
//         .pipe(concat('dist.js'))
//         .pipe(gulp.dest('./'));
// });

gulp.task('default', function() {
    gulp.src('js/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(concat('dist.js'))
        .pipe(gulp.dest('./'));
});