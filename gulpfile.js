var gulp = require('gulp');
var git = require('gulp-git');
var release = require('gulp-github-release');

// Run git add with options


gulp.task('add', function(){
    git.exec({args : 'add .'}, function (err, stdout) {
        if (err) throw err;
    });
});

gulp.task('commit', function(){
    git.exec({args : 'commit -m "sdfsdfs"'}, function (err, stdout) {
        if (err) throw err;
    });
});


// Tag the repo with a version
gulp.task('tag', function(){
    git.tag('v1.1.1', 'Version message', function (err) {
        if (err) throw err;
    });
});


// Tag the repo with a version
gulp.task('push', function(){
    git.push('origin', 'master', function (err) {
        if (err) throw err;
    });
});
