# frozen_string_literal: true

FactoryBot.define do
  factory :notification_setting do
    reminders_enabled { false }
    default_reminder_minutes_before { 1 }
    default_delivery_method { 1 }
    channels { "" }
    sound { "MyString" }
    vibration_enabled { false }
    user { nil }
    organization { nil }
  end
end
