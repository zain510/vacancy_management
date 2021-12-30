class CandidatesController < ApplicationController
  before_action :authorize_request_candidate, except: :create
  def create
    @candidate = Candidate.create(candidate_params) 
     if @candidate.valid?
        render json: @candidate, status: :created
    else
         render json: { errors: @candidate.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  private 

  def candidate_params
    params.permit(:first_name, :last_name, :email, :password, :experience, :vacancy_id)
  end
end
