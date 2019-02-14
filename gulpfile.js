const gulp = require('gulp');
const del = require('del');
const exec = require('child_process').execFileSync;

function compileProject(name) {
    return function (d) {
        try {
            exec("node", ["./node_modules/typescript/bin/tsc", "-p", name]);
        } catch (e) {
            console.log(e.output.toString());
        }
        d();
    }
}

gulp.task('clean', () => {
    del("lib/*");
});

gulp.task('core', compileProject("core"));
gulp.task('animals', compileProject("animals"));
gulp.task('zoo', compileProject("zoo"));
