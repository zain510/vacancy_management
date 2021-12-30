class Api::V1::VacanciesController < ApplicationController
  before_action :authorize_request
  
  def create
    vacancy = Vacancy.new(vacancy_params)
    if vacancy.save
      render json: {vacancy: vacancy}
    else
      render json: {errors: vacancy.errors.full_messages}, status: :not_acceptable
    end
  end

  def vacancy_params
    params.require(:vacancy).permit(:experience, :no_of_vacancy, :position_fill, :remaning_position, :job_position_id)
  end

end