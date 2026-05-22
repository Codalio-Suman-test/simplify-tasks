# frozen_string_literal: true

class AuditLog < ApplicationRecord
  belongs_to :user
  belongs_to :organization

  validates :action, presence: true

  rhino_owner :organization
  rhino_references [ :user, :organization ]
end
