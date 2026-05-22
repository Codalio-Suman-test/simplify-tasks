class CreateNotificationSettings < ActiveRecord::Migration[7.2]
  def change
    create_table :notification_settings do |t|
      t.boolean :reminders_enabled, default: true
      t.integer :default_reminder_minutes_before, default: 30
      t.integer :default_delivery_method, default: 0
      t.json :channels
      t.string :sound
      t.boolean :vibration_enabled, default: true
      t.references :user, null: false, foreign_key: true
      t.references :organization, null: false, foreign_key: true

      t.timestamps
    end
  end
end
