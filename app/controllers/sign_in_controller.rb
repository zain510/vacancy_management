class SignInController < ApplicationController
  # before_action :authorize_request_user, except: :login
  # before_action :authorize_request_candidate, except: :create

  def create
    @candidate = Candidate.find_by_email(params[:email])
    if @candidate&.authenticate(params[:password])
      token = JsonWebToken.encode(candidate_id: @candidate.id)
      time = Time.now + 24.hours.to_i
      render json: { token: token, exp: time.strftime("%m-%d-%Y %H:%M"),
                     email: @candidate.email }, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end


  # POST /auth/login
  def login
    @user = User.find_by_email(params[:email])
    if @user&.authenticate(params[:password])
      token = JsonWebToken.encode(user_id: @user.id)
      time = Time.now + 24.hours.to_i
      render json: { token: token, exp: time.strftime("%m-%d-%Y %H:%M"),
                     email: @user.email }, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end

  private

  def login_params
    params.permit(:email, :password)
  end

end