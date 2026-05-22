class CreateTodoComments < ActiveRecord::Migration[7.2]
  def change
    create_table :todo_comments do |t|
      t.text :content, null: false
      t.references :todo_item, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.references :organization, null: false, foreign_key: true

      t.timestamps
    end
  end
end
