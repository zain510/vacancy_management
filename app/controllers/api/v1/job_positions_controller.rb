class Api::V1::JobPositionsController < ApplicationController
  def index
    job_positions = JobPosition.all
    render json: job_positions
  end

  def show
    job_positions = JobPosition.where(job_category_id: params[:job_category_id])
    render json: job_positions
  end
end
