class Api::V1::Users::SessionController < ApplicationController
  skip_before_action :authorize_request
  
  def create
    user = User.find_by_email(params[:email])
    if user&.authenticate(params[:password])
      token = JsonWebToken.encode(user: user.id)
      time = Time.now + 24.hours.to_i
      render json: { token: token, exp: time.strftime("%m-%d-%Y %H:%M"),email: user.email }, status: :ok
    else
      render json: { error: 'Invalid Email or Password' }, status: :unauthorized
    end
  end
end
