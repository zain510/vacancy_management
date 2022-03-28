class JobCategoriesController < ApplicationController
  before_action :authorize_request_user
  def index
  	@job_categories = JobCategory.all
  	render json: @job_categories
  end
  def show
  	@job_categories = JobCategory.all
  	render json: @job_categories
  end
end
