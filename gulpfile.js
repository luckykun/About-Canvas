var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
var livereload = require('gulp-livereload');

//server
gulp.task('connect', function() {
    connect.server({
        root: '',
        port: 8899,
        livereload: true
        // middleware: function(connect, opt) {
        //     return [
        //         require('./server/route')()
        //     ]
        // }
    });
});

// auto open
gulp.task('open', function() {
    gulp.src(__filename)
        .pipe(open({
            uri: 'http://localhost:8899'
        }));
});


// less ==> css
// gulp.task('less', function() {
//     return gulp.src('./src/**/*.less')
//         .pipe(less())
//         .pipe(gulp.dest('./src'));
// });
//css压缩
// gulp.task('cssmin', ['less'], function() {
//     return gulp.src('./src/style/animation.css')
//         .pipe(cssmin())
//         .pipe(concat('animation.min.css'))
//         .pipe(gulp.dest('./build/style'));
// });
// JS压缩
// gulp.task('uglify', function() {
//     return gulp.src('./src/js/ect.js')
//         .pipe(uglify())
//         .pipe(concat('ect.min.js'))
//         .pipe(gulp.dest('./build/js'));
// });



//监听文件，实时刷新,  less ==> css文件
// gulp.task('watch', function () {
//     livereload.listen();
//     gulp.watch('./src/**/*.*', function() {
//         livereload.reload();
//     });
// });


//图片压缩
// gulp.task('images', function() {
//     gulp.src('./src/image/**/*')
//         .pipe(imagemin({
//             progressive: false
//         }))
//         .pipe(gulp.dest('./build/image'));
// });


//清除
// gulp.task('clean', function() {
//     del.sync(['./build'], {
//         force: true
//     }); //同步执行
// });


// gulp.task('copy', function() {
//     gulp.src(['./src/js/yd-config.js'])
//         .pipe(gulp.dest('./build'));
// });

gulp.task('default', ['connect', 'open']);
