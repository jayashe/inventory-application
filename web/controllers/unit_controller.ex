# web/controllers/registration_controller.ex
defmodule Cava.UnitController do
  use Cava.Web, :controller
  alias Cava.Unit

  def index(conn, _params) do
    units = Cava.Repo.all(Unit)
    render conn, units: units
  end

  def create(conn, %{"unit" => unit_params}) do
	  changeset = Unit.changeset(%Unit{}, unit_params)

	  case Unit.create(changeset, Cava.Repo) do
	    {:ok, changeset} ->
    	  IO.inspect changeset.id

    	  render conn, id: %{id: changeset.id}
	    {:error, changeset} ->
	      conn
		  |> put_resp_content_type("text/plain")
		  |> send_resp(500, "failed")
	  end
  end
end