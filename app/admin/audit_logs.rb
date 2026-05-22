# frozen_string_literal: true

ActiveAdmin.register AuditLog do
  rhino_filters
  rhino_permit_params
end
