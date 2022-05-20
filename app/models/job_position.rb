class JobPosition < ApplicationRecord
	has_many :vacancies
	belongs_to :job_category
end
