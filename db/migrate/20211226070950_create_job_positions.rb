class CreateJobPositions < ActiveRecord::Migration[6.1]
  def change
    create_table :job_positions do |t|
      t.string :name
      t.integer :no_of_position
      t.timestamps
    end
  end
end
