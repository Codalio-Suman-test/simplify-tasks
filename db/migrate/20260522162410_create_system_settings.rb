class CreateSystemSettings < ActiveRecord::Migration[7.2]
  def change
    create_table :system_settings do |t|
      t.string :key, null: false
      t.json :value
      t.text :description
      t.references :organization, null: false, foreign_key: true

      t.timestamps
    end

    add_index :system_settings, :key, unique: true
  end
end
