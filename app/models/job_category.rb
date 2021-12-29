class JobCategory < ApplicationRecord
  has_many :job_positions
end
