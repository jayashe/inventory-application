# web/controllers/registration_controller.ex
defmodule Cava.InventoryController do
  use Cava.Web, :controller
  alias Cava.Inventory
  alias Cava.User
  alias Cava.Item

  def index(conn, _params) do
    inventories = Inventory 
    		|> Cava.Repo.all() 
    		|> Repo.preload(:item)
        |> Repo.preload(item: :unit)
        |> Repo.preload([:user])
    render conn, inventories: inventories
  end

  def create(conn, %{"inventory" => inventory_params}) do
  	item = Repo.get(Item, inventory_params["item_id"])
    user = Repo.get(User, inventory_params["user_id"])

    changeset = Inventory.changeset(%Inventory{}, inventory_params)
                |> Ecto.Changeset.change()
                |> Ecto.Changeset.put_assoc(:item, item)
                |> Ecto.Changeset.put_assoc(:user, user)

	  case Inventory.create(changeset, Cava.Repo) do
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
