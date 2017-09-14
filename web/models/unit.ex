defmodule Cava.Unit do
  use Cava.Web, :model

  @derive {Poison.Encoder, only: [:id, :name]}
  schema "units" do
    field :name, :string

    has_many :items, Cava.Item
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
    |> cast(params, [:name])
    |> validate_required([:name])
  end

end
