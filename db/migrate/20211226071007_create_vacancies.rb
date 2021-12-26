class CreateVacancies < ActiveRecord::Migration[6.1]
  def change
    create_table :vacancies do |t|
      t.float :experience
      t.integer :no_of_vacancy
      t.integer :position_fill
      t.integer :remaning_position
      t.timestamps
    end
  end
end
