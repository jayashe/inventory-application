defmodule Cava.User do
  use Cava.Web, :model

  @derive {Poison.Encoder, only: [:id, :store_name]}
  schema "users" do
    field :login, :string
    field :crypted_password, :string
    field :password, :string, virtual: true
    field :store_name, :string

    has_many :inventories, Cava.Inventory
    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:login, :password, :store_name])
    |> validate_required([:login, :password])
    |> unique_constraint(:login)
    |> validate_length(:password, min: 5)
  end
end
