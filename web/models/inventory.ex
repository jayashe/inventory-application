defmodule Cava.Inventory do
  use Cava.Web, :model

  @derive {Poison.Encoder, only: [:id, :quantity, :item, :user]}
  schema "inventories" do
    field :quantity, :float
    belongs_to :item, Cava.Item, foreign_key: :item_id
    belongs_to :user, Cava.User, foreign_key: :user_id

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
    |> cast(params, [:quantity])
    |> validate_required([:quantity])
  end
end
