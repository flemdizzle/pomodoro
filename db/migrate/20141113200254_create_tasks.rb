class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :task
      t.string :type
      t.boolean :complete
      t.integer :user_id
      t.integer :team_id

      t.timestamps
    end
  end
end
