# web/views/registration_view.ex
defmodule Cava.UnitView do
  use Cava.Web, :view

  def render("index.json", %{units: units}) do
  	units
  end

  def render("create.json", %{id: id}) do
  	id
  end

end