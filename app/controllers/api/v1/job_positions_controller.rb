class Api::V1::JobPositionsController < ApplicationController
  def index
    job_positions = JobPosition.all
    render json: job_positions
  end
end
