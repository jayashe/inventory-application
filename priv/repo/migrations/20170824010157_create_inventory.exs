defmodule Cava.Repo.Migrations.CreateInventory do
  use Ecto.Migration

  def change do
    create table(:inventories) do
      add :quantity, :float
      add :item_id, references(:items, on_delete: :nothing)
      add :user_id, references(:users, on_delete: :nothing)

      timestamps()
    end

    create index(:inventories, [:item_id])
    create index(:inventories, [:user_id])
  end
end
