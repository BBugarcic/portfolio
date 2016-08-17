// loadWork
var worksObj = [
  {
    workTitle: "Tribute Page",
    languages: "html5 css3",
    description: "Tribute page deducated to Nikola Tesla's work and life",
    url: "http://bbugarcic.github.io/tributePage/"
  },
  {
    workTitle: "Pomodoro Clock",
    languages: "html5 css3 JS jQuery",
    description: "Timer based on Pomodoro time managment model.",
    url: "http://bbugarcic.github.io/pomodoroClock/"
  },
  {
    workTitle: "Bike Berlin",
    languages: "Ruby on Rails",
    description: "E-commerce Demo App",
    url: "https://warm-journey-96233.herokuapp.com/"
  }
];

function loadWork(worksObj) {
  for(i = 0; i < worksObj.length; i++) {
    $(".work-wrapper").append("\
      <div class='col-md-4 col-xs-12'>\
        <figure class='project-item'>\
          <div class='project-cover'>\
            <h2>" + worksObj[i].workTitle + "</h2>\
            <i class='fa fa-bullseye' id='" + i + "'aria-hidden='true'></i>\
          </div><!-- end project-cover -->\
          <figcaption class='item-caption'>\
            <h2>" + worksObj[i].workTitle + "</h2>\
                      <h4>" + worksObj[i].languages + "</h4>\
                      <p>" + worksObj[i].description + "</p>\
                      <div>\
                        <a class='btn btn-default' href='" + worksObj[i].url + "' target='_blank'>Open page</a>\
                    </div>\
                  </figcaption><!-- end figcaption -->\
              </figure><!-- end figure -->\
            </div><!-- end col class -->\
    ");
  }
}
