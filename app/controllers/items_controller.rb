class ItemsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  
  before_action :confirm_authentication
  before_action :find_item, only: [:show, :update, :destroy]

  def index
    render json: Item.all
  end

  def show
    render json: @item
  end

  def update
    @item.update!(item_params)
    render json: @item
  end

  private

  def item_params
    params.permit(:stock, :rating)
  end

  def find_item
    @item = Item.find(params[:id])
  end

  def render_unprocessable_entity_response(exception)
    render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
  end

  def render_not_found_response
    render json: {error: "Item not found"}, status: :not_found
  end
end
