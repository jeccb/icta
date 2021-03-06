defmodule Icta.Repo.Migrations.CreateVote do
  use Ecto.Migration

  def change do
    create table(:votes) do
      add :vote, :boolean, default: false, null: false
      add :user_id, references(:users, on_delete: :nothing)
      add :idea_id, references(:ideas, on_delete: :nothing)

      timestamps()
    end
    create index(:votes, [:user_id])
    create index(:votes, [:idea_id])

  end
end
