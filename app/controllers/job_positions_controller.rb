class JobPositionsController < ApplicationController
  before_action :authorize_request_user
  def index
  	@job_positions = JobPosition.all
  	render json: @job_positions
  end
  def show
  	@job_positions = JobPosition.all
  	render json: @job_positions
  end
end
