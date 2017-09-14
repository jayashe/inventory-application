defmodule Cava.SessionController do
  use Cava.Web, :controller

  def new(conn, _params) do
    render conn, "new.html"
  end

  def create(conn, %{"session" => session_params}) do
	  case Cava.Session.login(session_params, Cava.Repo) do
	    {:ok, user} ->
	      conn
	      |> fetch_session
	      |> put_session(:current_user, user.id)
		  |> put_resp_content_type("text/plain")
		  |> send_resp(200, "logged in")
    	:error ->
	      conn
		  |> put_resp_content_type("text/plain")
		  |> send_resp(401, "unauthorized")
	  end
	end


  def delete(conn, _) do
	  conn
	  |> fetch_session
	  |> delete_session(:current_user)
	  |> put_resp_content_type("text/plain")
	  |> send_resp(200, "logged out")
  end
end
