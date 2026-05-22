# frozen_string_literal: true

class NotificationSetting < ApplicationRecord
  belongs_to :user
  belongs_to :organization

  attribute :default_delivery_method, :integer
  enum :default_delivery_method, { email: 0, push: 1, sms: 2 }


  rhino_owner :organization
  rhino_references [ :user, :organization ]
end
