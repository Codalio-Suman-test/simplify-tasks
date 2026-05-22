class CreateTodoItems < ActiveRecord::Migration[7.2]
  def change
    create_table :todo_items do |t|
      t.string :title, null: false
      t.text :description
      t.date :due_date
      t.time :due_time
      t.boolean :completed, default: false
      t.datetime :completed_at
      t.integer :priority, default: 0
      t.integer :position
      t.json :metadata
      t.references :organization, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.references :todo_list, null: false, foreign_key: true

      t.timestamps
    end
  end
end
