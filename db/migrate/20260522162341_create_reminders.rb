class CreateReminders < ActiveRecord::Migration[7.2]
  def change
    create_table :reminders do |t|
      t.datetime :remind_at, null: false
      t.integer :delivery_method, default: 0
      t.string :recurrence
      t.integer :occurrences
      t.date :end_date
      t.datetime :snoozed_until
      t.boolean :enabled, default: true
      t.references :todo_item, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.references :organization, null: false, foreign_key: true

      t.timestamps
    end
  end
end
