defmodule Cava.UserTest do
  use Cava.ModelCase

  alias Cava.User

  @valid_attrs %{crypted_password: "some crypted_password", login: "some login", store_name: "some store_name"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = User.changeset(%User{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = User.changeset(%User{}, @invalid_attrs)
    refute changeset.valid?
  end
end
