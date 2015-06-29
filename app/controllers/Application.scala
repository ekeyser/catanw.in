package controllers

import play.api._
import play.api.mvc._

class Application extends Controller {

  def index = Action {
    //    Ok(views.html.Application(Games.toArray))
    Ok(views.html.Application())
  }

}
