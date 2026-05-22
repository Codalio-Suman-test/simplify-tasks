# frozen_string_literal: true

ActiveAdmin.register TodoItem do
  rhino_filters
  rhino_permit_params
end
