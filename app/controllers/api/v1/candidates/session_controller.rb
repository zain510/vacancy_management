class Api::V1::Candidates::SessionController < ApplicationController

  def login
    candidate = Candidate.find_by_email(params[:email])
    if candidate&.authenticate(params[:password])
      token = JsonWebToken.encode(candidate: candidate.id)
      time = Time.now + 24.hours.to_i
      render json: { token: token, exp: time.strftime("%m-%d-%Y %H:%M"),email: candidate.email }, status: :ok
    else
      render json: { error: 'Invalid Email or Password' }, status: :unauthorized
    end
  end

end