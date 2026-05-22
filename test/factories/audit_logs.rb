# frozen_string_literal: true

FactoryBot.define do
  factory :audit_log do
    target_model { "MyString" }
    target_identifier { "MyString" }
    action { "MyString" }
    details { "" }
    user { nil }
    organization { nil }
  end
end
