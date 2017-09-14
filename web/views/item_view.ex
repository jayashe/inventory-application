# web/views/registration_view.ex
defmodule Cava.ItemView do
  use Cava.Web, :view

  def render("index.json", %{items: items}) do
  	items
  end

end