class Api::V1::Candidates::CandidatesController < ApplicationController

  def sign_up
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