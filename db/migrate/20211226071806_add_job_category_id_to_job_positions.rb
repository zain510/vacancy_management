class AddJobCategoryIdToJobPositions < ActiveRecord::Migration[6.1]
  def change
    add_column :job_positions, :job_category_id, :integer
  end
end
