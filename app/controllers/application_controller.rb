class ApplicationController < ActionController::Base
  before_action :authorize_request
  skip_before_action :verify_authenticity_token

  def not_found
    render json: { error: 'not_found' }
  end

  def find_type(type)
    if(type.first == "candidate")
      candidate = Candidate.find(type.second)
    elsif(type.first == "user")
      user = User.find(type.second)
    end
  end

  def authorize_request
    header = request.headers['Authorization']
    header = header.split(' ').last if header
    begin
      decoded = JsonWebToken.decode(header)
      @current_user = find_type(decoded.first)
    rescue ActiveRecord::RecordNotFound => e
      render json: { errors: e.message }, status: :unauthorized
    rescue JWT::DecodeError => e
      render json: { errors: e.message }, status: :unauthorized
    end
  end
end
