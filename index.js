var semver = require('semver')

function findSemver(semverStr, versions, options) {
    options = options || {}
    if(!options.isSorted) {
        versions = versions.filter(x => semver.valid(x)).sort(semver.rcompare);
    }
    for(var i = 0; i < versions.length; i++) {
        if(semver.satisfies(versions[i], semverStr)) {
            return versions[i]
        }
    }
    return options.defaultVersion || null
}

module.exports = findSemver
