defmodule Cava.Repo.Migrations.CreateUnit do
  use Ecto.Migration

  def change do
    create table(:units) do
      add :name, :string

      timestamps()
    end
  end
end
