# frozen_string_literal: true

FactoryBot.define do
  factory :todo_comment do
    content { "MyText" }
    todo_item { nil }
    user { nil }
    organization { nil }
  end
end
