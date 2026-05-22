class CreateTodoLists < ActiveRecord::Migration[7.2]
  def change
    create_table :todo_lists do |t|
      t.string :name, null: false
      t.text :description
      t.integer :visibility, default: 0
      t.integer :position
      t.references :organization, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end

    add_index :todo_lists, [ :name, :organization_id ], unique: true
  end
end
