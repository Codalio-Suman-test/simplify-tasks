# frozen_string_literal: true

FactoryBot.define do
  factory :todo_list do
    name { "MyString" }
    description { "MyText" }
    visibility { 1 }
    position { 1 }
    organization { nil }
    user { nil }
  end
end
