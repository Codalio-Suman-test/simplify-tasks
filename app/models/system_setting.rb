# frozen_string_literal: true

class SystemSetting < ApplicationRecord
  belongs_to :organization

  validates :key, presence: true, uniqueness: true

  rhino_owner :organization
  rhino_references [ :organization ]
end
