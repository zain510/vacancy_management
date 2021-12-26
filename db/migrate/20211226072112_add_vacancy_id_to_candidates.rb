class AddVacancyIdToCandidates < ActiveRecord::Migration[6.1]
  def change
    add_column :candidates, :vacancy_id, :integer
  end
end
