# frozen_string_literal: true

class TodoItem < ApplicationRecord
  belongs_to :organization
  belongs_to :user
  belongs_to :todo_list

  has_many :notifications, dependent: :destroy
  has_many :todo_comments, dependent: :destroy
  has_many :reminders, dependent: :destroy

  attribute :priority, :integer
  enum :priority, { low: 0, medium: 1, high: 2, urgent: 3 }

  validates :title, presence: true

  rhino_owner :organization
  rhino_references [ :organization, :user, :todo_list ]
end
