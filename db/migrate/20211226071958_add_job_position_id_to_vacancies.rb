class AddJobPositionIdToVacancies < ActiveRecord::Migration[6.1]
  def change
    add_column :vacancies, :job_position_id, :integer
  end
end
