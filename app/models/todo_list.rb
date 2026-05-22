# frozen_string_literal: true

class TodoList < ApplicationRecord
  belongs_to :organization
  belongs_to :user

  has_many :todo_items, dependent: :destroy

  attribute :visibility, :integer
  enum :visibility, { private_list: 0, public_list: 1, shared_list: 2 }

  validates :name, presence: true, uniqueness: { scope: :organization_id }

  rhino_owner :organization
  rhino_references [ :organization, :user ]
end
