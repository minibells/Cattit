class Api::SubscribesController < ApplicationController

  before_action :find_subcattit
  before_action :already_subscribed?, only: [:destroy]


  def create
    if already_subscribed?
      render json: @subcattit
    else
      @subcattit = Subcattit.find_by(name: params[:subcattit_id])
      @subscribe = @subcattit.subscribes.create(user_id: current_user.id, subcattit_id: @subcattit.id)
      render json: @subscribe
    end
  end

  def destroy
    if already_subscribed?
      @subcattit = Subcattit.find_by(name: params[:subcattit_id])
      @subscribe = Subscribe.find_by(user_id: current_user.id, subcattit_id: @subcattit.id)
      @subscribe.destroy
      render json: @subscribe
    else
      render json: @subscribe
    end
  end



private

  def find_subcattit
      @subcattit = Subcattit.find_by(name: params[:subcattit_id])
  end

  def already_subscribed?
    Subscribe.where(user_id: current_user.id, subcattit_id:
    @subcattit.id).exists?
  end


end