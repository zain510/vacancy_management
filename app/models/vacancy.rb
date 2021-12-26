class Vacancy < ApplicationRecord
  belongs_to :job_position
  has_many :candidates
end
