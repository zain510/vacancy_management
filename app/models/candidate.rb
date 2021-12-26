class Candidate < ApplicationRecord
  belongs_to :vacancy, optional: true
  has_secure_password
end
