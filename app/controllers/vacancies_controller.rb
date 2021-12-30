class VacanciesController < ApplicationController
  before_action :authorize_request_user
  def create
  	vacancy = Vacancy.create(vacancy_params) 
    if vacancy.valid?
        render json: {vacancy: vacancy}
    else
        render json: {errors: vacancy.errors.full_messages}, status: :not_acceptable
    end
  end

  def vacancy_params
    params.permit(:experience, :no_of_vacancy, :position_fill, :remaning_position, :job_position_id)
  end

end
