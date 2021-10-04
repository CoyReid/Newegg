class UserItemsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  before_action :confirm_authentication
  before_action :find_user_item, only: [:show, :update, :destroy]
  before_action :authorize_user, only: [:update, :destroy]

  def index
    render json: UserItem.all
  end

  def show
    render json: @user_item
  end

  def create
    @user_item = current_user.user_items.create!(user_item_params)
    render json: @user_item, status: :created
  end

  def update
    @user_item.update!(user_item_params)
    render json: @user_item
  end

  def destroy
    @user_item.destroy
    head :no_content
  end

  private

  def user_item_params
    params.permit(:item_id)
  end

  def find_user_item
    @user_item = UserItem.find(params[:id])
  end

  def render_unprocessable_entity_response(exception)
    render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
  end

  def render_not_found_response
    render json: {error: "Item not found"}, status: :not_found
  end

end
