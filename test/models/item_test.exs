defmodule Cava.ItemTest do
  use Cava.ModelCase

  alias Cava.Item

  @valid_attrs %{cost: 120.5, name: "some name"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Item.changeset(%Item{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Item.changeset(%Item{}, @invalid_attrs)
    refute changeset.valid?
  end
end
