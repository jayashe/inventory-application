# web/controllers/registration_controller.ex
defmodule Cava.RegistrationController do
  use Cava.Web, :controller
  alias Cava.User

  def create(conn, %{"user" => user_params}) do
	  changeset = User.changeset(%User{}, user_params)

	  case Cava.Registration.create(changeset, Cava.Repo) do
	    {:ok, changeset} ->
	      conn
		  |> put_resp_content_type("text/plain")
		  |> send_resp(201, "created")
	    {:error, changeset} ->
	      conn
		  |> put_resp_content_type("text/plain")
		  |> send_resp(500, "failed")
	  end
  end
end
