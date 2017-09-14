# web/controllers/registration_controller.ex
defmodule Cava.ItemController do
  use Cava.Web, :controller
  alias Cava.Item
  alias Cava.Unit

  def index(conn, _params) do
    items = Item 
    		|> Cava.Repo.all() 
    		|> Repo.preload(:unit)
    render conn, items: items
  end

  def create(conn, %{"item" => item_params}) do
  	unit = Repo.get(Unit, item_params["unit_id"])
  	changeset = Item.changeset(%Item{}, item_params)
  				|> Ecto.Changeset.change()
      			|> Ecto.Changeset.put_assoc(:unit, unit)

	  case Item.create(changeset, Cava.Repo) do
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
