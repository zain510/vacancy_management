class Api::V1::JobPositionsController < ApplicationController
  before_action :authorize_request
  
  def index
  	job_positions = JobPosition.all
  	render json: job_positions
  end

end
