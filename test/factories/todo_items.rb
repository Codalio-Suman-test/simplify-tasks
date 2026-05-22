# frozen_string_literal: true

FactoryBot.define do
  factory :todo_item do
    title { "MyString" }
    description { "MyText" }
    due_date { "2026-05-22" }
    due_time { "2026-05-22 16:23:10" }
    completed { false }
    completed_at { "2026-05-22 16:23:10" }
    priority { 1 }
    position { 1 }
    metadata { "" }
    organization { nil }
    user { nil }
    todo_list { nil }
  end
end
