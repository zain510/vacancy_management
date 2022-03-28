class Api::V1::JobCategoriesController < ApplicationController
  def index
    job_categories = JobCategory.all
    render json: job_categories
  end
end
