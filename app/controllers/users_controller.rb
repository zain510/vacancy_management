class UsersController < ApplicationController
  before_action :authorize_request_user, except: :create
  # before_action :find_user, except: %i[create index]
  # skip_before_action :require_login, only: [:create]
  def create
    @user = User.create(user_params)
     if @user.valid?
        render json: @user, status: :created
    else
         render json: { errors: @user.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  private 

  # def find_user
  #   @user = User.find_by_email!(params[:_email])
  #   rescue ActiveRecord::RecordNotFound
  #     render json: { errors: 'User not found' }, status: :not_found
  # end

  def user_params
    params.permit(:first_name, :last_name, :email, :password)
  end
end
