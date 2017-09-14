defmodule Cava.Item do
  use Cava.Web, :model

  @derive {Poison.Encoder, only: [:id, :name, :cost, :unit]}
  schema "items" do
    field :name, :string
    field :cost, :float
    belongs_to :unit, Cava.Unit, foreign_key: :unit_id

    has_many :inventories, Cava.Inventory
    timestamps()
  end

  def create(changeset, repo) do
    changeset
    |> repo.insert()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:name, :cost])
    |> validate_required([:name, :cost])
  end
end
