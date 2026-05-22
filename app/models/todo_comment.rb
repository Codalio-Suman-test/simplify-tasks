# frozen_string_literal: true

class TodoComment < ApplicationRecord
  belongs_to :todo_item
  belongs_to :user
  belongs_to :organization

  validates :content, presence: true

  rhino_owner :organization
  rhino_references [ :todo_item, :user, :organization ]
end
