# frozen_string_literal: true

FactoryBot.define do
  factory :reminder do
    remind_at { "2026-05-22 16:23:41" }
    delivery_method { 1 }
    recurrence { "MyString" }
    occurrences { 1 }
    end_date { "2026-05-22" }
    snoozed_until { "2026-05-22 16:23:41" }
    enabled { false }
    todo_item { nil }
    user { nil }
    organization { nil }
  end
end
