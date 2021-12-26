class CreateJobCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :job_categories do |t|
      t.string :name
      t.string :description
      t.string :job_code
      t.timestamps
    end
  end
end
