class JobPositionsController < ApplicationController
  def index
  	@job_positions = JobPosition.all
  	render json: @job_positions
  end
  def show
  	@job_positions = JobPosition.all
  	render json: @job_positions
  end
end
