defmodule Cava.Router do
  use Cava.Web, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", Cava do
    pipe_through :api

    # web/router.ex
	resources "/registrations", RegistrationController, only: [:create]

	get    "/login",  SessionController, :new
	post   "/login",  SessionController, :create
	delete "/logout", SessionController, :delete

	resources "/units", UnitController, only: [:create, :index]

	resources "/items", ItemController, only: [:create, :index, :show]

	resources "/inventory", InventoryController, only: [:create, :index]
  end
end
