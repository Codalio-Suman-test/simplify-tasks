# frozen_string_literal: true

FactoryBot.define do
  factory :system_setting do
    key { "MyString" }
    value { "" }
    description { "MyText" }
    organization { nil }
  end
end
