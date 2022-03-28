class Api::V1::Candidates::CandidatesController < ApplicationController
  skip_before_action :authorize_request
  
  def create
    candidate = Candidate.new(candidate_params)
    if candidate.save
      render json: candidate, status: :created
    else
      render json: { errors: candidate.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private 
  def candidate_params
    params.require(:candidate).permit(:first_name, :last_name, :email, :password, :experience, :vacancy_id)
  end
end
