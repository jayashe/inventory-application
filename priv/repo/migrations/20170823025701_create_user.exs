defmodule Cava.Repo.Migrations.CreateUser do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :login, :string
      add :crypted_password, :string
      add :store_name, :string

      timestamps()
    end

    create unique_index(:users, [:login])
  end
end
