import gulp from 'gulp'
import browserSync from 'browser-sync'
import mjml from 'gulp-mjml'

gulp.task('browsersync', ['build'], function() {
    return browserSync.init({
        server: {
            baseDir: "./dist"
        },
        directory: "dist"
    })
})

gulp.task('mjml', () => {
    return gulp
        .src('./src/**/*.mjml')
        .pipe(mjml())
        .pipe(gulp.dest('./dist'))
})

gulp.task('build', ['mjml'])

gulp.task('mjml-watch', ['mjml'], function (done) {
    browserSync.reload()
    done()
});

gulp.task('watch', ['browsersync'], function() {
    return gulp.watch('src/**/*.mjml', ['mjml-watch'])
});

gulp.task('default', ['watch']);