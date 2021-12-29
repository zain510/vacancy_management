class AuthController < ApplicationController
 
  def create
    @candidate = Candidate.find_by(email: params[:email])
    if @candidate && @candidate.authenticate(params[:password])
      session[:candidate_id] = @candidate.id
          render json: {
       jwt: encode_token({id: @candidate.id, candidate: @candidate.email})
    }
    else
      head :not_found
     end
  end

  private
   def encode_token(payload = {})
     exp= 24.hours.from_now
     payload[:exp] = exp.to_i
     JWT.encode(payload, Rails.application.secrets.secret_key_base)

   end

   def decode_token(token)
   JWT.decode(token, Rails.application.secrets.secret_key_base)
  end
end