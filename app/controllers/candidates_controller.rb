class CandidatesController < ApplicationController
  def create
    candidate = Candidate.create(candidate_params) 
    if candidate.valid?
        render json: {candidate: candidate}
    else
        render json: {errors: candidate.errors.full_messages}, status: :not_acceptable
    end
  end

  private 

  def candidate_params
    params.permit(:first_name, :last_name, :email, :password, :experience, :vacancy_id)
  end
end
