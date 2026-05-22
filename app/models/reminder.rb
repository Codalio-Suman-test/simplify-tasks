# frozen_string_literal: true

class Reminder < ApplicationRecord
  belongs_to :todo_item
  belongs_to :user
  belongs_to :organization

  attribute :delivery_method, :integer
  enum :delivery_method, { email: 0, push: 1, sms: 2 }

  validates :remind_at, presence: true

  rhino_owner :organization
  rhino_references [ :todo_item, :user, :organization ]
end
