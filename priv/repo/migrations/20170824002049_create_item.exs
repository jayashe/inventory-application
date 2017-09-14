defmodule Cava.Repo.Migrations.CreateItem do
  use Ecto.Migration

  def change do
    create table(:items) do
      add :name, :string
      add :cost, :float
      add :unit_id, references(:units, on_delete: :nothing)

      timestamps()
    end

    create index(:items, [:unit_id])
  end
end
