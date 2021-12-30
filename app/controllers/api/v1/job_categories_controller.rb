class Api::V1::JobCategoriesController < ApplicationController
  before_action :authorize_request
  
  def index
    job_categories = JobCategory.all
  	render json: job_categories
  end

end
