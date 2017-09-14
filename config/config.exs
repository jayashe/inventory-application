# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :cava,
  ecto_repos: [Cava.Repo]

# Configures the endpoint
config :cava, Cava.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "s0nzzHMHkEIwePT1PKb+SsKCeGvughFQh2va1oS8QPyqCd/RthMq4k7x7MzbSufr",
  render_errors: [view: Cava.ErrorView, accepts: ~w(json)],
  pubsub: [name: Cava.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
