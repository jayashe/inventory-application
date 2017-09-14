# web/views/registration_view.ex
defmodule Cava.InventoryView do
  use Cava.Web, :view

  def render("index.json", %{inventories: inventories}) do
  	inventories
  end

end