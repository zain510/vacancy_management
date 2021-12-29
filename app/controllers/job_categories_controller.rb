class JobCategoriesController < ApplicationController
  def index
  	@job_categories = JobCategory.all
  	render json: @job_categories
  end
  def show

  	@job_categories = JobCategory.all
  	render json: @job_categories
  end
end
