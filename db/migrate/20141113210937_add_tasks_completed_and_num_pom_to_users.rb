class AddTasksCompletedAndNumPomToUsers < ActiveRecord::Migration
  def change
    add_column :users, :tasks_completed, :integer
    add_column :users, :num_pom, :integer
  end
end
