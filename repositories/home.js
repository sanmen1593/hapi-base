var dbhelper = require('../helpers/dbhelper');

module.exports = {
  findAll: function(){
    var params = {
      pid_course: 3738,
      pdt_earned: null
    };

    return dbhelper.execute(
      "pkg_wax_course_publication.search",
      params
    );
  }
}
